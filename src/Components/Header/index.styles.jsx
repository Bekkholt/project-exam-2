import styled from "styled-components";

export const Header = styled.div`
  background-color: #172625;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 10vh;
  position: fixed;
  width: 100%;
  box-shadow: 0 -6px 10px 10px rgba(0, 0, 0, 10);
`;

export const Left = styled.div`
  padding-left: 5%;
`;

export const Middle = styled.div`
  padding-left: 2em;
`;

export const Right = styled.div`
  padding-right: 5%;
`;
