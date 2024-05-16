import * as S from "./index.styles";
import { Link, useParams } from "react-router-dom";
import FetchMyVenue from "../../Hooks/SpecificVenueAPI";

export default function UpdateVenue() {
  let { id } = useParams();
  const venuesUrl = `https://v2.api.noroff.dev/holidaze/venues/${id}`;
  const venue = FetchMyVenue(venuesUrl);

  if (!venue.venue) return <></>;

  return (
    <S.Wrapper>
      <S.VenueCard key={venue.venue.id}>
        <S.TopCard>
          <S.Title className="header">Update venue</S.Title>
        </S.TopCard>
        <S.InsertDiv>
          <S.Insert placeholder={venue.venue.media[0].url} type="url" />
          <S.Insert placeholder={venue.venue.name} />
          <S.Insert placeholder={venue.venue.location.address} />
          <S.Insert placeholder={venue.venue.location.city} />
          <S.Insert placeholder={venue.venue.location.zip} />
          <S.Insert placeholder={venue.venue.location.country} />
          <S.DescriptionInsert
            placeholder={venue.venue.description}
            type="text"
          />
          <S.Insert placeholder={venue.venue.price} type="number" />
          <S.Insert placeholder={venue.venue.maxGuests} type="number" />
        </S.InsertDiv>
        <S.VenueDescription className="text"></S.VenueDescription>
        <S.InsertDiv>
          <S.CheckboxDiv>
            <S.Insert type="checkbox" defaultChecked={venue.venue.meta.wifi} />
            <S.VenueDescription>Wifi</S.VenueDescription>
          </S.CheckboxDiv>
          <S.CheckboxDiv>
            <S.Insert
              type="checkbox"
              defaultChecked={venue.venue.meta.parking}
            />
            <S.VenueDescription>Parking</S.VenueDescription>
          </S.CheckboxDiv>
          <S.CheckboxDiv>
            <S.Insert
              type="checkbox"
              defaultChecked={venue.venue.meta.breakfast}
            />
            <S.VenueDescription>Breakfast</S.VenueDescription>
          </S.CheckboxDiv>
          <S.CheckboxDiv>
            <S.Insert type="checkbox" defaultChecked={venue.venue.meta.pets} />
            <S.VenueDescription>Pets</S.VenueDescription>
          </S.CheckboxDiv>
        </S.InsertDiv>
        <S.BottomCard>
          <S.InsertDiv>
            <S.Button className="header">Update venue</S.Button>
            <S.Button className="header">Delete venue</S.Button>
            <Link to={"../../Pages/Bookings"}>
              <S.Button className="header">Go back</S.Button>
            </Link>
          </S.InsertDiv>
        </S.BottomCard>
      </S.VenueCard>
    </S.Wrapper>
  );
}
