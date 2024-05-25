import styled from "styled-components";

export const Searchdiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Searchbar = styled.input`
  background-color: #d9b6a3;
  height: 30px;
  max-width: 20vh;
  border-radius: 0.5rem;
  margin-top: 10%;
`;

export const SearchItems = styled.div`
  background-color: #d9b6a3;
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 0.2rem;
`;

export const SearchResults = styled.p`
  margin: 10px;
  width: 30vh;
  cursor: pointer;
  color: black;
  overflow: hidden;
`;
