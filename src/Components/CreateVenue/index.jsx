import * as S from "./index.styles";

export default function CreateVenue() {
  return (
    <S.Wrapper>
      <S.VenueCard>
        <S.TopCard>
          <S.Title className="header">Create account</S.Title>
        </S.TopCard>
        <S.InsertDiv>
          <S.Insert placeholder="Image url" />
          <S.Insert placeholder="Venue name" />
          <S.Insert placeholder="Location" />
          <S.Insert placeholder="Description" />
          <S.Insert type="checkbox" />
          <S.Insert type="checkbox" />
          <S.Insert type="checkbox" />
          <S.Insert type="checkbox" />
          <S.Insert placeholder="Price" />
        </S.InsertDiv>
        <S.VenueDescription className="text"></S.VenueDescription>
        <S.BottomCard>
          <S.Button className="header">Go back</S.Button>
          <S.Button className="header" type="submit">
            Publish venue
          </S.Button>
        </S.BottomCard>
      </S.VenueCard>
    </S.Wrapper>
  );
}
