import * as S from "./index.styles";
import { Routes, Route } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import HomePage from "../../Pages/Homepage";
import Homeicon from "../Icons/Home";
import Venuepage from "../../Pages/Venuepage";

export default function Layout() {
  return (
    <S.Pagewrapper>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route index element={<Homeicon />} />
        <Route path="/Pages/Venuepage/:id" element={<Venuepage />} />
      </Routes>
      <S.Body />
      <Footer />
    </S.Pagewrapper>
  );
}
