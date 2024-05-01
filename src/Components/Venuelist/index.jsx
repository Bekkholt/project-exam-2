import Venues from "../Venues";
import * as S from "./index.styles";
import FetchVenues from "../../Hooks/VenueAPI/index";

export default function VenueList() {
  const { venues } = FetchVenues("https://v2.api.noroff.dev/holidaze/");
  <FetchVenues />;
  return (
    <S.ProductWrapper>
      {venues.map((venue) => (
        <Venues
          key={venue.id}
          id={venue.id}
          image={venue.media}
          name={venue.name}
          description={venue.description}
          price={venue.price}
          location={venue.location}
        />
      ))}
    </S.ProductWrapper>
  );
}
