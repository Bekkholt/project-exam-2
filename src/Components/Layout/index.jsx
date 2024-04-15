import * as S from "./index.styles";
import { Routes, Route } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout() {
  return (
    <S.Pagewrapper>
      <Header />
      <Routes>
        <Route index />
        <Route index />
        <Route index />
        <Route index />
      </Routes>
      <S.Body />
      <Footer />
    </S.Pagewrapper>
  );
}
