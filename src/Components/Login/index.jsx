import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./index.styles";

const URL = "https://v2.api.noroff.dev/auth/login";

export default function Login() {
  const [email] = useState();
  const [password] = useState();
  const navigate = useNavigate();

  async function userLogin(e) {
    e.preventDefault();
    console.log(e);

    const inputs = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    try {
      const data = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(inputs),
      };
      const response = await fetch(URL, data);
      console.log(response);
      const json = await response.json();
      localStorage.setItem("accessToken", json.data.accessToken);
      localStorage.setItem("name", json.data.name);
      console.log(json);
      if (response.status === 200) {
        navigate("/");
      } else {
        alert(`Something went wrong. Statuscode: ` + response.status);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <S.OuterDiv>
      <S.LoginDiv>
        <S.LoginDetails onSubmit={userLogin}>
          <S.Title>Login</S.Title>
          <S.InsertEmail
            placeholder="Email"
            type="email"
            autocomplete="email"
            value={email}
          />
          <S.InsertPassword
            placeholder="Password"
            type="password"
            autocomplete="current-password"
            value={password}
          />
          <S.Button type="submit" className="text">
            Login
          </S.Button>
          <S.Text className="text">Not registered yet?</S.Text>
          <Link to="../../Pages/Createaccountpage">
            <S.Button className="text">Create account</S.Button>
          </Link>
        </S.LoginDetails>
      </S.LoginDiv>
    </S.OuterDiv>
  );
}
