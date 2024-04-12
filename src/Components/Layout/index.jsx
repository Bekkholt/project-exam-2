import * as S from "./index.styles";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout() {
  return (
    <S.Pagewrapper>
      <Header />
      <S.Body />
      <Footer />
    </S.Pagewrapper>
  );
}
