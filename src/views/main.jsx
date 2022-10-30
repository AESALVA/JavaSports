
import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Landing from '../components/Landing'
import Aboutus from '../components/Aboutus'
import Register from '../components/Register'
import PassRecovery from '../components/PassRecovery';


const Main = (auth,
  login,
  logout,
  validate,
  setAuth) => {
  return (

    <Container fluid className="min-vh-100 d-flex flex-column">
      <Routes>
        <Route element={<Aboutus />} path="/Aboutus"></Route>
    <Route element={<Landing login={login}
        logout={logout}
        setAuth={setAuth}
        validate={validate}
        auth={auth}
        />} path="/" ></Route>
        <Route element={<Register />} path="/Register"></Route>
        <Route element={<PassRecovery />} path="/PassRecovery"></Route>
        </Routes>
    <Footer />

    </Container>
  );
};

export default Main;
