import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import validator from "validator";
import { CloseButton } from "react-bootstrap";

const Register = ({ setAuth, addUser }) => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
    setShow(false);
  };

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [firstName, setFirstName] = useState(true);
  const [firstMail, setFirstMail] = useState(true);
  const [firstPass, setFirstPass] = useState(true);
  const [wrongCredentials, setWrongCredentials] = useState("");


  const validateName = (n) => {
    return (
      validator.matches(n, "^[a-zA-Z ]*$") &&
      validator.isLength(n, { min: 5, max: 36 })
    );
  };
  const validateMail = (n) => {
    return (
      validator.isLength(n, { min: 5, max: 36 }) &&
      validator.isEmail(n, {
        allow_display_name: false,
        require_display_name: false,
        allow_utf8_local_part: true,
        require_tld: true,
        allow_ip_domain: false,
        domain_specific_validation: false,
        blacklisted_chars: "",
        host_blacklist: [],
      })
    );
  };
  const validatePass = (n) => {
    return (
      validator.matches(n, "[a-zA-Z]") &&
      validator.isLength(n, { min: 8, max: 20 }) &&
      validator.isStrongPassword(n, {
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
      })
    );
  };

  const handleClick = (e) => {
    e.preventDefault();
    if(validateName(name) && validateMail(mail) && validatePass(pass)) {
    setAuth({ user: name, pass: pass, role: "user" });
    addUser({ name: name, mail: mail , password: pass, role: "user" });
    navigate("/");} else{
      setWrongCredentials("Debe completar correctamente todos los campos")
    }
  };

  useEffect(() => {setWrongCredentials("");
}, [name, pass, mail]);
  return (
    <>
      <Modal show={show} onHide={handleClose} contentClassName="bg-dark">
        <Modal.Header className="border-danger bg-dark  flex-column ">
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
        <h2 className="mx-auto mt-5">Registrarse</h2>
        <Modal.Body className="mb-3 py-4 px-4 bg-dark">
          <Form>
            <Form.Group className="mb-3 bg-dark" controlId="formName">
              <Form.Label>
                Usuario{" "}
                {!validateName(name) && !firstName && (
                  <span className="text-danger">Debe llenar este campo</span>
                )}
              </Form.Label>
              <Form.Control
                maxLength="40"
                value={name}
                onInput={(e) => setName(e.target.value)}
                onBlur={() => setFirstName(false)}
                className="p-3"
                type="text"
                placeholder="JavaSports"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>
                Email{" "}
                {!validateMail(mail) && !firstMail && (
                  <span className="text-danger">Debe llenar este campo</span>
                )}
              </Form.Label>
              <Form.Control
                maxLength="40"
                value={mail}
                onInput={(e) => setMail(e.target.value)}
                onBlur={() => setFirstMail(false)}
                className="p-3"
                type="email"
                placeholder="Java@Sports.com"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>
                Contraseña{" "}
                {!validatePass(pass) && !firstPass && (
                  <span className="text-danger">
                    La contraseña debe contar al menos con 1 mayus 1 minus 1 num
                    entre 8 y 20 caracteres
                  </span>
                )}
              </Form.Label>
              <Form.Control
                maxLength="25"
                value={pass}
                onInput={(e) => setPass(e.target.value)}
                onBlur={() => setFirstPass(false)}
                className="p-3"
                type="password"
                placeholder="1mayus 1minus 1num entre 8 y 20 caracteres"
              />
            </Form.Group>
          </Form>
          <span className="text-danger">{wrongCredentials}</span>
          
        </Modal.Body>
        
        <Button
          className="m-auto px-5 mb-5 btn-red btn-red-border"
          size="lg"
          type="submit"
          onClick={(e) => handleClick(e)}
        >
          <h4 className="m-auto py-1 px-4">Confirmar</h4>
        </Button>
      </Modal>
    </>
  );
};

export default Register;
