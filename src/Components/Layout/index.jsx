import * as S from "./index.styles";
import { Routes, Route } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import HomePage from "../../Pages/Homepage";
import Homeicon from "../Icons/Home";
import Venuepage from "../../Pages/Venuepage";
import LoginPage from "../../Pages/Loginpage";

export default function Layout() {
  return (
    <S.Pagewrapper>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route index element={<Homeicon />} />
        <Route path="/Pages/Venuepage/:id" element={<Venuepage />} />
        <Route path="/Pages/Loginpage" element={<LoginPage />} />
      </Routes>
      <S.Body />
      <Footer />
    </S.Pagewrapper>
  );
}
