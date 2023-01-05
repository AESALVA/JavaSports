import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import validator from "validator";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../styles/loginModal.css";
import CloseButton from "react-bootstrap/CloseButton";
import Loader from "./Loader";

const LoginModal = ({ auth, login, logout, validate, setAuth, isLoaded, setIsLoaded }) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState(true);
  const [firstPassword, setFirstPassword] = useState(true);
  const [wrongCredentials, setWrongCredentials] = useState("");


  const handleValidation = async (e) => {
    e.preventDefault();
    
     validate(name, password);
     login(name, password);
     auth.role === false && setWrongCredentials("Usuario y/o Contraseña incorrectos!")
  };
   
  useEffect(() => {
   if(auth.role === false){
      setWrongCredentials("Usuario y/o Contraseña incorrectos!");
    } else {
      handleClose();
      setName("");
      setPassword("");
    }
  }, [auth])
  



  const validateName = (n) => {
    return (
      validator.matches(n, "^[a-zA-Z ]*$") &&
      validator.isLength(n, { min: 5, max: 36 })
    );
  };
  const validatePassword = (n) => {
    return (
      validator.isLength(n, { min: 8, max: 20 }) &&
      validator.isStrongPassword(n, {
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    );
  };

  useEffect(() => {
    setWrongCredentials("");
  }, [name, password]);

  const handleClick = () => {
    logout();
  };

  const handleClose = () => {
    setName("");
    setPassword("");
    setFirstName(true);
    setFirstPassword(true);
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <>
      {!auth.user ? (
        <Button
          className="btn-gray btn-gray-border "
          id="btn-login"
          onClick={handleShow}
        >
          Ingresar
        </Button>
      ) : (
        <Link onClick={handleClick}>
          <OverlayTrigger
            key="btn-login"
            placement="bottom"
            overlay={<Tooltip id="button">Cerrar sesión</Tooltip>}
          >
            <Button className="p-2" id="btn-login" variant="outline-danger">
              <FontAwesomeIcon icon={faUser} /> {auth.user}
            </Button>
          </OverlayTrigger>
        </Link>
      )}
      {!auth.user ? (
        <Link className="modal_styles link_styles" onClick={handleShow}>
          Ingresar
        </Link>
      ) : (
        <Link className="modal_styles link_styles" onClick={handleClick}>
          <FontAwesomeIcon icon={faUser} className="me-2" /> Cerrar sesión
        </Link>
      )}

      {/* MODAL */}
      
      <Modal
        id="modalLogin"
        show={show}
        onHide={handleClose}
        keyboard={false}
        contentClassName="bg-dark "
      >
        {isLoaded?(<Loader />):(<>
        <Modal.Header className="border-danger bg-dark flex-column ">
          <CloseButton onClick={handleClose} variant="white" />
          <Link className="mx-auto" to="/">
            <img
              className="bg-dark logo"
              src="/img/LogoJS.jpg"
              width="100"
              height="100"
              alt="logotipo"
            />
          </Link>
        </Modal.Header>
        <h2 className="mx-auto mt-4">Iniciar Sesión</h2>
        <Modal.Body className="mx-auto bg-dark">
          ¿ No tienes cuenta ?{" "}
          <Link onClick={handleClose} className=" modal_styles" to="/Register">
            Registráte
          </Link>{" "}
        </Modal.Body>
        <Modal.Body className="mb-3 py-4 px-4 bg-dark">
          <Form>
            <Form.Group className="mb-3 bg-dark" controlId="formBasicEmail">
              <Form.Label>
                Usuario{" "}
                {!validateName(name) && !firstName && (
                  <span>Debe llenar este campo</span>
                )}
              </Form.Label>
              <Form.Control
                maxLength="40"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setFirstName(false)}
                className="p-3"
                type="text"
                placeholder="Usuario"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Contraseña{" "}
                {!validatePassword(password) && !firstPassword && (
                  <span>Debe llenar este campo</span>
                )}
              </Form.Label>
              <Form.Control
                maxLength="40"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setFirstPassword(false)}
                className="p-3"
                type="password"
                placeholder="Contraseña"
              />
            </Form.Group>
            <Form.Text className="text-danger">
              <Link
                to="/PassRecovery"
                onClick={handleClose}
                className="modal_styles"
              >
                Olvidé mi contraseña
              </Link>
            </Form.Text>
          </Form>
        </Modal.Body>
        <span className="text-danger text-center mb-4">{wrongCredentials}</span>
        <Button
          className="m-auto px-5 mb-5  btn-red btn-red-border"
          size="lg"
          type="submit"
          onClick={(e) => handleValidation(e)}
        >
          <h4 className="m-auto py-1 px-4">Iniciar</h4>
        </Button>
        </> )}
      </Modal>
      
    </>
  );
};

export default LoginModal;
