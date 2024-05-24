import Venues from "../Venues";
import * as S from "./index.styles";
import FetchVenues from "../../Hooks/VenueAPI/index";
import { BounceLoader } from "react-spinners";
import { useState } from "react";

const sortBy = "created";
const limit = 18;
const allVenues = [];

export default function VenueList() {
  const [page, setPage] = useState(1);
  const { venues, isLoading } = FetchVenues(
    `https://v2.api.noroff.dev/holidaze/venues/?sort=${sortBy}&limit=${limit}&page=${page}`
  );

  function LoadMore(e) {
    setPage(page + 1);
  }

  if (venues?.length > 0) {
    venues.forEach((venue) => {
      if (allVenues.findIndex((v) => v.id === venue.id) === -1) {
        allVenues.push(venue);
      }
    });
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
      <S.Wrapper>
        <Spinner />
        {allVenues.map((venue) => (
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
      </S.Wrapper>
      <S.Wrapper>
        <S.Button className="text" onClick={LoadMore}>
          See more venues
        </S.Button>
      </S.Wrapper>
    </div>
  );
}
