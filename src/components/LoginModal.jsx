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
import "../styles/Footer.css";


const LoginModal = ({
  auth,
  login,
  logout,
  validate,
  setAuth,
  isLoaded,
  setIsLoaded,
  location,
  top
}) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState(true);
  const [firstPassword, setFirstPassword] = useState(true);
  const [wrongCredentials, setWrongCredentials] = useState("");
  const navigate = useNavigate();

  const handleValidation = async (e) => {
    e.preventDefault();
    validate(name, password);
    login(name, password);
    auth.role === false &&
      setWrongCredentials("Usuario y/o Contraseña incorrectos!");
      top();
  };

  useEffect(() => {
    if (auth.role === false) {
      setWrongCredentials("Usuario y/o Contraseña incorrectos!");
    } else {
      handleClose();
      setName("");
      setPassword("");
    }
  }, [auth]);

  const validateName = (n = "hol") => {
    return (
      validator.matches(n, "^[a-zA-Z ]*$") &&
      validator.isLength(n, { min: 5, max: 36 })
    );
  };
  const validatePassword = (n = "hol") => {
    return (
      validator.isLength(n, { min: 8, max: 20 }) &&
      validator.isStrongPassword(n, {
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 0,
      })
    );
  };

  useEffect(() => {
    setWrongCredentials("");
  }, [name, password]);

  const handleClick = () => {
    logout();
    top();
  };

  const handleClose = () => {
    setName("");
    setPassword("");
    setFirstName(true);
    setFirstPassword(true);
    setShow(false);
    setWrongCredentials("");
  };
  const handleShow = () => {
    setShow(true);
    setWrongCredentials("");
  };
  return (
    <>
   {location ? (<>{!auth.user? (
        <Link className="no-underline m-2" id="footer-links" onClick={handleShow}>
          <h6>Ingresar</h6>
        </Link>
      ) : (
        <Link to="/" className="no-underline m-2" onClick={handleClick}>
          <h6>Cerrar sesión</h6> 
        </Link>
      )}</>):(<>{!auth.user ? (
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
      )}</>)}
      
      

      {/* MODAL */}

      <Modal
        id="modalLogin"
        show={show}
        onHide={handleClose}
        keyboard={false}
        contentClassName="bg-dark h-100"
      >
        {isLoaded ? (
          <Loader />
        ) : (
          <>
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
            <h3 className="mx-auto mt-4">Iniciar Sesión</h3>
            <Modal.Body className="mx-auto bg-dark" id="modal-body-one">
              ¿ No tienes cuenta ?{" "}
              <Link
                onClick={handleClose}
                className=" modal_styles"
                to="/Register"
              >
                Registráte
              </Link>{" "}
            </Modal.Body>
            <Modal.Body className="mb-3 py-4 px-4 bg-dark">
              <Form id="form-login">
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
                    className="p-1"
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
                    className="p-1"
                    type="password"
                    placeholder="Contraseña"
                  />
                </Form.Group>
                <Form.Text>
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
            <span className="text-danger text-center mb-4">
              {wrongCredentials}
            </span>
            <Button
              className="m-auto px-3 py-1 mb-5  btn-red btn-red-border"
              size="lg"
              type="submit"
              onClick={(e) => handleValidation(e)}
            >
              <h4 className="m-auto py-1 px-4">Iniciar</h4>
            </Button>
          </>
        )}
      </Modal>
    </>
  );
};

export default LoginModal;
