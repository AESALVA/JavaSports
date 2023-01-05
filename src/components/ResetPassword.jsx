import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../styles/resetPassword.css";
import Container from "react-bootstrap/Container";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";



function ResetPassword  () {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [token, setToken] = useState("");
  const [firstPass, setFirstPass] = useState(true);
  const [secondPass, setSecondPass] = useState(true);
  const [firstToken, setFirstToken] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const validatePassword = (n) => {
    return (
      validator.isLength(n, { min: 8, max: 20 }) &&
      validator.isStrongPassword(n, {
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
      })
    );
  };





  
  return (
      <Container className="resetContainer p-5">
        <h2>Formulario para restablecer contraseña </h2>
        <p>La nueva contraseña debe contar con al menos :</p>
        <ul>
          <li> Una letra mayúscula.</li>
          <li> Una letra minúscula.</li>
          <li>Tener entre 8 y 20 caracteres.</li>
        </ul>
        <div className='inputs'>
          <FloatingLabel
            controlId="floatingInput" label="Nueva Contraseña">
            <Form.Control type="text" placeholder="Contraseña" maxLength="20" required  value={password}
                onChange={(e) => setPassword(e.target.value)} onBlur={() => setFirstPass(false)} />
           <span className='message'>{message}</span>
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Repetir Contraseña">
            <Form.Control type="text" placeholder="Repetir Contraseña" maxLength="20" required value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)} onBlur={() => setSecondPass(false)} />
            <span className='message'>{message}</span>
          </FloatingLabel>
          <FloatingLabel controlId="floatingToken" label="Clave Token">
            <Form.Control type="text" placeholder="Clave Token" maxLength="60" required value={token}
                onChange={(e) => setToken(e.target.value)} onBlur={() => setFirstToken(false)} />
            <span className='message'>{message}</span>
          </FloatingLabel>
          </div>
          <Button className='btnConfirm m-5 mx-auto' onClick={()=>console.log("Enviado")} size='lg' >
            Enviar
          </Button>
        </Container>
      )
    }
  






export default ResetPassword