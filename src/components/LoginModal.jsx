import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import ModalDialog from 'react-bootstrap/ModalDialog'
import {Link, useNavigate} from "react-router-dom";
import { NavLink } from "react-bootstrap";
import validator from "validator";
import { useEffect } from "react";




const LoginModal = (auth,
  login,
  logout,
  validate,
  setAuth) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [firstName, setFirstName] = useState(true);
  const [firstPass, setFirstPass] = useState(true);
  const navigate = useNavigate();
  const handleValidation = (e) => {
    e.preventDefault();
    if (validate(name, pass)) {
      login(name);
      navigate("/");
    }
  };
  const validateName = (n) => {
    return (
      validator.matches(n, "^[a-zA-Z ]*$") && validator.isLength(n, {min: 5, max: 36})
    );
  };
  const validatePass = (n) => {
    return (
      validator.matches(n, "^[a-zA-Z ]*$") && validator.isLength(n, {min: 8, max: 20})
    );
  };
  
  useEffect(() => {}, [name, pass]);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button className="btn-login" variant="outline-secondary" onClick={handleShow}>
        Ingresar
      </Button>
      <Link className="modal_styles link_styles" onClick={handleShow}>Ingresar</Link>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        contentClassName="bg-dark "
      >
        <Modal.Header className="border-danger bg-dark">
          <Link className="mx-auto" to="/"><img className="bg-dark logo" src="/img/LogoJS.jpg"width="100"height="100"/></Link>
        </Modal.Header>
        <h2 className="mx-auto mt-4">Iniciar Sesión</h2>
        <Modal.Body className="mx-auto bg-dark">¿ No tienes cuenta ? <Link onClick={handleClose} className=" modal_styles" to="/Register" >Registráte</Link> </Modal.Body>
        <Modal.Body className="mb-3 py-4 px-4 bg-dark">
        <Form>
      <Form.Group className="mb-3 bg-dark" controlId="formBasicEmail">
        <Form.Label>Usuario {" "}
            {!validateName(name) && !firstName && (
              <span className="text-danger">Debe llenar este campo</span>
            )}</Form.Label>
        <Form.Control value={name} onChange={(e) => setName(e.target.value)} onBlur={() => setFirstName(false)}  className="p-3" type="text" placeholder="JavaSports" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña  {" "}
            {!validatePass(pass) && !firstPass && (
              <span className="text-danger">Debe llenar este campo</span>
            )}</Form.Label>
        <Form.Control value={pass} onChange={(e) => setPass(e.target.value)} onBlur={() => setFirstPass(false)} className="p-3" type="password" placeholder="***** JavaSports *****" />
      </Form.Group>
      <Form.Text className="text-danger">
        <Link to="/PassRecovery" onClick={handleClose} className="modal_styles" >Olvidé mi contraseña</Link>
        </Form.Text>
    </Form>
        </Modal.Body>
          <Button className="m-auto px-5 mb-5" size="lg"  type="submit" variant="danger" onClick={(e) => handleValidation(e)}>
            <h4 className="m-auto py-1 px-4">Iniciar</h4>
          </Button>
        
      </Modal>
    </>
  )
}

export default LoginModal