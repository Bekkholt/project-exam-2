import * as S from "./index.styles";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Venuepage() {
  const [venueDetails, setVenueDetails] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setVenueDetails(json.data);
      } catch (error) {
        console.log(error);
      }
    }

    getData(`https://v2.api.noroff.dev/holidaze/venues/${id}`);
  }, [id]);

  if (!venueDetails) return <div></div>;

  function Breakfast() {
    if (venueDetails.meta.breakfast === true)
      return <S.VenueMeta className="text">Breakfast</S.VenueMeta>;
  }

  function Parking() {
    if (venueDetails.meta.parking === true)
      return <S.VenueMeta className="text">Parking</S.VenueMeta>;
  }

  function Pets() {
    if (venueDetails.meta.pets === true)
      return <S.VenueMeta className="text">Pets</S.VenueMeta>;
  }

  function Wifi() {
    if (venueDetails.meta.wifi === true)
      return <S.VenueMeta className="text">Wifi</S.VenueMeta>;
  }

  return (
    <S.Wrapper>
      <S.CardDiv>
        <S.TopCard>
          <S.VenueImage
            alt={venueDetails.media.alt}
            src={venueDetails.media[0].url}
          ></S.VenueImage>
          <S.VenueDescription>{venueDetails.description}</S.VenueDescription>
        </S.TopCard>
        <S.VenueTitle className="header">{venueDetails.name}</S.VenueTitle>
        <S.VenueAdress className="text">
          {venueDetails.location.address}
        </S.VenueAdress>
        <S.VenueAdress className="text">
          {venueDetails.location.city}, {venueDetails.location.country}
        </S.VenueAdress>
        {<Breakfast />}
        {<Parking />}
        {<Pets />}
        {<Wifi />}
        <S.Price className="text">${venueDetails.price}/night</S.Price>
        <Link to="/">
          <S.BackButton className="header">Login to book</S.BackButton>
        </Link>
      </S.CardDiv>
    </S.Wrapper>
  );
}
