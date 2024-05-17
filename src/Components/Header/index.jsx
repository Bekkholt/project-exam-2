import Homeicon from "../Icons/Home";
import Logo from "../Logo";
import Calendaricon from "../Icons/Calendar";
import { Link } from "react-router-dom";
import * as S from "./index.styles";
import Profileicon from "../Icons/Profile";

function LoggedIn() {
  const token = localStorage.getItem("accessToken");
  if (token) {
    return (
      <Link to="../../Pages/Profilepage">
        <Profileicon />
      </Link>
    );
  } else {
    return (
      <Link to="../../Pages/Loginpage">
        <Profileicon />
      </Link>
    );
  }
}

export default function Header() {
  return (
    <S.Header>
      <S.Left>
        <Link to="/">
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
          <Calendaricon />
        </Link>
        {LoggedIn()}
      </S.Right>
    </S.Header>
  );
}
