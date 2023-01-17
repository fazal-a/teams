import React, { useContext } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import AuthenticationContext from "../../Store/auth-context";

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.1);
`;
const StyleModal = styled.div`
  position: fixed;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  top: 7vh;
  z-index: 100;
  left: 80%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 30;
  width: 200px;
  height: 175px;
  @media (min-width: 768px) {
    .modal {
      width: 40rem;
      left: calc(50% - 20rem);
    }
  }
  .heading {
    font-size: large;
    font-weight: 700;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .detail {
    font-size: medium;
    font-weight: 400;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
  }
  .closeButton {
    border: 1px solid #444791;
    background: white;
    border-radius: 0.4rem;
    height: 1.7rem;
    color: #444791;
    width: 5rem;
    align-items: center;
    border-radius: 4px;
    &:hover {
      cursor: pointer;
      background: #444791;
      color: white;
    }
    margin: 5px;
  }
  .logoutButton {
    background: #444791;
    color: white;
    height: 1.7rem;
    width: 5rem;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #444791;

    &:hover {
      cursor: pointer;
      border: 1px solid #444791;
      background: white;
      border-radius: 0.4rem;
      color: #444791;
    }
    margin: 5px;
  }
  .buttonRow {
    display: flex;
  }
`;

const ProfileModal = (props) => {
  const Authenticationctx = useContext(AuthenticationContext);
  const logoutHandler = () => {
    Authenticationctx.logout();
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <StyledBackdrop onClick={props.onConfirm}></StyledBackdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <StyleModal>
          <div className="heading">{props.title}</div>
          <div className="detail">
            <div>{`Name: ${props.name}`}</div>
            <span>{`Details: ${props.details}`}</span>
          </div>
          <div className="buttonRow">
            <button onClick={props.onConfirm} className="closeButton">
              Close
            </button>
            <button className="logoutButton" onClick={logoutHandler}>
              Logout
            </button>
          </div>
        </StyleModal>,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};
export default ProfileModal;
