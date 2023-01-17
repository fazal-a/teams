import React, { useState } from "react";
const AuthenticationContext = React.createContext({
  token: "",
  isloggedIn: false,
  login: (token) => {},
  logout: () => {},
  setData: (email) => {},
});
export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialEmail = localStorage.getItem("data");
  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);
  const userIsLoggedIn = !!token;
  const loginHandler = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };
  const logoutHandler = () => {
    console.log(`logout handler called in auth-context`);
    localStorage.removeItem("token");
    setToken(null);
  };
  const setDataHandler = (email) => {
    console.log(`set data handler called in auth-context`);
    localStorage.setItem("data", email);
    setEmail(email);
  };
  const contextValue = {
    token: token,
    email: email,
    isloggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    setData: setDataHandler,
  };
  return (
    <AuthenticationContext.Provider value={contextValue}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};
export default AuthenticationContext;
