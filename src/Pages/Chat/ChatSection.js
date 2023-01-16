import React from "react";
import Messages from "./Messages";
import styled from "styled-components";
import ContactList from "./ContactList";
const StyledSection = styled.section`
  /* box-shadow: -15px 0px 10px -10px #e7e7e7; */
  /* height: 100vh; */
  display: flex;
  justify-content: flex-start;
  .sections {
    /* display: flex; */
  }
`;
const ChatSection = () => {
  return (
    <StyledSection>
      <ContactList />
      <Messages />
    </StyledSection>
  );
};
export default ChatSection;
