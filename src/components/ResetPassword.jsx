import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../styles/error404.css";



const ResetPassword = () => {
  
  return (
      <div className="container-400">
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
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </div>
      )
    }
  






export default ResetPassword