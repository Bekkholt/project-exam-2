import * as S from "./index.styles";
import { Link } from "react-router-dom";

const URL = "https://v2.api.noroff.dev/holidaze/venues/${id}";

export default function UpdateVenue() {
  return (
    <S.Wrapper>
      <S.VenueCard>
        <S.TopCard>
          <S.Title className="header">Update venue</S.Title>
        </S.TopCard>
        <S.InsertDiv>
          <S.Insert placeholder="Image url" type="url" />
          <S.Insert placeholder="Venue name*" />
          <S.Insert placeholder="Address" />
          <S.Insert placeholder="City" />
          <S.Insert placeholder="Zip" />
          <S.Insert placeholder="Country" />
          <S.DescriptionInsert placeholder="Description*" type="text" />
          <S.Insert placeholder="Price pr/night*" type="number" />
          <S.Insert placeholder="Max guests*" type="number" />
        </S.InsertDiv>
        <S.VenueDescription className="text"></S.VenueDescription>
        <S.InsertDiv>
          <S.CheckboxDiv>
            <S.Insert type="checkbox" />
            <S.VenueDescription>Wifi</S.VenueDescription>
          </S.CheckboxDiv>
          <S.CheckboxDiv>
            <S.Insert type="checkbox" />
            <S.VenueDescription>Parking</S.VenueDescription>
          </S.CheckboxDiv>
          <S.CheckboxDiv>
            <S.Insert type="checkbox" />
            <S.VenueDescription>Breakfast</S.VenueDescription>
          </S.CheckboxDiv>
          <S.CheckboxDiv>
            <S.Insert type="checkbox" />
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
