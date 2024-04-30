import * as S from "./index.styles";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MyBookingCalendar from "../../Components/Calendar";

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

  function handleSubmit(data) {
    console.log(data);
  }

  function BackButton() {
    if (localStorage.getItem("accessToken") !== null) {
      return (
        <S.BackButton type="submit" className="header" onSubmit={handleSubmit}>
          Book chosen dates
        </S.BackButton>
      );
    } else {
      return (
        <Link to={"../Loginpage"}>
          <S.BackButton className="header">Login to book</S.BackButton>
        </Link>
      );
    }
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
        <S.Middlediv>
          <div>
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
          </div>
          <MyBookingCalendar />
        </S.Middlediv>
        <S.Price className="text">${venueDetails.price}/night</S.Price>
        <S.ButtonDiv>{BackButton()}</S.ButtonDiv>
      </S.CardDiv>
    </S.Wrapper>
  );
}
