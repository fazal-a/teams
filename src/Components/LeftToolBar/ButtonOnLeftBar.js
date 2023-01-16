import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledButton = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    width: 60px;
    height: 60px;
    color: #444791;
    cursor: pointer;
    background-color: white; //#f5f5f5
    align-items: center;
  }

  > .icon {
    margin-top: 10px;
    max-width: 20px;
  }

  > .text {
    margin-top: 5px;
    font-size: small;
  }
`;

const ButtonOnLeftBar = (props) => {
  return (
    <StyledButton>
      <FontAwesomeIcon icon={props.icon} className="icon"></FontAwesomeIcon>
      <div className="text">{props.iconText}</div>
    </StyledButton>
  );
};

export default ButtonOnLeftBar;
