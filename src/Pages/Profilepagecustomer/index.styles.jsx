import styled from "styled-components";

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2%;
`;

export const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileDiv = styled.div`
  background-color: #172625d8;
  margin-top: 10%;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vh;
  height: 70vh;
  box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 20%);
`;

export const VenueImage = styled.img`
  width: 100%;
  border-radius: 1em;
`;

export const Title = styled.h1`
  color: #f29c6b;
  display: flex;
  justify-content: center;
`;

export const Text = styled.p`
  color: #f29c6b;
`;
