import styled from "styled-components";

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2%;
  margin: 8%;
`;

export const Button = styled.button`
  background-color: #f29c6b;
  color: #172625;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: medium;
  width: 10rem;
  height: 3rem;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10%;

  :hover {
    background-color: #f6813e;
  }
`;
