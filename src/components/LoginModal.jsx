import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import ModalDialog from 'react-bootstrap/ModalDialog'
import {Link, useNavigate} from "react-router-dom";




const LoginModal = (auth,
  login,
  logout,
  validate,
  setAuth) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        Ingresar
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        contentClassName="bg-dark"
      >
        <Modal.Header className="border-danger bg-dark">
          <img className="mx-auto bg-dark logo" src="/img/LogoJS.jpg"width="100"height="100"/>
        </Modal.Header>
        <h2 className="mx-auto mt-5">Iniciar Sesión</h2>
        <Modal.Body className="mx-auto bg-dark">¿ No tienes cuenta ? Registráte</Modal.Body>
        <Modal.Body className="mb-3 py-4 px-4 bg-dark">
        <Form>
      <Form.Group className="mb-3 bg-dark" controlId="formBasicEmail">
        <Form.Label>Usuario</Form.Label>
        <Form.Control value={name} className="p-3" type="text" placeholder="JavaSports" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control value={pass} className="p-3" type="password" placeholder="***** JavaSports *****" />
      </Form.Group>
      <Form.Text className="text-danger">
        Olvidé mi contraseña
        </Form.Text>
    </Form>
        </Modal.Body>
          <Button className="m-auto px-5 mb-5" size="lg" variant="danger" onClick={handleClose}>
            <h4 className="m-auto py-1 px-4">Iniciar</h4>
          </Button>
        
      </Modal>
    </>
  )
}

export default LoginModal