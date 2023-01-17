import React from "react";
import ButtonOnLeftBar from "./ButtonOnLeftBar";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
const DUMMY_BUTTONS = [
  {
    id: "b1",
    icon: faCommentDots,
    iconAlt: faCommentAlt,
    iconText: "Chat",
    path: "/chat",
  },
  {
    id: "b2",
    icon: faUsers,
    iconAlt: faUsers,
    iconText: "Teams",
    path: "/teams",
  },
  {
    id: "b3",
    icon: faPhone,
    iconAlt: faPhoneAlt,
    iconText: "Phone",
    path: "/phone",
  },
  {
    id: "b4",
    icon: faListCheck,
    iconAlt: faListCheck,
    iconText: "Activity",
    path: "/activity",
  },
  {
    id: "b5",
    icon: faCommentDots,
    iconAlt: faCommentDots,
    iconText: "Apps",
    path: "/apps",
  },
  {
    id: "b6",
    icon: faUsers,
    iconAlt: faUsers,
    iconText: "Help",
    path: "/help",
  },
];
const buttons = DUMMY_BUTTONS.map((button) => {
  let activeStyle = {
    textDecoration: "none",
    color: "#444791",
    cursor: "pointer",
    marginBottom: "10px",
    width: "62px",
    height: "60px",
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px",
    alignItems: "center",
    position: "relative",
    borderLeft: "3px solid #444791",
  };
  let unactiveStyle = {
    textDecoration: "none",
    color: "#757575",
    cursor: "pointer",
    width: "66px",
    height: "60px",
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px",
    alignItems: "center",
    position: "relative",
  };
  return (
    <NavLink
      to={button.path}
      key={button.id}
      style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
    >
      {
        <ButtonOnLeftBar
          icon={button.icon}
          iconAlt={button.iconAlt}
          iconText={button.iconText}
        ></ButtonOnLeftBar>
      }
    </NavLink>
  );
});

const StyledLetToolBar = styled.section`
  margin: 0;
  padding: 0;
  padding-top: 10px;
  width: 65px;
  position: relative;
  height: 90vh;
`;

const LeftToolBar = () => {
  return <StyledLetToolBar>{buttons}</StyledLetToolBar>;
};
export default LeftToolBar;
