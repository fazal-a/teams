import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import ImageForLogin from "../../Assets/imageforloginpage.PNG";
import AuthenticationContext from "../../Store/auth-context";
const StyledLoginSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  height: 100vh;
  > .topbar {
    background: #444791;
    height: 3rem;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    color: #fff;
    position: relative;
    width: 100vw;
  }
  > .heading {
    color: #444791;
    display: flex;
    align-items: center;
    width: 80vw;
    flex-direction: row;
    justify-content: space-between;
    &:hover {
      cursor: pointer;
    }
  }
  > .image {
    width: 15rem;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    position: relative;
    background-size: cover;
    background: no-repeat;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const StyledEmailInput = styled.input`
  border: 0;
  background: rgba(255, 255, 255);
  border-radius: 0.4rem;
  height: 2rem;
  color: black;
  width: 20rem;
  margin: 0.5rem;
  padding: 0 1rem 0.1rem 1rem;
  align-items: center;
  border-radius: 4px;
  outline: white;
  .field:hover {
  }
`;
const StyledPasswordInput = styled.input`
  border: 0;
  background: rgba(255, 255, 255);
  border-radius: 0.4rem;
  height: 2rem;
  color: black;
  width: 20rem;
  margin: 0.5rem;
  padding: 0 1rem 0.1rem 1rem;
  align-items: center;
  border-radius: 4px;
  outline: white;
  .field:hover {
  }
`;
const StyledCreateButton = styled.button`
  border: 0;
  background: rgba(255, 255, 255);
  border-radius: 0.4rem;
  height: 2rem;
  background: #444791;
  color: white;
  width: 22rem;
  margin: 0.5rem;
  align-items: center;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
`;
const StyledSigninButton = styled.button`
  color: #444791;
  text-decoration: none;
  background-color: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const Authenticationctx = useContext(AuthenticationContext);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHander = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;
    setIsLoading(true);
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCeRJueZLSUfcLhA_dVRYTGLpZY3k5rgt0";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCeRJueZLSUfcLhA_dVRYTGLpZY3k5rgt0";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            //show an error modal
            let errorMessage = "Authentication Failed!";
            console.log(data);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        // Authctx.login(data.idToken);
        Authenticationctx.login(data.idToken);
        Authenticationctx.setData(data.email);
        // history.replaceState('/');
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <StyledLoginSection>
      <div className="topbar"></div>
      <div className="heading">
        <h2>Microsoft Teams</h2>
        {isLogin ? (
          <h4 onClick={switchAuthModeHandler}>Sign In</h4>
        ) : (
          <h4 onClick={switchAuthModeHandler}>Log In</h4>
        )}
      </div>
      <img
        className="image"
        src={ImageForLogin}
        alt="An image of three person team"
      ></img>
      <h4>Enter your Work, School or Microsoft Account</h4>
      <StyledForm onSubmit={submitHander}>
        <StyledEmailInput
          placeholder="Signup Address"
          type="email"
          id="email"
          required
          ref={emailInputRef}
        ></StyledEmailInput>
        <StyledPasswordInput
          placeholder="Password"
          type="password"
          id="password"
          required
          ref={passwordInputRef}
        ></StyledPasswordInput>
        {!isLoading && (
          <StyledCreateButton>
            {isLogin ? "Login" : "Create Account"}
          </StyledCreateButton>
        )}
        {isLoading && <p>Sending request...</p>}
      </StyledForm>
      <p>
        <StyledSigninButton onClick={switchAuthModeHandler}>
          {isLogin ? `Create new account` : `Login with existing account`}
        </StyledSigninButton>
      </p>
    </StyledLoginSection>
  );
};
export default Login;
