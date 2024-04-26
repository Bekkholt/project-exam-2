import React from "react";
import * as S from "./index.styles";

export default function Login() {
  return (
    <S.OuterDiv>
      <S.LoginDiv>
        <S.LoginDetails>
          <S.Title>Login</S.Title>
          <S.InsertEmail
            placeholder="Email"
            type="email"
            autocomplete="email"
          />
          <S.InsertPassword
            placeholder="Password"
            type="password"
            autocomplete="current-password"
          />
          <S.Button className="text" type="submit">
            Login
          </S.Button>
          <S.Text className="text">Not registered yet?</S.Text>
          <S.Button className="text">Create account</S.Button>
        </S.LoginDetails>
      </S.LoginDiv>
    </S.OuterDiv>
  );
}
