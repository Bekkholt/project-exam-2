import Contacticon from "../Icons/Contact";
import * as S from "./index.styles";

export default function Footer() {
  return (
    <S.Footer>
      <Contacticon />
      <div>
        <S.Text className="text">123456789</S.Text>
        <S.Text className="text">Street address 555</S.Text>
        <S.Text className="text">Country name</S.Text>
      </div>
    </S.Footer>
  );
}
