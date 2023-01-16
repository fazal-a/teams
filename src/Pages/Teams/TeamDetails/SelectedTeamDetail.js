import React from "react";
// import classes from "./Headings.module.css";
import styled from "styled-components";
import { DUMMY_TEAMS } from "../TeamsSection";
import { useParams } from "react-router-dom";

const StyledTopDiv = styled.section`
  font-size: small;
  padding-top: 30px;
  margin-bottom: 20px;
  box-shadow: -15px 0px 10px -10px #e7e7e7;
`;
const StyledHeading = styled.section`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  border-bottom: 1px solid rgb(224 224 224);
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  width: 970px;
  > .heading {
    margin-right: 50px;
    float: right;
  }
`;
const StyledDetails = styled.section`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  width: 970px;
`;
const SelectedTeamDetail = () => {
  const prams = useParams();
  let obj = DUMMY_TEAMS.find((element) => element.id === prams.teamId);
  if (obj) {
  } else {
    obj = DUMMY_TEAMS[0];
  }
  return (
    <StyledTopDiv>
      <StyledHeading>
        <h2 className="heading">{obj.title}</h2>
        <div>Call</div>
      </StyledHeading>
      <StyledDetails>
        <p className="message">{obj.title}</p>
        <p className="message">{obj.title}</p>
      </StyledDetails>
    </StyledTopDiv>
  );
};

export default SelectedTeamDetail;
