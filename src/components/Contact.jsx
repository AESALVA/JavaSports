import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import validator from "validator";
import "../styles/Contact.css";
import "../styles/styles.css";

const Contacto = (n) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [text, setText] = useState("");
  const [firstName, setFirstName] = useState(true);
  const [firstLastname, setFirstLastname] = useState(true);
  const [firstMail, setFirstMail] = useState(true);
  const [firstText, setFirstText] = useState(true);

  const ValidateName = (n) => {
    return (
      validator.matches(n, "^[a-zA-Z ]*$") &&
      validator.isLength(n, { min: 5, max: 36 })
    );
  };
  const ValidateLastname = (l) => {
    return (
      validator.matches(l, "^[a-zA-Z ]*$") &&
      validator.isLength(l, { min: 5, max: 36 })
    );
  };
  const ValidateMail = (m) => {
    return (
      validator.isLength(m, { min: 5, max: 36 }) &&
      validator.isEmail(m, {
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
  const ValidateText = (t) => {
    return (
      validator.matches(t, "^[a-zA-Z0-9 ]*$") &&
      validator.isLength(t, { min: 5, max: 185 })
    );
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  useEffect(() => {}, [name, lastname, mail, text]);

  return (
    <div className="container-fluid px-0 main-container d-flex flex-column">
      {/* Primer columna */}
      <div className="imgbanner"></div>
      {/* 2 columna */}
      <div className="d-flex flex-column pt-5">
        <h2 className="text-center titulo-aboutus">Contáctanos!</h2>
        {/* Fomulario */}
        <div className="d-flex justify-content-center px-0">
          <Form id="formulario">
            <Row className="mb-2 mt-2">
              <div className="row"></div>
              <Form.Group
                as={Col}
                className="mb-3 col-12 col-md-6"
                controlId="formNombre"
              >
                <Form.Label>
                  Nombre
                  {!ValidateName(name) && !firstName && (
                    <span className="text-danger ms-3">Error</span>
                  )}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su nombre"
                  onInput={(e) => setName(e.target.value)}
                  onBlur={() => setFirstName(false)}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                className="mb-3 col-12 col-md-6"
                controlId="formApellido"
              >
                <Form.Label>
                  Apellido
                  {!ValidateLastname(lastname) && !firstLastname && (
                    <span className="text-danger ms-3">Error</span>
                  )}{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su apellido"
                  onInput={(e) => setLastname(e.target.value)}
                  onBlur={() => setFirstLastname(false)}
                ></Form.Control>
              </Form.Group>
            </Row>
            <Form.Group as={Col} className="mb-3 col-12" controlId="formEmail">
              <Form.Label>
                Email
                {!ValidateMail(mail) && !firstMail && (
                  <span className="text-danger ms-3">
                    Error, formato incorrecto!
                  </span>
                )}
              </Form.Label>
              <Form.Control
                type="Email"
                placeholder="Ingrese su correo electronico"
                onInput={(e) => setMail(e.target.value)}
                onBlur={() => setFirstMail(false)}
              />
            </Form.Group>
            <Row>
              <Form.Group
                as={Col}
                className="mb-3 col-12"
                controlId="formComment"
              >
                <Form.Label>
                  Mensaje
                  {!ValidateText(text) && !firstText && (
                    <span className="text-danger ms-3">Error</span>
                  )}{" "}
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Ingrese su correo mensaje"
                  onInput={(e) => setText(e.target.value)}
                  onBlur={() => setFirstText(false)}
                />
              </Form.Group>
            </Row>
            <div className="d-flex justify-content-center align-items-center">
              <Button
                className="btn-dark btn-gray-border px-5 mt-3 w-100"
                size="lg"
                type="submit"
                onClick={(e) => handleClick(e)}
              >
                <h4 className=" m-auto py-1 px-4">Enviar</h4>
              </Button>
            </div>
          </Form>
        </div>
        {/* MAPA */}
        <div className="container-fluid px-0 pb-5 pt-3">
          <h4 className="titulo-aboutus text-center my-4">
            Nuestra ubicacion!
          </h4>
          <div className="container-fluid d-flex justify-content-center mb-5 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.102370777448!2d-65.20939048436118!3d-26.836696096503207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1669045414605!5m2!1ses-419!2sar"
              width="500"
              height="300"
              className="mapa"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contacto;
