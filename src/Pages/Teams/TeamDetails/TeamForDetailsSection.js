import React from "react";
import styled from "styled-components";

const StyledTeamName = styled.section`
  width: 250px;
  height: 50px;
  display: flex;
  margin-bottom: 5px;
  position: relative;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    color: #444791;
    cursor: pointer;
    background-color: white;
  }
`;
const StyledIcon = styled.div`
  border-radius: 36.4rem;
  margin: 0px;
  margin-left: 5px;
  height: 2.2rem;
  width: 2.2rem;
  color: white;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: small;
`;
const StyledTeamHeading = styled.h5`
  margin-left: 10px;
`;
const TeamForDetailsSection = (props) => {
  let matches = props.title.match(/\b(\w)/g);
  let acronym = matches.join("");
  return (
    <StyledTeamName>
      <StyledIcon style={{ backgroundColor: props.iconColor }}>
        {acronym}
      </StyledIcon>
      <StyledTeamHeading>{props.title.toUpperCase()}</StyledTeamHeading>
    </StyledTeamName>
  );
};
export default TeamForDetailsSection;
