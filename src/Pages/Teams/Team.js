import React from "react";
import styled from "styled-components";
const StyledTeam = styled.section`
  box-shadow: 0 0.2rem 0.4rem -0.075rem rgb(0 0 0 / 10%);
  background: #fff;
  color: #000000;
  font-weight: 600;
  border-radius: 0.2rem;
  width: 15rem;
  height: 13rem;
  text-align: center;
  margin-left: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0.2rem 0.4rem -0.075rem rgb(0 0 0 / 30%);
    background-color: #f0f0f0;
    box-sizing: border-box;
    border: 1px solid #969696;
  }
`;
const StyledIcon = styled.div`
  /* background: rgb(255, 13, 13); */
  color: #ffffff;
  font-weight: 600;
  border-radius: 0.2rem;
  width: 4rem;
  height: 4rem;
  text-align: center;
  margin-top: 50px;
`;

const Team = (props) => {
  let matches = props.title.match(/\b(\w)/g);
  let acronym = matches.join("");

  return (
    <>
      <StyledTeam>
        <StyledIcon
          style={{
            backgroundColor: props.backgroundColor,
          }}
        >
          <h3>{acronym}</h3>
        </StyledIcon>
        <div>
          <p>{props.title}</p>
        </div>
      </StyledTeam>
    </>
  );
};

export default Team;
