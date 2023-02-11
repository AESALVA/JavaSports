import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import validator from "validator";
import { CloseButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../styles/management.css";

const CrudUsers = ({
  info,
  view,
  action,
  setActionAMB,
  showModal,
  handleClose,
  messages,
  confirmDELUsers,
  confirmINS_Users,
}) => {
  // estado para usuario
  // const [idUsers, setIdUsers] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [mailUser, setMailUser] = useState("");
  const [roleUser, setRoleUser] = useState("");
  const [editableFields, seteditableFields] = useState(true);
  // Plantilla user
  const user = { name: "", password: "", role: "", mail: "" };

  // Estados para las validaciones
  const [user_validate, setUser_validate] = useState(true);
  const [userMail_validate, setUserMail_validate] = useState(true);
  let patron = /\w+\S?\w+\S?.+/; //patron para las descripciones

  const [newUser, setNewUser] = useState("");

  // cuando levanto el modal deshabilito todos los campos y cargo estados de los input
  useEffect(() => {
    action === "new" ? seteditableFields(false) : seteditableFields(true);
    setNameUser(info.name);
    setMailUser(info.mail);
    setRoleUser(info.role);
    setUser_validate(true);
    setUserMail_validate(true);
  }, [showModal]);

  const updateUser = () => {
    setActionAMB("Modificar");
    seteditableFields(false); //habilito input;
  };

  const deleteUser = () => {
    seteditableFields(true); //habilito input;
    setActionAMB("Eliminar");
  };

  // FUNCIONES PARA VALIDAR FORMULARIO:
  const validateUser = (n = "hol") => {
    let sinEspacios = n.indexOf(" ") === -1; //valida que el user no tenga espacios
    return (
      patron.test(n) &&
      validator.isLength(n, { min: 3, max: 50 }) &&
      sinEspacios
    );
  };

  const validateMail = (m = "prueba@gmail") => {
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

  const confirmDelete = () => {
    //eliminar usuario por propiedad name, si o si se debe pasar el body para que no borre nunca el "admin"
    confirmDELUsers(nameUser);
    user.name = nameUser;
    user.role = roleUser;
    user.mail = mailUser;
    user.password = "";

    if (!info._id) {
      fetch(`https://java-sports-back.vercel.app/users/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      })
        .then((res) => res.json())
        .then((json) =>
          fetch(`https://java-sports-back.vercel.app/users/delete/${json}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(info),
          })
        )
        .catch((error) => console.log(error));
    }
    messages("El usuario ha sido eliminado!", "success");
    handleClose();
  };

  const confirmUpdate = async () => {
    if (!info._id) {
      await fetch(`https://java-sports-back.vercel.app/users/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      })
        .then((res) => res.json())
        .then((json) =>
          fetch(`https://java-sports-back.vercel.app/users/update/${json}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: nameUser,
              mail: mailUser,
              role: roleUser,
            }),
          })
        )
        .catch((error) => console.log(error));


    // actualizar frontEnd.
    info.name = nameUser;
    info.role = roleUser;
    info.mail = mailUser;

    messages("El usuario se actualizó con éxito!", "success");
    handleClose();
  }}

  const confirmNewUser = () => {
    user.name = nameUser;
    user.password = "JavaSports1234"; //tirar mensaje de cambio de password.
    user.role = "user";
    user.mail = mailUser;
    confirmINS_Users(user); //Actualizo el frontEnd

    fetch(`https://java-sports-back.vercel.app/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    messages("El usuario se registró con éxito!", "success");
  };

  const confirmINS_UPD = () => {
    switch (action) {
      case "new":
        confirmNewUser();
        break;
      case "Modificar":
        confirmUpdate();

        break;
    }
    handleClose();
  };

  const confirmUsers = () => {
    if (action === "Eliminar") {
      confirmDelete();
    } else {
      // Validación de formulario para INS o UPD
      if (validateUser(nameUser) && validateMail(mailUser)) {
        confirmINS_UPD();
      } else {
        // Tiro mensajes de errores..
        setUser_validate(false);
        setUserMail_validate(false);
      }
    }
  };

  return (
    <>
      <Modal
        show={showModal}
        onHide={handleClose}
        id="modalCRUD_Users"
        className=""
      >
        <Modal.Header className="bg-dark flex-column">
          <CloseButton onClick={handleClose} variant="white" />
          <h5 className="title">JavaSports</h5>
          {action !== "new" && (
            <div id="header-btn">
              <Button
                variant="sm"
                className={
                  action === "Modificar"
                    ? `mx-1 btn-select-active`
                    : `mx-1 btn-select`
                }
                onClick={() => updateUser()}
              >
                <FontAwesomeIcon icon={faPen} />
              </Button>
              <Button
                variant="sm"
                id="btn-eliminar"
                className={
                  action === "Eliminar"
                    ? `mx-1 btn-select-active`
                    : `mx-1 btn-select`
                }
                onClick={() => deleteUser()}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </Button>
            </div>
          )}
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                maxLength="40"
                className="p-2"
                type="text"
                placeholder="JavaSports"
                value={nameUser || ""}
                onChange={(e) => setNameUser(e.target.value)}
                disabled={editableFields}
              />
              {!validateUser(nameUser) && !user_validate && (
                <div className="alert alert-danger p-0" role="alert">
                  Error en el campo "Usuario".
                </div>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control
                maxLength="40"
                className="p-2"
                type="Email"
                placeholder="Java@Sports.com"
                value={mailUser || ""}
                onChange={(e) => setMailUser(e.target.value)}
                disabled={editableFields}
              />
              {!validateMail(mailUser) && !userMail_validate && (
                <div className="alert alert-danger p-0" role="alert">
                  Error en el campo "Email".
                </div>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRole">
              <Form.Label>Rol</Form.Label>
              <Form.Select
                aria-label="Seleccionar rol"
                value={roleUser || ""}
                onChange={(e) => setRoleUser(e.target.value)}
                disabled={editableFields}
              >
                {view !== "administrativeStaff" && (
                  <option className="text-dark" value={roleUser}>
                    {roleUser}
                  </option>
                )}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {action !== "display" && (
            <Button
              className="btn-gray btn-gray-border"
              onClick={() => confirmUsers()}
            >
              {action !== "new" ? action : "Confirmar"}
            </Button>
          )}
          <Button
            className="btn-gray btn-gray-border btn-form"
            onClick={handleClose}
          >
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default CrudUsers;
