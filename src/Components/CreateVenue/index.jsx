import * as S from "./index.styles";

export default function CreateVenue() {
  return (
    <S.Wrapper>
      <S.VenueCard>
        <S.TopCard></S.TopCard>
        <S.Title className="header"></S.Title>
        <S.VenueDescription className="text"></S.VenueDescription>
        <S.BottomCard>
          <S.Button className="header">Publish venue</S.Button>
        </S.BottomCard>
      </S.VenueCard>
    </S.Wrapper>
  );
}
