import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/resetPassword.css";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import { useEffect } from "react";
import Loader from "./Loader";


function ResetPassword() {
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
      validator.matches(n, "^[a-zA-Z0-9]*$") &&
      validator.isLength(n, { min: 8, max: 20 }) &&
      validator.isStrongPassword(n,{ minLength: 8, minLowercase: 1, minUppercase: 1, 
        minNumbers: 1, minSymbols: 0, returnScore: false, 
        pointsPerUnique: 1, pointsPerRepeat: 0.5, 
        pointsForContainingLower: 10, pointsForContainingUpper: 10, 
        pointsForContainingNumber: 10, pointsForContainingSymbol: 10 })
    );
  };

  const validateToken = (n) => {
    return (
      validator.matches(n, "^[a-zA-Z0-9]*$") &&
      validator.isLength(n, { min: 8, max: 50 }) &&
      validator.isStrongPassword(n,{ minLength: 8, minLowercase: 1, minUppercase: 0, 
        minNumbers: 1, minSymbols: 0, returnScore: false, 
        pointsPerUnique: 1, pointsPerRepeat: 0.5, 
        pointsForContainingLower: 10, pointsForContainingUpper: 10, 
        pointsForContainingNumber: 10, pointsForContainingSymbol: 10 })
    );
  };

  const HandleClick = async ()=>{
if(validatePassword(password) && validatePassword(repeatPassword) && validateToken(token) ){
  await fetch(  
    `https://java-sports-back.vercel.app/users/resetPassword/${token}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode:"cors",
      body: JSON.stringify({password:password,confirmPassword:repeatPassword}),
    }
  )
    .then((res) => res.json())
    .then((json)=>{json.message === 'passwords not match'?setMessage("Debe completar correctamente el formulario") :setMessage("Contraseña actualizada con éxito !")})
    .catch((error)=>setMessage("Oops algo salió mal, intente de nuevo"));
    
}else{
  setMessage("Debe completar correctamente el formulario");
}
  }

useEffect(() => {
  setMessage("")
}, [password,repeatPassword,token])



  return (
    <Container className="resetContainer p-5">
      <h2>Formulario para restablecer contraseña </h2>
      <p>La nueva contraseña debe contar con al menos :</p>
      <ul>
        <li> Una letra mayúscula.</li>
        <li> Una letra minúscula.</li>
        <li>Tener entre 8 y 20 caracteres.</li>
      </ul>
      <div className="inputs">
        <FloatingLabel controlId="floatingInput" label="Nueva Contraseña">
          <Form.Control
          className="bg-dark"
            type="text"
            placeholder="Contraseña"
            maxLength="20"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setFirstPass(false)}
          />
          {!validatePassword(password) && !firstPass && (
            <span className="message">Contraseña incorrecta</span>
          )}
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Repetir Contraseña">
          <Form.Control
            className="bg-dark"
            type="text"
            placeholder="Repetir Contraseña"
            maxLength="20"
            required
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            onBlur={() => setSecondPass(false)}
          />
          {password !== repeatPassword && !secondPass && (
            <span className="message">Las contraseñas deben coincidir</span>
          )}
        </FloatingLabel>
        <FloatingLabel controlId="floatingToken" label="Clave Token">
          <Form.Control
            type="text"
            className="bg-dark"
            placeholder="Clave Token"
            maxLength="60"
            required
            value={token}
            onChange={(e) => setToken(e.target.value)}
            onBlur={() => setFirstToken(false)}
          />
          {!validateToken(token) && !firstToken && (<span className="message">Clave Token incorrecta</span>)}
        </FloatingLabel>
      </div>
      <Button
        className="btnConfirm m-5 mx-auto"
        onClick={() => HandleClick()}
        size="lg"
      >
        Enviar
      </Button>
      <span className="message mx-auto">{message}</span>
    </Container>
  );
}

export default ResetPassword;
