import React from "react";
import Headings from "./Headings";
import Team from "./Team";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const myTeamsToggle = true;
export const DUMMY_TEAMS = [
  {
    id: "A1",
    title: "Computer Science",
    color: "#790252",
  },
  {
    id: "A2",
    title: "Software Engineering",
    color: "#647E68",
  },
  {
    id: "A3",
    title: "Computer Networking",
    color: "#150050",
  },
  {
    id: "A4",
    title: "Web Development",
    color: "#270082",
  },
  {
    id: "A5",
    title: "Cyber Security",
    color: "#8B9A46",
  },
  {
    id: "A6",
    title: "Database Administration",
    color: "#064663",
  },
  {
    id: "A7",
    title: "Information Technology",
    color: "#150050",
  },
];
const StyledSection = styled.section`
  box-shadow: -20px 0px 10px -10px #e7e7e7;
`;
const StyledTeamsRow = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
const teams = DUMMY_TEAMS.map((team) => {
  return (
    <NavLink
      to={`/teams/${team.id}`}
      key={team.id}
      style={{ textDecoration: "none" }}
    >
      <Team id={team.id} title={team.title} backgroundColor={team.color}></Team>
    </NavLink>
  );
});
const TeamsSection = () => {
  return (
    <StyledSection>
      <Headings />
      {myTeamsToggle ? <StyledTeamsRow>{teams}</StyledTeamsRow> : <></>}
    </StyledSection>
  );
};
export default TeamsSection;
