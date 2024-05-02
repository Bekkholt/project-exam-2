import Logout from "../../Components/Logout";
import { Link } from "react-router-dom";
import * as S from "./index.styles";

export default function ProfilePage() {
  return (
    <div>
      <S.Wrapper>
        <S.CardDiv>
          <S.TopCard>
            <S.VenueImage></S.VenueImage>
            <S.VenueDescription>
              <S.BackButton className="text">Upload avatar</S.BackButton>
            </S.VenueDescription>
          </S.TopCard>
          <S.VenueTitle className="header">Profile name</S.VenueTitle>
          <Link to={"../../Pages/Createvenuepage"}>
            <S.BackButton className="text">Add venue</S.BackButton>
          </Link>
          <S.ButtonDiv>
            <Logout />
          </S.ButtonDiv>
        </S.CardDiv>
      </S.Wrapper>
    </div>
  );
}
