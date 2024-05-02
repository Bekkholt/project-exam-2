import * as S from "./index.styles";

export default function CreateVenue() {
  return (
    <S.Wrapper>
      <S.VenueCard>
        <S.TopCard>
          <S.Title className="header">Create account</S.Title>
        </S.TopCard>
        <S.InsertDiv>
          <S.InsertName placeholder="Image url" />
          <S.InsertEmail placeholder="Venue name" />
          <S.InsertPassword placeholder="Location" />
          <S.InsertName placeholder="Description" />
          <p>WIFI ETC</p>
          <S.InsertName placeholder="Price" />
        </S.InsertDiv>
        <S.VenueDescription className="text"></S.VenueDescription>
        <S.BottomCard>
          <S.Button className="header">Publish venue</S.Button>
        </S.BottomCard>
      </S.VenueCard>
    </S.Wrapper>
  );
}
