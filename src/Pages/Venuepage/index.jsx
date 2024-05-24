import * as S from "./index.styles";
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import MyBookingCalendar from "../../Components/Calendar";
import { BounceLoader } from "react-spinners";

const URL = "https://v2.api.noroff.dev/holidaze/bookings/";

export default function Venuepage() {
  const [venueDetails, setVenueDetails] = useState(null);
  const [chosenDates, setChosenDates] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setVenueDetails(json.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://v2.api.noroff.dev/holidaze/venues/${id}`);
  }, [id]);

  if (isLoading) {
    return (
      <S.Wrapper>
        <S.CardDiv>
          <S.Wrapper>
            <BounceLoader
              loading={isLoading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
              color="#f29c6b"
            />
          </S.Wrapper>
        </S.CardDiv>
      </S.Wrapper>
    );
  }

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

  async function makeBooking(e) {
    e.preventDefault();

    if (chosenDates === null) {
      alert("Choose dates first.");
      return <></>;
    }

    const inputs = {
      dateFrom: chosenDates[0],
      dateTo: chosenDates[1],
      venueId: id,
      guests: 1,
    };

    try {
      const token = localStorage.getItem("accessToken");
      const apiKey = localStorage.getItem("key");
      const data = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
          "X-Noroff-API-Key": apiKey,
        },
        body: JSON.stringify(inputs),
      };
      const response = await fetch(URL, data);
      const json = await response.json();
      console.log(json);
      if (response.status === 201) {
        alert(`You have booked your chosen dates`);
        navigate("/");
      } else {
        alert(`Something went wrong. Statuscode: ` + response.status);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function BookButton() {
    if (localStorage.getItem("accessToken") !== null) {
      return (
        <S.Button className="header" onClick={makeBooking}>
          Book chosen dates
        </S.Button>
      );
    } else {
      return (
        <Link to={"../../Pages/Loginpage"}>
          <S.Button className="header">Login to book</S.Button>
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
              {venueDetails.location.city} {venueDetails.location.country}
            </S.VenueAdress>
            {<Breakfast />}
            {<Parking />}
            {<Pets />}
            {<Wifi />}
          </div>
          <MyBookingCalendar
            reserved={setChosenDates}
            setChosenDates={setChosenDates}
          />
        </S.Middlediv>
        <S.Price className="text">${venueDetails.price}/night</S.Price>
        <S.ButtonDiv className="header">{BookButton()}</S.ButtonDiv>
        <S.ButtonDiv>
          <Link to={"/"}>
            <S.Button className="header">Go back</S.Button>
          </Link>
        </S.ButtonDiv>
      </S.CardDiv>
    </S.Wrapper>
  );
}
