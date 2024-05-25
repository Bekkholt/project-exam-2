import styled from "styled-components";

export const VenueCard = styled.div`
  background-color: #172625;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  width: 55vh;
  margin: 2%;
  border-radius: 1em;
  box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 20%);

  :hover {
    background-color: #294745;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  color: #f29c6b;
  margin-left: 5%;
  margin-right: 5%;
  overflow: overlay;
`;

export const VenueImage = styled.img`
  width: 100%;
  border-radius: 1em;
  height: 280px;
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
  align-items: flex-end;
  justify-content: space-between;
  padding: 2%;
`;
