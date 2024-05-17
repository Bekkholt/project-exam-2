import Venues from "../Venues";
import * as S from "./index.styles";
import FetchVenues from "../../Hooks/VenueAPI/index";

const sortBy = "created";
const limit = 20;
let offset = 0;

export default function VenueList() {
  const { venues } = FetchVenues(
    `https://v2.api.noroff.dev/holidaze/venues/?sort=${sortBy}&limit=${limit}&offset=${offset}`
  );

  function onClick(e) {
    offset += limit;
    VenueList(e);
  }

  <FetchVenues />;
  return (
    <div>
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
      <S.ProductWrapper>
        <S.Button className="text" onClick={onClick}>
          See more venues
        </S.Button>
      </S.ProductWrapper>
    </div>
  );
}
