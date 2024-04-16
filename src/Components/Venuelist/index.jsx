import Venues from "../Venues";
import FetchAPI from "../../Hooks/API";
import * as S from "./index.styles";

export default function VenueList() {
  const { venues } = FetchAPI("https://v2.api.noroff.dev/holidaze/venues");
  <FetchAPI />;
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
