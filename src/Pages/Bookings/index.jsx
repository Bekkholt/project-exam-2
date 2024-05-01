import Logout from "../../Components/Logout";
import FetchMyBookings from "../../Hooks/MyBookingsAPI";
import { Link } from "react-router-dom";
import * as S from "./index.styles";

const name = localStorage.getItem("name");

export default function ProfilePageCustomer() {
  const bookings = FetchMyBookings(
    "https://v2.api.noroff.dev/holidaze/profiles/" + name + "?_bookings=true"
  );
  console.log(bookings);

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
                <S.VenueDescription>
                  {booking.venue.description}
                </S.VenueDescription>
              </S.VenueDescription>
              <S.VenueDescription className="text">
                Booked dates:{" "}
                <S.VenueDescription className="text">
                  {booking.dateFrom}{" "}
                </S.VenueDescription>{" "}
                <S.VenueDescription className="text"> to </S.VenueDescription>{" "}
                <S.VenueDescription className="text">
                  {booking.dateTo}
                </S.VenueDescription>
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
