import React from "react";
import { NavLink } from "react-router-dom";
import personImage from "../../Assets/person.png";
import Contact from "./Contact";
import styled from "styled-components";
export const DUMMY_CONTACTS = [
  {
    id: "b1",
    image: personImage,
    name: "name 1",
    message: "some message1",
    date: "27/7",
    userName: "contact1",
  },
  {
    id: "b2",
    image: personImage,
    name: "name 2",
    message: "some message2",
    date: "28/8",
    userName: "contact2",
  },
  {
    id: "b3",
    image: personImage,
    name: "name 3",
    message: "some message3",
    date: "12/2",
    userName: "contact3",
  },
  {
    id: "b4",
    image: personImage,
    name: "name 4",
    message: "some message4",
    date: "13/3",
    userName: "contact4",
  },
];
const contactsData = DUMMY_CONTACTS.map((contact) => {
  let activeStyle = {
    margin: "0",
    padding: "0",
    marginLeft: "10px",
    width: "248px",
    height: "50px",
    display: "flex",
    color: "#444791",
    marginBottom: "10px",
    position: "relative",
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "spaceAround",
    backgroundColor: "white",
    textDecoration: "none",
    borderLeft: "3px solid #444791",
  };
  let unactiveStyle = {
    margin: "0",
    padding: "0",
    marginLeft: "10px",
    width: "250px",
    height: "50px",
    display: "flex",
    color: "#757575",
    marginBottom: "10px",
    position: "relative",
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "spaceAround",
    textDecoration: "none",
  };
  return (
    <NavLink
      to={`/chat/${contact.userName}`}
      key={contact.id}
      style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
    >
      {
        <Contact
          image={contact.image}
          name={contact.name}
          message={contact.message}
          date={contact.date}
        ></Contact>
      }
    </NavLink>
  );
});
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
const ContactList = () => {
  return (
    <div style={{ boxShadow: "-15px 0px 10px -10px #e7e7e7" }}>
      <StyledHeadingSection>Chat</StyledHeadingSection>
      <div>{contactsData}</div>
    </div>
  );
};
export default ContactList;
