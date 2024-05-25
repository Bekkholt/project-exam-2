import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 5%;
`;

export const CardDiv = styled.div`
  background: #172625;
  opacity: 90%;
  width: 70vh;
  padding: 2%;
  margin-top: 10%;
  border-radius: 1em;
  box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 20%);
`;

export const TopCard = styled.div`
  display: flex;
`;

export const VenueImage = styled.img`
  max-width: 50%;
  max-height: 30%;
`;

export const VenueTitle = styled.h1`
  color: #f29c6b;
  overflow: overlay;
`;

export const VenueDescription = styled.p`
  color: #f29c6b;
  margin-left: 2%;
`;

export const VenueAdress = styled.p`
  color: #f29c6b;
`;

export const Middlediv = styled.div`
  display: flex;
  margin-top: 3vh;
  justify-content: space-between;
`;

export const VenueMeta = styled.p`
  color: #f29c6b;
`;

export const Price = styled.p`
  color: #f29c6b;
  display: flex;
  justify-content: flex-end;
  margin-top: 3vh;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
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
