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

const Main = ({auth, login, logout, validate, setAuth, MockSections}) => {
  return (
    <Container fluid className="min-vh-100 d-flex flex-column p-0">
      <Header />
      <Routes>
        <Route element={<Aboutus />} path="/Aboutus"></Route>
        <Route element={<Landing />} path="/"></Route>
        <Route element={<Register />} path="/Register"></Route>
        <Route element={<PassRecovery />} path="/PassRecovery"></Route>
        <Route element={<SectionsContainer />} path="/SectionsContainer"></Route>
        <Route element={<SectionsList MockSections={MockSections}/>} path="/SectionsList" ></Route>
      </Routes>
      <Footer />
    </Container>
  );
};

export default Main;
