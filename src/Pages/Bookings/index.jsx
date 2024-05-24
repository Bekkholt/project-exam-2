import Logout from "../../Components/Logout";
import FetchMyBookings from "../../Hooks/MyBookingsAPI";
import FetchMyVenues from "../../Hooks/MyVenuesAPI";
import { Link } from "react-router-dom";
import * as S from "./index.styles";
import { BounceLoader } from "react-spinners";
import FetchMyProfile from "../../Hooks/MyProfileAPI";
import dateFormat from "dateformat";

export default function Bookings() {
  const isLoggedOut = localStorage.getItem("accessToken") === null;
  if (isLoggedOut) {
    return (
      <S.CardDiv>
        <S.Card>
          <S.Text>You have to log in to see your bookings</S.Text>
          <Link to="../../Pages/Loginpage">
            <S.Button className="header">Go to login</S.Button>
          </Link>
        </S.Card>
      </S.CardDiv>
    );
  }

  const name = localStorage.getItem("name");
  const bookingsUrl = `https://v2.api.noroff.dev/holidaze/profiles/${name}?_bookings=true`;
  const bookings = FetchMyBookings(bookingsUrl);
  const venuesUrl = `https://v2.api.noroff.dev/holidaze/profiles/${name}/venues`;
  const venues = FetchMyVenues(venuesUrl);
  const profileUrl = `https://v2.api.noroff.dev/holidaze/profiles/${name}`;
  const profile = FetchMyProfile(profileUrl);

  if (bookings.isError === true || venues.isError === true) {
    return (
      <S.Wrapper>
        <S.VenueCard>
          <S.GeneralText>
            You have to log in to see your bookings and venues
          </S.GeneralText>
          <Link to="../../Pages/Loginpage">
            <S.Button className="header">Go to login</S.Button>
          </Link>
        </S.VenueCard>
      </S.Wrapper>
    );
  }

  function Manager() {
    if (!profile.profile) return <></>;
    if (profile.profile.venueManager) {
      if (venues.venues === undefined) {
        return <S.Heading className="header">My Venues</S.Heading>;
      }
      return (
        <>
          <S.Heading className="header">My venues</S.Heading>
          <Spinner />
          {venues.venues.map((venue) => {
            return (
              <S.VenueCard key={venue.id}>
                <Link to={`../../Pages/Venuepage/${venue.id}`}>
                  <S.TopCard>
                    <S.VenueImage src={venue.media[0].url} />
                  </S.TopCard>
                  <S.Title className="header">{venue.name}</S.Title>
                  <S.GeneralText className="text">
                    {venue.location.city}, {venue.location.country}
                  </S.GeneralText>
                  <S.GeneralText className="text">
                    {venue.description}
                  </S.GeneralText>
                  <S.BottomCard>
                    <S.VenuePrice className="text">
                      ${venue.price}/night
                    </S.VenuePrice>
                    <S.Booked className="header">Current bookings:</S.Booked>
                    <S.Booked className="header">
                      {venue._count.bookings}
                    </S.Booked>
                  </S.BottomCard>
                </Link>
                <Link to={`../../Pages/Updatevenuepage/${venue.id}`}>
                  <S.UpdateButton className="text">Update venue</S.UpdateButton>
                </Link>
              </S.VenueCard>
            );
          })}
        </>
      );
    }

    return <></>;
  }

  function Spinner() {
    if (bookings.isLoading === true || venues.isLoading === true) {
      return (
        <S.Wrapper>
          <BounceLoader
            loading={bookings.isLoading || venues.isLoading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
            color="#f29c6b"
          />
        </S.Wrapper>
      );
    } else {
      return <></>;
    }
  }

  return (
    <S.OuterDiv>
      <S.Heading className="header">My bookings</S.Heading>
      <Spinner />
      {bookings?.bookings?.map((booking) => {
        return (
          <S.VenueCard key={booking.id}>
            <Link to={`../../Pages/Venuepage/${booking.venue.id}`}>
              <S.TopCard>
                <S.VenueImage src={booking.venue.media[0].url} />
              </S.TopCard>
              <S.Title className="header">{booking.venue.name}</S.Title>
              <S.GeneralText className="text">
                {booking.venue.location.city}, {booking.venue.location.country}
              </S.GeneralText>
              <S.GeneralText className="text">
                {booking.venue.description}
              </S.GeneralText>
              <S.Booked className="text">Booked dates: </S.Booked>
              <S.Booked className="header">
                {dateFormat(booking.dateFrom, "mmmm dS, yyyy")}{" "}
              </S.Booked>{" "}
              <S.Booked className="text"> to </S.Booked>{" "}
              <S.Booked className="header">
                {dateFormat(booking.dateTo, "mmmm dS, yyyy")}
              </S.Booked>
              <S.BottomCard>
                <S.VenuePrice className="text">
                  ${booking.venue.price}/night
                </S.VenuePrice>
              </S.BottomCard>
            </Link>
          </S.VenueCard>
        );
      })}
      <Manager />
      <Logout />
    </S.OuterDiv>
  );
}
