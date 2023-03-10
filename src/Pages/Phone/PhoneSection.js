import React from "react";
import Headings from "./Headings";
import styled from "styled-components";

const StyledSection = styled.section`
  box-shadow: -20px 0px 10px -10px #e7e7e7;
  /* height: 100vh; */
`;
// });

const PhoneSection = () => {
  return (
    <StyledSection>
      <Headings />
    </StyledSection>
  );
};

export default PhoneSection;
