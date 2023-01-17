import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ErrorPage = () => {
  return (
    <StyledDiv>
      <h2>404</h2>
      <Link to="/teams">
        <button>Go Back</button>
      </Link>
    </StyledDiv>
  );
};
export default ErrorPage;
