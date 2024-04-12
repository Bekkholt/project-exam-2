import Homeicon from "../Icons/Home";
import Logo from "../Logo";
import Calendaricon from "../Icons/Calendar";
import Loginicon from "../Icons/Profile/Login";
import * as S from "./index.styles";

export default function Header() {
  return (
    <S.Header>
      <S.Left>
        <Homeicon />
      </S.Left>
      <S.Middle>
        <Logo />
      </S.Middle>
      <S.Right>
        <Calendaricon />
        <Loginicon />
      </S.Right>
    </S.Header>
  );
}
