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
    <S.OuterDiv>
      <S.ProfileDiv>
        <S.ProfileDetails onSubmit={userLogout}>
          <S.Title>My profile</S.Title>
          <S.Button type="submit" className="text">
            Logout
          </S.Button>
        </S.ProfileDetails>
      </S.ProfileDiv>
    </S.OuterDiv>
  );
}
