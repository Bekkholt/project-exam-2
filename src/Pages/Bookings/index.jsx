import Logout from "../../Components/Logout";
import FetchMyBookings from "../../Hooks/MyBookingsAPI";
import FetchMyVenues from "../../Hooks/MyVenuesAPI";
import { Link } from "react-router-dom";
import * as S from "./index.styles";
import { BounceLoader } from "react-spinners";

export default function Bookings() {
  const isLoggedOut = !localStorage.getItem("accessToken");
  if (isLoggedOut) {
    return (
      <S.ProductWrapper>
        <S.VenueCard>
          <S.VenueDescription>
            You have to log in to see your bookings
          </S.VenueDescription>
          <Link to="../../Pages/Loginpage">
            <S.Button className="header">Go to login</S.Button>
          </Link>
        </S.VenueCard>
      </S.ProductWrapper>
    );
  }

  const name = localStorage.getItem("name");
  const bookingsUrl = `https://v2.api.noroff.dev/holidaze/profiles/${name}?_bookings=true`;
  const bookings = FetchMyBookings(bookingsUrl);
  const venuesUrl = `https://v2.api.noroff.dev/holidaze/profiles/${name}/venues`;
  const venues = FetchMyVenues(venuesUrl);
  if (bookings.isError === true || venues.isError === true) {
    return (
      <S.ProductWrapper>
        <S.VenueCard>
          <S.VenueDescription>
            You have to log in to see your bookings and venues
          </S.VenueDescription>
          <Link to="../../Pages/Loginpage">
            <S.Button className="header">Go to login</S.Button>
          </Link>
        </S.VenueCard>
      </S.ProductWrapper>
    );
  }

  console.log(venues);

  function Spinner() {
    if (bookings.isLoading === true || venues.isLoading === true) {
      return (
        <>
          <S.ProductWrapper>
            <BounceLoader
              loading={bookings.isLoading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
              color="#f29c6b"
            />
          </S.ProductWrapper>
        </>
      );
    } else {
      return <></>;
    }
  }

  return (
    <S.OuterDiv>
      <S.Title className="header">My bookings</S.Title>
      <Spinner />
      {bookings.bookings.map((booking) => {
        return (
          <S.VenueCard key={booking.id}>
            <Link to={`../../Pages/Venuepage/${booking.venue.id}`}>
              <S.TopCard>
                <S.VenueImage src={booking.venue.media.url} />
              </S.TopCard>
              <S.Title className="header">{booking.venue.name}</S.Title>
              <S.VenueDescription className="text">
                {booking.venue.location.city}, {booking.venue.location.country}
              </S.VenueDescription>
              <S.VenueDescription>
                {booking.venue.description}
              </S.VenueDescription>
              <S.VenueDescription className="text">
                Booked dates:{" "}
              </S.VenueDescription>
              <S.VenueDescription className="text">
                {booking.dateFrom}{" "}
              </S.VenueDescription>{" "}
              <S.VenueDescription className="text"> to </S.VenueDescription>{" "}
              <S.VenueDescription className="text">
                {booking.dateTo}
              </S.VenueDescription>
              <S.BottomCard>
                <S.VenuePrice className="text">
                  ${booking.venue.price}/night
                </S.VenuePrice>
              </S.BottomCard>
            </Link>
          </S.VenueCard>
        );
      })}
      <S.Title className="header">My venues</S.Title>
      <Spinner />
      {venues.venues.map((venue) => {
        return (
          <>
            <S.VenueCard key={venue.id}>
              <Link to={`../../Pages/Venuepage/${venue.id}`}>
                <S.TopCard>
                  <S.VenueImage src={venue.media.url} />
                </S.TopCard>
                <S.Title className="header">{venue.name}</S.Title>
                <S.VenueDescription className="text">
                  {venue.location.city}, {venue.location.country}
                </S.VenueDescription>
                <S.VenueDescription>{venue.description}</S.VenueDescription>
                <S.BottomCard>
                  <S.VenuePrice className="text">
                    ${venue.price}/night
                  </S.VenuePrice>
                  <S.VenueDescription className="text">
                    Current bookings:
                  </S.VenueDescription>
                  <S.VenueDescription>
                    {venue._count.bookings}
                  </S.VenueDescription>
                </S.BottomCard>
              </Link>
              <Link to={`../../Pages/Updatevenuepage/${venue.id}`}>
                <S.Button className="text">Update venue</S.Button>
              </Link>
            </S.VenueCard>
          </>
        );
      })}
      <Logout />
    </S.OuterDiv>
  );
}
