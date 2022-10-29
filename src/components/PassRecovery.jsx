import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import {Link, useNavigate} from "react-router-dom";
import ModalDialog from 'react-bootstrap/ModalDialog';
import Footer from './Footer';




const PassRecovery = () => {
    const [show, setShow] = useState(true);

  return (
    <div className=' d-none d-xl-block border-0 mx-auto '>
        <img className='FondoPass' src='/img/FondoPass.jpg' />
    <Modal show={show} contentClassName="bg-black ModalPass">
        <Modal.Header className="border-danger bg-black">
          <Link className="mx-auto" to="/"><img className="bg-dark logo" src="/img/LogoJS.jpg"width="100"height="100"/></Link>
        </Modal.Header>
        <h4 className="mx-auto mt-5">¿ No recuerdas tu contraseña ?</h4>
        <h5 className="mx-auto pt-2">¡ No te preocupes !</h5>
        <Modal.Body className="mb-3 py-4 px-4 bg-black">
        <Form>
      <Form.Group className="my-5" controlId="formBasicPassword">
        <h6 className='text-center pb-5'>Ingresa tu Email y te ayudaremos</h6>
        <Form.Label>Email</Form.Label>
        <Form.Control  className="p-3" type="email" placeholder="Java@Sports.com" />
      </Form.Group>
     
      
    </Form>
        </Modal.Body>
        <Button className="mx-auto px-5 my-5" size="lg"  type="submit" variant="outline-dark" onClick={()=>console.log("hola")}>
            <h4 className="m-auto py-2 px-4">Recuperar Contraseña</h4>
          </Button>
      </Modal>
      </div>
  )
}

export default PassRecovery