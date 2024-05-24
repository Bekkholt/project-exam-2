import styled from "styled-components";

export const ProfileDetails = styled.form`
  display: flex;
  flex-direction: column;
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
