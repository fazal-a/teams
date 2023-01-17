import { useContext } from "react";
import React from "react";
import styled from "styled-components";
import LeftToolBar from "../../Components/LeftToolBar/LeftToolBar";
import TeamsSection from "../../Pages/Teams/TeamsSection";
import ChatSection from "../../Pages/Chat/ChatSection";
import ActivitySection from "../../Pages/Activity/ActivitySection";
import AppsSection from "../../Pages/Apps/AppsSection";
import HelpSection from "../../Pages/Help/HelpSection";
import PhoneSection from "../../Pages/Phone/PhoneSection";
import { Route, Routes, Navigate } from "react-router-dom";
import TeamDetails from "../../Pages/Teams/TeamDetails/TeamDetails";
import ErrorPage from "../../Pages/ErrorPage";
import Messages from "../../Pages/Chat/Messages";
import AuthenticationContext from "../../Store/auth-context";
import Login from "../../Pages/Login/Login";
import AppHeader from "../../Components/Header/AppHeader";

const StyledMain = styled.section`
  background-color: #f5f5f5;
  height: 100vh;
  .sections {
    display: flex;
  }
  .errorPage {
    flex-direction: column;
    align-items: center;
  }
`;
const Main = () => {
  const Authenticationctx = useContext(AuthenticationContext);

  return (
    <StyledMain>
      <main>
        <Routes>
          <Route
            path="/auth"
            element={
              !Authenticationctx.isloggedIn ? (
                <Login />
              ) : (
                <Navigate replace to={"/teams"} />
              )
            }
          ></Route>
          <Route
            path="/chat"
            element={
              Authenticationctx.isloggedIn ? (
                <div>
                  <header>
                    <AppHeader />
                  </header>
                  <section className="sections">
                    <LeftToolBar />
                    <ChatSection />
                    {/* <Messages /> */}
                  </section>
                </div>
              ) : (
                <Navigate replace to={"/auth"} />
              )
            }
          ></Route>
          <Route
            path="/chat/:contactId"
            element={
              Authenticationctx.isloggedIn ? (
                <div>
                  <header>
                    <AppHeader />
                  </header>
                  <section className="sections">
                    <LeftToolBar />
                    <ChatSection />
                  </section>
                </div>
              ) : (
                <Navigate replace to={"/auth"} />
              )
            }
          ></Route>
          <Route
            path="/"
            element={
              Authenticationctx.isloggedIn ? (
                <div>
                  <header>
                    <AppHeader />
                  </header>
                  <section className="sections">
                    <LeftToolBar />
                    <TeamsSection />
                  </section>
                </div>
              ) : (
                <Navigate replace to={"/auth"} />
              )
            }
          ></Route>
          <Route
            path="/teams"
            element={
              Authenticationctx.isloggedIn ? (
                <div>
                  <header>
                    <AppHeader />
                  </header>
                  <section className="sections">
                    <LeftToolBar />
                    <TeamsSection />
                  </section>
                </div>
              ) : (
                <Navigate replace to={"/auth"} />
              )
            }
          ></Route>
          <Route
            path="/teams/:teamId"
            element={
              Authenticationctx.isloggedIn ? (
                <div>
                  <header>
                    <AppHeader />
                  </header>
                  <section className="sections">
                    <LeftToolBar />
                    <TeamDetails />
                  </section>
                </div>
              ) : (
                <Navigate replace to={"/auth"} />
              )
            }
          ></Route>
          <Route
            path="/phone"
            element={
              Authenticationctx.isloggedIn ? (
                <div>
                  <header>
                    <AppHeader />
                  </header>
                  <section className="sections">
                    <LeftToolBar />
                    <PhoneSection />
                  </section>
                </div>
              ) : (
                <Navigate replace to={"/auth"} />
              )
            }
          ></Route>
          <Route
            path="/phone"
            element={
              Authenticationctx.isloggedIn ? (
                <div>
                  <header>
                    <AppHeader />
                  </header>
                  <section className="sections">
                    <LeftToolBar />
                    <PhoneSection />
                  </section>
                </div>
              ) : (
                <Navigate replace to={"/auth"} />
              )
            }
          ></Route>
          <Route
            path="/activity"
            element={
              Authenticationctx.isloggedIn ? (
                <div>
                  <header>
                    <AppHeader />
                  </header>
                  <section className="sections">
                    <LeftToolBar />
                    <ActivitySection />
                  </section>
                </div>
              ) : (
                <Navigate replace to={"/auth"} />
              )
            }
          ></Route>
          <Route
            path="/apps"
            element={
              Authenticationctx.isloggedIn ? (
                <div>
                  <header>
                    <AppHeader />
                  </header>
                  <section className="sections">
                    <LeftToolBar />
                    <AppsSection />
                  </section>
                </div>
              ) : (
                <Navigate replace to={"/auth"} />
              )
            }
          ></Route>
          <Route
            path="/help"
            element={
              Authenticationctx.isloggedIn ? (
                <div>
                  <header>
                    <AppHeader />
                  </header>
                  <section className="sections">
                    <LeftToolBar />
                    <HelpSection />
                  </section>
                </div>
              ) : (
                <Navigate replace to={"/auth"} />
              )
            }
          ></Route>
          <Route
            path="*"
            element={
              Authenticationctx.isloggedIn ? (
                <div>
                  <header>
                    <AppHeader />
                  </header>
                  <section className="sections">
                    <LeftToolBar />
                    <TeamsSection />
                  </section>
                </div>
              ) : (
                <Navigate replace to={"/auth"} />
              )
            }
          ></Route>
        </Routes>
      </main>
    </StyledMain>
  );
};
export default Main;
