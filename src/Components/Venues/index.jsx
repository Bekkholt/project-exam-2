import React from "react";
import { Link } from "react-router-dom";
import * as S from "./index.styles";

export default function Venues(venue) {
  return (
    <S.VenueCard>
      <Link to={`../../Pages/Venuepage/${venue.id}`}>
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
      </Link>
    </S.VenueCard>
  );
}
