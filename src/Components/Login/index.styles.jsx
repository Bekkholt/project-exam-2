import styled from "styled-components";

export const OuterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginDiv = styled.div`
  background-color: #172625d8;
  margin-top: 12vh;
  border-radius: 1em;
  display: flex;
  justify-content: center;
  width: 35vh;
  height: 55vh;
  box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 20%);
`;

export const Title = styled.h1`
  color: #f29c6b;
  display: flex;
  justify-content: center;
`;

export const LoginDetails = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InsertEmail = styled.input`
  background-color: #d9b6a3;
  height: 23px;
  max-width: 30vh;
  border-radius: 0.5rem;
  margin-top: 10%;
`;

export const InsertPassword = styled.input`
  background-color: #d9b6a3;
  height: 23px;
  max-width: 30vh;
  border-radius: 0.5rem;
  margin-top: 10%;
`;

export const Text = styled.p`
  color: #f29c6b;
  display: flex;
  margin-bottom: 1px;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: #f29c6b;
  color: #172625;
  border-radius: 0.5rem;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  font-size: medium;
  width: 10rem;
  height: 3rem;
  cursor: pointer;
  font-weight: bold;
  margin: 5%;

  :hover {
    background-color: #f6813e;
  }
`;
