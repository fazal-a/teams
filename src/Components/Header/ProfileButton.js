import React, { useState, useContext } from "react";
import personImage from "../../Assets/person.png";
import ProfileModal from "../UI/ProfileModal";
import styled from "styled-components";
import AuthenticationContext from "../../Store/auth-context";
const StyledImage = styled.img`
  border: 0;
  border-radius: 36.4rem;
  height: 2.2rem;
  width: 2.2rem;
  align-items: center;
  margin-right: 2rem;
  &:hover {
    cursor: pointer;
  }
`;
const ProfileButton = () => {
  const Authenticationctx = useContext(AuthenticationContext);
  const [showModal, setShowModal] = useState("");

  const onClickHandler = () => {
    {
      setShowModal(true);
    }
  };
  const clickHandler = () => {
    setShowModal(null);
  };
  return (
    <div>
      {showModal && (
        <ProfileModal
          title={Authenticationctx.email}
          name={"user full name"}
          details={"Other details comes here"}
          onConfirm={clickHandler}
        ></ProfileModal>
      )}
      <StyledImage src={personImage} onClick={onClickHandler}></StyledImage>
    </div>
  );
};

//
export default ProfileButton;
