import * as S from "./index.styles";
// import { Routes, Route } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import HomePage from "../../Pages/Homepage";

export default function Layout() {
  return (
    <S.Pagewrapper>
      <Header />
      {/* <Routes>
        <Route index />
        <Route index />
        <Route index />
        <Route index />
      </Routes> */}
      <HomePage />
      <S.Body />
      <Footer />
    </S.Pagewrapper>
  );
}
