import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 8vh;
`;

export const Header = styled.div`
  background-color: #172625;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 88px;
  z-index: 10;
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

export const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
