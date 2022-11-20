import React from "react";
import Container from "react-bootstrap/Container";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Aboutus from "../components/Aboutus";
import Register from "../components/Register";
import PassRecovery from "../components/PassRecovery";
import Header from "../components/Header";
import SectionsContainer from "../components/SectionsContainer";
import SectionsList from "../components/SectionsList";
import E404 from "../components/E404";
import { useState } from "react";
import Sections from "../components/Sections";

const Main = ({
  auth,
  login,
  logout,
  validate,
  setAuth,
  mockSections,
  addUser,
  page,
  setPage,
  search,
  setSearch,
}) => {
  return (
    <Container fluid className="min-vh-100 d-flex flex-column p-0">
      <Header
        validate={validate}
        login={login}
        auth={auth}
        logout={logout}
        page={page}
        setPage={setPage}
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route element={<Aboutus />} path="/Aboutus"></Route>
        <Route
          element={
            <Landing page={page} search={search} setSearch={setSearch} />
          }
          path="/"
        ></Route>
        <Route
          element={<Register setAuth={setAuth} addUser={addUser} />}
          path="/Register"
        ></Route>
        <Route element={<PassRecovery />} path="/PassRecovery"></Route>
        <Route element={<SectionsContainer />} path="/SectionsContainer"></Route>
        <Route element={<SectionsList mockSections={mockSections}/>} path="/SectionsList" ></Route>
        <Route element={<E404/>} path="/404"></Route>
        <Route
          element={<SectionsContainer auth={auth} />}
          path="/SectionsContainer"
        ></Route>
        <Route
          element={<SectionsList mockSections={mockSections} />}
          path="/SectionsList"
        ></Route>
      </Routes>
      <Footer />
    </Container>
  );
};

export default Main;
