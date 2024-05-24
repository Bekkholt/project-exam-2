import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as S from "./index.styles";
import { Link } from "react-router-dom";

const URL = "https://v2.api.noroff.dev/auth/register";

const schema = yup
  .object({
    name: yup
      .string()
      .required(
        "The name value must not contain punctuation symbols apart from underscore (_)."
      ),
    email: yup
      .string()
      .email("The email value must be a valid stud.noroff.no email address.")
      .matches(/^[A-Za-z0-9._%+-]+@stud\.noroff\.no$/)
      .required(
        "The email value must be a valid stud.noroff.no email address."
      ),
    password: yup
      .string()
      .min(8, "The password must be at least 8 characters.")
      .required("The password must be at least 8 characters."),

    manager: yup.bool().optional(),
  })
  .required();

export default function CreateAccount() {
  const { register } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      venueManager: e.target.venueManager.checked,
    };

    try {
      const errors = await schema.validate(formData);

      const Details = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        venueManager: formData.venueManager,
      };

      const data = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      };
      const response = await fetch(URL, data);
      const json = await response.json();
      console.log(json);
      if (response.status === 201) {
        alert(`Account created`);
      } else {
        alert(`Something went wrong. Statuscode: ` + response.status);
      }
    } catch (e) {
      alert(e.errors.join("\n"));
    }
  }
  return (
    <S.OuterDiv>
      <S.CreateAccountDiv>
        <S.RegisterDetails onSubmit={handleSubmit}>
          <S.Title className="header">Create account</S.Title>
          <S.InsertName
            placeholder="Full name"
            {...register("name")}
            type="text"
            autocomplete="name"
          />
          <S.InsertEmail
            placeholder="Email"
            {...register("email", {
              pattern: /^[A-Za-z0-9._%+-]+@stud\.noroff\.no$/,
            })}
            type="email"
            autocomplete="email"
          />
          <S.InsertPassword
            placeholder="Password"
            {...register("password")}
            type="password"
            autocomplete="current-password"
          />
          <S.CheckboxDiv>
            <S.InsertManager type="checkbox" {...register("venueManager")} />
            <S.Text>I am a venue manager</S.Text>
          </S.CheckboxDiv>
          <S.ButtonDiv>
            <S.Button className="text" type="submit">
              Create account
            </S.Button>
            <Link to="../../Pages/Loginpage">
              <S.Button className="text">Back to login</S.Button>
            </Link>
          </S.ButtonDiv>
        </S.RegisterDetails>
      </S.CreateAccountDiv>
    </S.OuterDiv>
  );
}
