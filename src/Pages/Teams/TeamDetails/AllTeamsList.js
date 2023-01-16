import React from "react";
import TeamForDetailsSection from "./TeamForDetailsSection";
import { DUMMY_TEAMS } from "../TeamsSection";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const StyledHeadingSection = styled.h2`
  margin-left: 10px;
  margin-bottom: 15px;
  height: 30px;
  font-size: medium;
  border-bottom: 1px solid rgb(224 224 224);
  width: 260px;
  position: relative;
  margin-bottom: 20px;
`;
const StyledTeamsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const AllTeams = DUMMY_TEAMS.map((team) => {
  let activeStyle = {
    textDecoration: "none",
    margin: "0",
    marginLeft: "10px",
    padding: "0",
    width: "248px",
    height: "50px",
    display: "flex",
    color: "#757575",
    marginBottom: "5px",
    position: "relative",
    flexDirection: "row",
    justifyContent: "flexStart",
    alignItems: "center",
    color: "#444791",
    borderLeft: "3px solid #444791",
    backgroundColor: "white",
  };

  let unactiveStyle = {
    textDecoration: "none",
    margin: "0",
    marginLeft: "10px",
    padding: "0",
    width: "250px",
    height: "50px",
    display: "flex",
    marginBottom: "5px",
    position: "relative",
    flexDirection: "row",
    justifyContent: "flexStart",
    alignItems: "center",
    color: "#757575",
  };

  return (
    <NavLink
      to={`/teams/${team.id}`}
      key={team.id}
      style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
    >
      {
        <TeamForDetailsSection
          title={team.title}
          iconColor={team.color}
        ></TeamForDetailsSection>
      }
    </NavLink>
  );
});

const AllTeamsList = () => {
  return (
    <div style={{ boxShadow: "-15px 0px 10px -10px #e7e7e7" }}>
      <StyledHeadingSection>Teams</StyledHeadingSection>
      <StyledTeamsList>{AllTeams}</StyledTeamsList>
    </div>
  );
};

export default AllTeamsList;
