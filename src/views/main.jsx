import React from "react";
import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Register from "../components/Register";
import PassRecovery from "../components/PassRecovery";
import Header from "../components/Header";
import SectionsContainer from "../components/SectionsContainer";
import SectionsList from "../components/SectionsList";
import E404 from "../components/E404";
import Contact from "../components/Contact";
import Management from "../components/Management";
import SearchContainer from "../components/SearchContainer";
import ResetPassword from "../components/ResetPassword";
import Aboutus from "../components/Aboutus";

const Main = ({
  auth,
  login,
  logout,
  validate,
  setAuth,
  addUser,
  search,
  setSearch,
  articles,
  setArticles,
  users,
  setUsers,
  commentsContainer,
  sectionByCategory,
  setSectionByCategory,
  isLoaded,
  setIsLoaded,
  action,
  setAction,
  confirmDEL,
  confirmDELUsers,
}) => {
  return (
    <Container fluid className="main-container d-flex flex-column p-0">
      <Header
        validate={validate}
        login={login}
        auth={auth}
        logout={logout}
        search={search}
        setSearch={setSearch}
        setSectionByCategory={setSectionByCategory}
        isLoaded={isLoaded}
        setIsLoaded={setIsLoaded}
      />
      <Routes>
        <Route path="/aboutus" element={<Aboutus />} />
        <Route
          element={
            <SearchContainer articles={articles} search={search} auth={auth} />
          }
          path="/SearchContainer"
        />

        <Route
          element={<Register setAuth={setAuth} addUser={addUser} />}
          path="/Register"
        />
        <Route
          element={
            <PassRecovery isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
          }
          path="/PassRecovery"
        />

        <Route element={<E404 title={"Error 404"} />} path="/404" />
        <Route element={<Contact />} path="/Contact" />

        <Route
          element={
            <SectionsContainer
              auth={auth}
              commentsContainer={commentsContainer}
            />
          }
          path="/SectionsContainer"
        />
        <Route
          element={
            auth.user ? (
              <SectionsList
                categoryId={sectionByCategory}
                articles={articles}
                auth={auth}
              />
            ) : (
              <E404 title={"Debes iniciar sesión para ver las noticias"} />
            )
          }
          path="/SectionsList"
        />
        <Route
          element={
            <Management
              auth={auth}
              articles={articles}
              setArticles={setArticles}
              users={users}
              action={action}
              setAction={setAction}
              confirmDEL={confirmDEL}
              confirmDELUsers={confirmDELUsers}
            />
          }
          path="/Management"
        />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route element={<Landing articles={articles} auth={auth} />} path="/" />
      </Routes>
      <Footer />
    </Container>
  );
};

export default Main;
