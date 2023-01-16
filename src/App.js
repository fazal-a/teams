import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import Main from "./Components/Main/Main";

const StyledMain = styled.main`
  /* height: 100vh; */
`;
function App() {
  return (
    <StyledMain>
      <Main />
    </StyledMain>
  );
}
export default App;
