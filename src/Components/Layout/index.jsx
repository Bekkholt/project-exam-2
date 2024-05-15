import * as S from "./index.styles";
import { Routes, Route } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import HomePage from "../../Pages/Homepage";
import Homeicon from "../Icons/Home";
import Venuepage from "../../Pages/Venuepage";
import CreateAccountPage from "../../Pages/Createaccountpage";
import LoginPage from "../../Pages/Loginpage";
import Bookings from "../../Pages/Bookings";
import ProfilePage from "../../Pages/Profilepage";
import CreateVenuePage from "../../Pages/Createvenuepage";
import UpdateVenuePage from "../../Pages/Updatevenuepage";

export default function Layout() {
  return (
    <S.Pagewrapper>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route index element={<Homeicon />} />
        <Route path="/Pages/Venuepage/:id" element={<Venuepage />} />
        <Route path="/Pages/Loginpage" element={<LoginPage />} />
        <Route path="/Pages/Profilepage" element={<ProfilePage />} />
        <Route path="/Pages/Createvenuepage" element={<CreateVenuePage />} />
        <Route path="/Pages/Updatevenuepage" element={<UpdateVenuePage />} />
        <Route path="/Pages/Bookings" element={<Bookings />} />
        <Route
          path="/Pages/Createaccountpage"
          element={<CreateAccountPage />}
        />
      </Routes>
      <S.Body />
      <Footer />
    </S.Pagewrapper>
  );
}
