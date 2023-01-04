import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../styles/resetPassword.css";
import Container from "react-bootstrap/Container";
import { useState } from 'react';


const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  
  return (
      <Container className="resetContainer p-5">
        <h2>Formulario para restablecer contraseña </h2>
        <p>La nueva contraseña debe contar con al menos :</p>
        <ul>
          <li> Una letra mayúscula.</li>
          <li> Una letra minúscula.</li>
          <li>Tener entre 8 y 20 caracteres.</li>
        </ul>
          <FloatingLabel
            controlId="floatingInput"
            label="Nueva Contraseña"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Contraseña" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Repetir Contraseña">
            <Form.Control type="text" placeholder="Contraseña" />
          </FloatingLabel>
          <Button className='btnConfirm m-5 mx-auto' size='lg' >
            Enviar
          </Button>
        </Container>
      )
    }
  






export default ResetPassword