import Logout from "../../Components/Logout";
import FetchMyBookings from "../../Hooks/MyBookingsAPI";
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
          <S.ProfileDiv key={booking.id}>
            <S.Title>{booking.venue.name}</S.Title>
            <S.VenueImage>{booking.venue.media.url}</S.VenueImage>
            <S.Text>{booking.dateFrom}</S.Text>
            <S.Text>{booking.dateTo}</S.Text>
          </S.ProfileDiv>
        );
      })}
      <Logout />
    </S.OuterDiv>
  );
}
