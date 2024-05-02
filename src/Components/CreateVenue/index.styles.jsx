import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10%;
`;

export const VenueCard = styled.div`
  background-color: #172625;
  width: 55vh;
  margin: 2%;
  margin-top: 5%;
  border-radius: 1em;
  box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 20%);

  :hover {
    background-color: #294745;
    cursor: pointer;
  }
`;

export const InsertDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VenueRating = styled.p`
  color: #f29c6b;
`;

export const Title = styled.h1`
  color: #f29c6b;
  padding-left: 5%;
`;

export const VenueImage = styled.img`
  width: 100%;
  border-radius: 1em;
`;

export const VenueDescription = styled.p`
  color: #f29c6b;
  padding-left: 5%;
`;

export const Button = styled.button`
  background-color: #f29c6b;
  border-radius: 0.5rem;
  width: 10rem;
  height: 3rem;
  cursor: pointer;

  :hover {
    background-color: #f6813e;
  }
`;

export const VenuePrice = styled.p`
  font-size: large;
  color: #f29c6b;
`;

export const TopCard = styled.div`
  display: flex;
  padding: 3%;
  justify-content: center;
`;

export const BottomCard = styled.div`
  display: flex;
  justify-content: center;
  padding: 3%;
`;

export const InsertName = styled.input`
  background-color: #d9b6a3;
  height: 23px;
  max-width: 30vh;
  border-radius: 0.5rem;
  margin-top: 10%;
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
