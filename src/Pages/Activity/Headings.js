import React from "react";
// import classes from "./Headings.module.css";
import styled from "styled-components";

const StyledHeadingSection = styled.section`
  font-size: small;
  margin-left: 50px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const Headings = () => {
  return (
    <StyledHeadingSection>
      <h2>Chat</h2>
    </StyledHeadingSection>
  );
};

export default Headings;
