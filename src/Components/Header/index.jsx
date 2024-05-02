import Homeicon from "../Icons/Home";
import Logo from "../Logo";
import Calendaricon from "../Icons/Calendar";
import Loginicon from "../Icons/Profile/Login";
import { Link } from "react-router-dom";
import * as S from "./index.styles";

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
        <Link to="../../Pages/Loginpage">
          <Loginicon />
        </Link>
      </S.Right>
    </S.Header>
  );
}
