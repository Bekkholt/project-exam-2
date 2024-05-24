import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10%;
`;

export const CardDiv = styled.div`
  background: #172625;
  opacity: 90%;
  width: 70vh;
  padding: 2%;
  margin: 5%;
  border-radius: 1em;
  box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 20%);
`;

export const TopCard = styled.div`
  display: flex;
`;

export const Avatar = styled.img`
  max-width: 50%;
  max-height: 30%;
`;

export const ProfileName = styled.h1`
  color: #f29c6b;
`;

export const Text = styled.p`
  color: #f29c6b;
  margin-left: 2%;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const BackButton = styled.button`
  background-color: #f29c6b;
  border-radius: 0.5rem;
  width: 10rem;
  height: 3rem;
  cursor: pointer;

  :hover {
    background-color: #f6813e;
  }
`;
