import React from "react";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Aboutus from "../components/Aboutus";
import Register from "../components/Register";
import PassRecovery from "../components/PassRecovery";
import Header from "../components/Header";
import SectionsContainer from "../components/SectionsContainer";
import SectionsList from "../components/SectionsList";
import E404 from "../components/E404";
import Contact from "../components/Contact";
import Management from "../components/Management";
import SearchContainer from "../components/SearchContainer";
import { useState } from "react";

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
        <Route element={<Aboutus />} path="/Aboutus"></Route>
        <Route
          element={
            <SearchContainer articles={articles} search={search} auth={auth} />
          }
          path="/SearchContainer"
        ></Route>
        <Route
          element={<Landing articles={articles} auth={auth} />}
          path="/"
        ></Route>
        <Route
          element={<Register setAuth={setAuth} addUser={addUser} />}
          path="/Register"
        ></Route>
        <Route element={<PassRecovery />} path="/PassRecovery"></Route>

        <Route element={<E404 title={"Error 404"} />} path="/404"></Route>
        <Route element={<Contact />} path="/Contact"></Route>

        <Route
          element={
            <SectionsContainer
              auth={auth}
              commentsContainer={commentsContainer}
            />
          }
          path="/SectionsContainer"
        ></Route>
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
        ></Route>
        <Route
          element={
            <Management
              auth={auth}
              articles={articles}
              setArticles={setArticles}
              users={users}
            />
          }
          path="/Management"
        ></Route>
      </Routes>
      <Footer />
    </Container>
  );
};

export default Main;
