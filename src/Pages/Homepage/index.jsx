import VenueList from "../../Components/Venuelist";
import * as S from "./index.styles";

export default function HomePage() {
  return (
    <div>
      <S.Cards>
        <VenueList />
      </S.Cards>
    </div>
  );
}
