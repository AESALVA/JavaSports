import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";
import { useState } from "react";
import LoginModal from "./LoginModal";
import "../styles/header.css";

const Header = (auth, login, logout, validate, setAuth) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar className="colorNav d-none d-md-block mx-0 d-flex ">
        <Container>
          <div>
            <img
              alt="logo"
              src="../img/LogoJS.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{" "}
          </div>
          <div>JAVASPORTS</div>
          <div>
            <LoginModal
              login={login}
              logout={logout}
              setAuth={setAuth}
              validate={validate}
              auth={auth}
            />
          </div>
        </Container>
      </Navbar>
      <Navbar className="colorNav" expand="md">
        <Container className="pe-0">
          <Navbar.Brand href="#home" className="d-md-none">
            <img src="../img/LogoJS.jpg" alt="logo" id="headerLogo" />
          </Navbar.Brand>
          <span>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </span>
          <Navbar.Collapse
            className="justify-content-center"
            id="basic-navbar-nav"
          >
            <div>
              <Nav className="me-auto" id="headerLinks">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Secciones" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Fútbol</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Hockey</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Tenis</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Boxeo</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Contacto</Nav.Link>
                <Nav.Link href="#link">Favoritos</Nav.Link>
                <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <br />
      <br />
    </>
  );
};

export default Header;
