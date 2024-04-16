// import FetchAPI from "../../Hooks/API";
import React from "react";
import * as S from "./index.styles";

export default function Venues(venue) {
  return (
    <S.VenueCard>
      <S.TopCard>
        <S.VenueImage src={venue.image[0].url} />
      </S.TopCard>
      <S.Title className="header">{venue.name}</S.Title>
      <S.VenueDescription className="text">
        {venue.location.city}, {venue.location.country}
      </S.VenueDescription>

      <S.BottomCard>
        <S.Button className="header">See more</S.Button>
        <S.VenuePrice className="text">${venue.price}/night</S.VenuePrice>
      </S.BottomCard>
    </S.VenueCard>
  );
}
