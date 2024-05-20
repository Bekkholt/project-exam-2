import Logout from "../../Components/Logout";
import { Link } from "react-router-dom";
import * as S from "./index.styles";
import FetchMyProfile from "../../Hooks/MyProfileAPI";
import { BounceLoader } from "react-spinners";

export default function ProfilePage() {
  const name = localStorage.getItem("name");

  const { profile, isLoading } = FetchMyProfile(
    `https://v2.api.noroff.dev/holidaze/profiles/${name}`
  );

  function Manager() {
    if (profile.venueManager === true) {
      return (
        <Link to={"../../Pages/Createvenuepage"}>
          <S.BackButton className="text">Add venue</S.BackButton>
        </Link>
      );
    } else {
      return <></>;
    }
  }

  function Content() {
    if (isLoading === true) {
      return (
        <>
          <S.Wrapper>
            <BounceLoader
              loading={isLoading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
              color="#f29c6b"
            />
          </S.Wrapper>
        </>
      );
    }

    if (!profile) {
      return <></>;
    }
    return (
      <>
        <S.TopCard>
          <S.VenueImage
            alt={profile.avatar.alt}
            src={profile.avatar.url}
          ></S.VenueImage>
          <S.VenueDescription className="text">
            {profile.bio}
          </S.VenueDescription>
        </S.TopCard>
        <S.VenueTitle className="header">{profile.name}</S.VenueTitle>
        <S.VenueDescription>
          <Link to={"../../Pages/Updateprofilepage"}>
            <S.BackButton className="text">Update profile</S.BackButton>
          </Link>
        </S.VenueDescription>
        <Manager />
        <S.ButtonDiv>
          <Logout />
        </S.ButtonDiv>
      </>
    );
  }
  return (
    <div>
      <S.Wrapper>
        <S.CardDiv>
          <Content />
        </S.CardDiv>
      </S.Wrapper>
    </div>
  );
}
