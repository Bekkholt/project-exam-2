import Homeicon from "../Icons/Home";
import Logo from "../Logo";
import Calendaricon from "../Icons/Calendar";
import Loginicon from "../Icons/Profile/Login";
import { Link } from "react-router-dom";
import * as S from "./index.styles";

const token = localStorage.getItem("accessToken");

function LoggedIn() {
  if (token !== undefined) {
    return (
      <Link to="../../Pages/Profilepage">
        <Loginicon />
      </Link>
    );
  } else {
    return (
      <Link to="../../Pages/Loginpage">
        <Loginicon />
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
