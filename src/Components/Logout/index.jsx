import { React } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./index.styles";

export default function Logout() {
  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken");

  async function userLogout(e) {
    e.preventDefault();
    if (token) {
      localStorage.clear();
      navigate("../../Pages/Loginpage");
    }
  }
  return (
    <S.ProfileDetails onSubmit={userLogout}>
      <S.Button type="submit" className="text">
        Logout
      </S.Button>
    </S.ProfileDetails>
  );
}
