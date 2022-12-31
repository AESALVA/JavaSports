import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import { CloseButton } from "react-bootstrap";
import "../styles/passRecovery.css"


const PassRecovery = () => {
  const [show, setShow] = useState(true);
  const [mail, setMail] = useState("");
  const [firstMail, setFirstMail] = useState(true);
  const navigate = useNavigate();

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

  const closeModal = () => {
    setShow(false);
    navigate("/");
  };

  const HandleClick = async ()=>{
    await fetch(  
      "https://java-sports-back.vercel.app/users/forgotPassword",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode:"cors",
        body: JSON.stringify({mail:mail}),
      }
    )
      .then((res) => res.json())
      .then((json)=>console.log(json))
      .catch((error)=>console.log(error))

  }

  return (
    <>
      <div className="FondoPass d-xl-block mx-auto">
        <img className="w-100" src="/img/FondoPass.jpg" alt="fondoimg" />
      </div>
      <Modal show={show}  contentClassName="bg-black ModalPass mx-auto">
        <Modal.Header className="border-danger modalHeader bg-black flex-column">
          <CloseButton onClick={() => closeModal()} variant="white" />
          <Link className="mx-auto" to="/">
            <img
              className="bg-dark logotipo"
              src="/img/LogoJS.jpg"
              width="100"
              height="100"
              alt="logo"
            />
          </Link>
        </Modal.Header>
        <h4 className="mx-auto mt-md-5  mt-xs-5">¿ No recuerdas tu contraseña ?</h4>
        <h5 className="mx-auto pt-2">¡ No te preocupes !</h5>
        <Modal.Body className=" modalBody mb-xs-3 py-md-4 py-xs-4 px-4 bg-black">
          <Form>
            <Form.Group className="my-2" controlId="formBasicPassword">
              <h6 className="text-center pb-md-5 pb-xs-5">
                Ingresa tu Email y te ayudaremos
              </h6>
              <Form.Label>
                Email{" "}
                {!validateMail(mail) && !firstMail && (
                  <span className="text-danger ps-2">
                    Debe llenar este campo con su Email
                  </span>
                )}
              </Form.Label>
              <Form.Control
                maxLength="40"
                value={mail}
                onInput={(e) => setMail(e.target.value)}
                onBlur={() => setFirstMail(false)}
                className="p-xs-3 p-md-3"
                type="email"
                placeholder="Java@Sports.com"
              />
            </Form.Group>
          </Form>
          <Button
          className="mx-auto px-xs-5 my-md-5 my-xs-5 btn-gray btn-gray-border"
          size="lg"
          type="submit"
          onClick={() => HandleClick()}
        >
          <h4 className="m-auto py-2 px-4">Enviar</h4>
        </Button>
        </Modal.Body>
        
      </Modal>
    </>
  );
};

export default PassRecovery;
