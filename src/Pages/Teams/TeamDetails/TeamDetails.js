import React from "react";
import SelectedTeamDetail from "./SelectedTeamDetail";
import styled from "styled-components";
import AllTeamsList from "./AllTeamsList";
const StyledSection = styled.section`
  box-shadow: -15px 0px 10px -10px #e7e7e7;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  .sections {
    display: flex;
  }
`;
const TeamDetails = () => {
  return (
    <StyledSection>
      <AllTeamsList />
      <SelectedTeamDetail className="section" />
    </StyledSection>
  );
};
export default TeamDetails;
