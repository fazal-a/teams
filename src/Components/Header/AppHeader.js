import React from "react";
import styled from "styled-components";
import ProfileButton from "./ProfileButton";
import { NavLink } from "react-router-dom";
import AuthenticationContext from "../../Store/auth-context";
const StyledHeader = styled.section`
  background: #444791;
  height: 3rem;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  color: #fff;
  position: relative;
  > .heading {
    font-weight: 600;
    font-size: 1rem;
    padding-left: 2rem;
    &:hover {
      cursor: pointer;
    }
  }
  > .searchControl {
    margin-left: -100px;
    border: 0;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 0.4rem;
    height: 1.8rem;
    color: #fff;
    width: 400px;
    margin-bottom: 0.1rem;
    padding: 0 3rem 0.1rem 1.2rem;
    display: flex;
    align-items: center;
  }
  > .p {
    padding-left: 5rem;
  }
`;
const Styledinput = styled.input`
  margin-left: -100px;
  border: 0;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 0.4rem;
  height: 1.8rem;
  color: black;
  width: 400px;
  padding: 0 3rem 0.1rem 1.2rem;
  display: flex;
  align-items: center;
  border-radius: 4px;
  outline: white;
  position: relative;
  .profileButton {
    position: fixed;
  }
`;
const AppHeader = () => {
  return (
    <StyledHeader>
      <NavLink
        to="/teams"
        style={{ textDecoration: "none", color: "white" }}
        className="heading"
      >
        Microsoft Teams
      </NavLink>
      <Styledinput placeholder="Search"></Styledinput>
      <ProfileButton className="profileButton"></ProfileButton>
    </StyledHeader>
  );
};

export default AppHeader;
