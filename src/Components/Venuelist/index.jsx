import Venues from "../Venues";
import * as S from "./index.styles";
import FetchVenues from "../../Hooks/VenueAPI/index";
import { BounceLoader } from "react-spinners";

const sortBy = "created";
const limit = 20;
let offset = 0;
const allVenues = [];
let lastOffset = -1;

export default function VenueList() {
  const { venues, isLoading } = FetchVenues(
    `https://v2.api.noroff.dev/holidaze/venues/?sort=${sortBy}&limit=${limit}&offset=${offset}`
  );
  function onClick(e) {
    offset += limit;
    // VenueList(e);
    if (lastOffset === -1) {
      allVenues.push(...venues);
      lastOffset = 0;
    }
  }

  function Spinner() {
    if (isLoading === true) {
      return (
        <>
          <BounceLoader
            loading={isLoading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
            color="#f29c6b"
          />
        </>
      );
    } else {
      return <></>;
    }
  }
  return (
    <div>
      <S.ProductWrapper>
        <Spinner />
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
