import Homeicon from "../Icons/Home";
import Logo from "../Logo";
import Calendaricon from "../Icons/Calendar";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./index.styles";
import Profileicon from "../Icons/Profile";

export default function Header() {
  const navigate = useNavigate();

  // function LoggedIn() {
  //   const name = localStorage.getItem("name");
  //   console.log({ name });
  //   if (!name) {
  //     return (
  //       <Link to="../../Pages/Loginpage">
  //         <Profileicon />
  //       </Link>
  //     );
  //   } else {
  //     return (
  //       <Link to="../../Pages/Profilepage">
  //         <Profileicon />
  //       </Link>
  //     );
  //   }
  // }

  function onClickedLogin() {
    const name = localStorage.getItem("name");
    console.log({ name });
    if (!name) {
      console.log("navigating to loginPage with name " + name);
      navigate("../../Pages/Loginpage");
      return;
    }
    console.log("navigating to ProfilePage with name " + name);
    navigate("../../Pages/ProfilePage");
  }

  return (
    <S.Wrapper>
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
          {/* <LoggedIn /> */}
          <button onClick={onClickedLogin}>
            <Profileicon />
          </button>
        </S.Right>
      </S.Header>
    </S.Wrapper>
  );
}
