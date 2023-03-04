import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useEffect } from "react";
import validator from "validator";
import Swal from "sweetalert2";
import "../styles/Contact.css";
import "../styles/styles.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contacto = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [text, setText] = useState("");
  const [firstName, setFirstName] = useState(true);
  const [firstLastname, setFirstLastname] = useState(true);
  const [firstMail, setFirstMail] = useState(true);
  const [firstText, setFirstText] = useState(true);
  const form = useRef();

  // Estado para las validaciones
  let patron = /\w+\s\w+\s?.+/; //patron para las descripciones
  // Inicializo variables que cargan mensaje de error:
  const [errorName, setErrorName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorMsj, setErrorMsj] = useState("");

  const validateName = (n) => {
    return (
      validator.matches(n, "^[a-zA-Z ]*$") &&
      validator.isLength(n, { min: 3, max: 30 })
    );
  };
  const validateLastname = (l) => {
    return (
      validator.matches(l, "^[a-zA-Z ]*$") &&
      validator.isLength(l, { min: 3, max: 30 })
    );
  };
  const validateMail = (m = "prueba@gmail") => {
    return (
      validator.isLength(m, { min: 10, max: 60 }) &&
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

  const validateText = (t = "hol") => {
    return patron.test(t) && validator.isLength(t, { min: 5, max: 600 });
  };

  const loadErrors = () => {
    // ERROR NOMBRE
    if (!validateName(name)) {
      //Si hay error en el nombre, me fijo cual error es
      !validator.matches(name, "^[a-zA-Z ]*$")
        ? setErrorName("Debe ingresar caracteres de la A-Z.")
        : setErrorName("El nombre debe contener entre 3 y 30 caracteres.");
    }

    // ERROR APELLIDO
    if (!validateLastname(lastname)) {
      //Si hay error en el nombre, me fijo cual error es
      !validator.matches(lastname, "^[a-zA-Z ]*$")
        ? setErrorLastName("Debe ingresar caracteres de la A-Z.")
        : setErrorLastName(
            "El apellido debe contener entre 3 y 30 caracteres."
          );
    }
    // ERROR EMAIL
    if (!validateMail(mail)) {
      !validator.isEmail(mail, {
        allow_display_name: false,
        require_display_name: false,
        allow_utf8_local_part: true,
        require_tld: true,
        allow_ip_domain: false,
        domain_specific_validation: false,
        blacklisted_chars: "",
        host_blacklist: [],
      })
        ? setErrorMail("Email invalido")
        : setErrorMail("El email debe contener entre 10 y 60 caracteres.");
    }
    // ERROR MENSAJE
    if (!validateText(text)) {
      !validator.isLength(text, { min: 10, max: 600 })
        ? setErrorMsj("Su mensaje debe contener entre  10 y 600 caracteres.")
        : setErrorMsj(
            "Su mensaje debe contener caracteres de la A-Z, números y signos de puntuación si desea."
          );
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (
      validateName(name) &&
      validateMail(mail) &&
      validateLastname(lastname) &&
      validateText(text)
    ) {
      emailjs.sendForm(
        "service_6te7sr6",
        "template_wo5g1cg",
        form.current,
        "ugkrjxlh9YCbw85u7"
      );
      Swal.fire({
        title: "JavaSports",
        text: "Su mensaje ha sido enviado!",
        icon: "success",
        iconColor: "#413f4a",
        width: "20rem",
        confirmButtonColor: "#413f4a",
      });
      setName("");
      setLastname("");
      setMail("");
      setText("");
      setFirstName(true);
      setFirstMail(true);
      setFirstLastname(true);
      setFirstText(true);
    } else {
      // Cargar mensajes de error en el campo erroneo
      loadErrors();
      setFirstName(false);
      setFirstMail(false);
      setFirstLastname(false);
      setFirstText(false);
    }
  };

  useEffect(() => {}, [name, lastname, mail, text]);

  return (
    <div className="container-fluid px-0 main-container d-flex flex-column">
      {/* 1 columna */}
      <div className="d-flex flex-column pt-5">
        {/* Fomulario */}
        <h3 className="text-center titulo-aboutus mt-4">Contáctanos!</h3>
        <div className="d-flex justify-content-center px-0">
          <Form onSubmit={handleClick} ref={form} id="formulario">
            <Row className="my-2">
              <Form.Group
                as={Col}
                className="mb-3 col-12 col-md-6"
                controlId="formNombre"
              >
                <Form.Label>
                  Nombre
                  {!validateName(name) && !firstName && (
                    <span className="text-danger ms-3">{errorName}</span>
                  )}
                </Form.Label>
                <Form.Control
                  as="input"
                  type="text"
                  placeholder="Ingrese su nombre"
                  onInput={(e) => setName(e.target.value)}
                  name="name"
                  value={name}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                className="mb-3 col-12 col-md-6"
                controlId="formApellido"
              >
                <Form.Label>
                  Apellido
                  {!validateLastname(lastname) && !firstLastname && (
                    <span className="text-danger ms-3">{errorLastName}</span>
                  )}{" "}
                </Form.Label>
                <Form.Control
                  as="input"
                  type="text"
                  placeholder="Ingrese su apellido"
                  onInput={(e) => setLastname(e.target.value)}
                  name="lastname"
                  value={lastname}
                ></Form.Control>
              </Form.Group>
            </Row>
            <Form.Group as={Col} className="mb-3 col-12" controlId="formEmail">
              <Form.Label>
                Email
                {!validateMail(mail) && !firstMail && (
                  <span className="text-danger ms-3">{errorMail}</span>
                )}
              </Form.Label>
              <Form.Control
                as="input"
                type="Email"
                placeholder="Ingrese su email"
                onInput={(e) => setMail(e.target.value)}
                name="mail"
                value={mail}
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
                  {!validateText(text) && !firstText && (
                    <span className="text-danger ms-3">{errorMsj}</span>
                  )}{" "}
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Su mensaje debe contener caracteres de la A-Z, números y signos de puntuación si desea."
                  onInput={(e) => setText(e.target.value)}
                  name="text"
                  value={text}
                />
              </Form.Group>
            </Row>
            <div className="d-flex justify-content-center align-items-center">
              <Button
                className="btn-dark btn-gray-border  mt-3 w-100 p-1"
                size="lg"
                type="submit"
              >
                <h4 className=" m-auto py-1 px-4">Enviar</h4>
              </Button>
            </div>
          </Form>
        </div>
        {/* MAPA */}
        <div className="container-fluid px-0 pb-5 pt-3">
          <h4 className="titulo-aboutus text-center my-4">Nuestra ubicación</h4>
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
