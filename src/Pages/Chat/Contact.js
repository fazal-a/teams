import React from "react";
import styled from "styled-components";

const StyledContact = styled.section`
  width: 250px;
  height: 50px;
  display: flex;
  margin-bottom: 10px;
  position: relative;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  &:hover {
    color: #444791;
    cursor: pointer;
    background-color: white;
  }

  > .profileImage {
    border: 0;
    border-radius: 36.4rem;
    margin: 0px;
    height: 2.2rem;
    width: 2.2rem;
    align-items: center;
    margin-right: -2rem;
  }
  > .date {
    color: brown;
    > &:hover {
      color: white;
    }
  }
`;

const StyledDiv = styled.div`
  margin: 0px;
  padding-left: 0px;
  margin-left: 20px;
  height: 40px;
  /* padding-top: 20px; */
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  align-items: flex-start;
`;
const StyledName = styled.div`
  font-weight: bold;
  font-size: medium;
`;
const StyledMessage = styled.div`
  font-weight: 400px;
`;
const Contact = (props) => {
  return (
    <StyledContact>
      <img className="profileImage" src={props.image}></img>
      <StyledDiv>
        <StyledName>{props.name.toUpperCase()}</StyledName>
        <StyledMessage>{props.message}</StyledMessage>
      </StyledDiv>
      <div className="date">{props.date}</div>
    </StyledContact>

    //
  );
};

export default Contact;
