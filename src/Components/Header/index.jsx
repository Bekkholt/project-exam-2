import Homeicon from "../Icons/Home";
import Logo from "../Logo";
import Calendaricon from "../Icons/Calendar";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./index.styles";
import Profileicon from "../Icons/Profile";

export default function Header() {
  const navigate = useNavigate();

  function onClickedLogin() {
    const name = localStorage.getItem("name");
    if (!name) {
      navigate("../../Pages/Loginpage");
      return;
    }
    navigate("../../Pages/ProfilePage");
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Left>
          <Link to="/">
            Home
            <Homeicon />
          </Link>
        </S.Left>
        <S.Middle>
          <Link to="/">
            <Logo />
          </Link>
        </S.Middle>
        <S.Right>
          <Link to="../../Pages/Bookings">
            Bookings
            <Calendaricon />
          </Link>
          <S.Button onClick={onClickedLogin}>
            <Profileicon />
          </S.Button>
        </S.Right>
      </S.Header>
    </S.Wrapper>
  );
}
