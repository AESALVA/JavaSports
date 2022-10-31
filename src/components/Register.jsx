import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import {Link, useNavigate} from "react-router-dom";
import ModalDialog from 'react-bootstrap/ModalDialog';
import { useEffect } from 'react';
import validator from 'validator';


const Register = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const navigate = useNavigate();


    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [firstName, setFirstName] = useState(true);
    const [firstMail, setFirstMail] = useState(true);
    const [firstPass, setFirstPass] = useState(true);
    const validateName = (n) => {
      return (
        validator.matches(n, "^[a-zA-Z ]*$") && validator.isLength(n, {min: 5, max: 36})
      );
    };
    const validateMail = (n) => {
      return (
        validator.matches(n, "^[a-zA-Z ]*$") && validator.isLength(n, {min: 5, max: 36}) && validator.isMail(n, {allow_display_name: false, require_display_name: false, allow_utf8_local_part: true, require_tld: true, allow_ip_domain: false, domain_specific_validation: false, blacklisted_chars: '', host_blacklist: []})
      );
    };
    const validatePass = (n) => {
      return (
        validator.matches(n, "^[a-zA-Z ]*$") && validator.isLength(n, {min: 8, max: 20,minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1})
      );
    };

    useEffect(() => {}, [name, pass,mail]);
  return (
    <>
      

      <Modal show={show} onHide={handleClose} contentClassName="bg-dark">
        <Modal.Header className="border-danger bg-dark">
          <Link className="mx-auto" to="/"><img className="bg-dark logo" src="/img/LogoJS.jpg"width="100"height="100"/></Link>
        </Modal.Header>
        <h2 className="mx-auto mt-5">Registrarse</h2>
        <Modal.Body className="mb-3 py-4 px-4 bg-dark">
        <Form>
      <Form.Group className="mb-3 bg-dark" controlId="formName">
        <Form.Label>Usuario</Form.Label>
        <Form.Control value={name} onInput={(e) => setName(e.target.value)} className="p-3" type="text" placeholder="JavaSports" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control value={mail} onInput={(e) => setMail(e.target.value)} className="p-3" type="Email" placeholder="Java@Sports.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control value={pass} onInput={(e) => setPass(e.target.value)} className="p-3" type="password" placeholder="***** JavaSports *****" />
      </Form.Group>
      
    </Form>
        </Modal.Body>
        <Button className="m-auto px-5 mb-5" size="lg"  type="submit" variant="danger" onClick={()=>console.log("hola")}>
            <h4 className="m-auto py-1 px-4">Registrarme</h4>
          </Button>
      </Modal>
    </>
  )
}

export default Register