import Logout from "../../Components/Logout";
import FetchMyBookings from "../../Hooks/MyBookingsAPI";
import { Link } from "react-router-dom";
import * as S from "./index.styles";

const name = localStorage.getItem("name");
// const token = localStorage.getItem("accessToken");

export default function Bookings() {
  const bookings = FetchMyBookings(
    "https://v2.api.noroff.dev/holidaze/profiles/" + name + "?_bookings=true"
  );
  console.log(bookings);

  if (bookings.isError === true) {
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

  if (bookings.bookings.length === 0) return <></>;
  if (bookings.isLoading === true) return <></>;

  return (
    <S.OuterDiv>
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
      <Logout />
    </S.OuterDiv>
  );
}
