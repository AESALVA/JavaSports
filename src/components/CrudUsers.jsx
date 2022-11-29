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
}) => {
  // estado para usuario
  const [nameUser, setNameUser] = useState();
  const [mailUser, setMailUser] = useState();
  const [roleUser, setRoleUser] = useState();
  const [editableFields, seteditableFields] = useState(true);
  const [password, setPassword] = useState();
  // Plantilla user
  const user = { user: "", mail: "", password: "", role: "" };

  // cuando levanto el modal deshabilito todos los campos y cargo estados de los input
  useEffect(() => {
    action === "new" ? seteditableFields(false) : seteditableFields(true);
    setNameUser(info.name);
    setMailUser(info.mail);
    setRoleUser(info.role);
    setPassword(info.password);
  }, [showModal]);

  const updateUser = () => {
    setActionAMB("Modificar");
    seteditableFields(false); //habilito input;
  };

  const deleteUser = () => {
    seteditableFields(true); //habilito input;
    setActionAMB("Eliminar");
  };

  const confirmDelete = () => {
    //eliminar noticia por id
    fetch(`https://java-sports-back.vercel.app/users/delete/${nameUser}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };

  const confirmUpdate = () => {
    fetch(`https://java-sports-back.vercel.app/users/update/${nameUser}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nameUser,
        mail: mailUser,
        password: info.password,
        role: roleUser,
      }),
    });
  };
  const confirmNewUser = () => {
    user.name = nameUser;
    user.mail = mailUser;
    user.password = password;
    user.role = roleUser;

    fetch(`https://java-sports-back.vercel.app/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
  };

  const confirmNews = () => {
    if (action === "new") {
      confirmNewUser();
    } else {
      if (action === "Modificar") {
        confirmUpdate();
      } else {
        confirmDelete();
      }
    }
    handleClose(); //cerrar el modal
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
          <h5>JavaSports</h5>
          {action !== "new" && (
            <div id="header-btn">
              <Button
                variant="sm"
                className="mx-1 btn-news"
                onClick={() => updateUser()}
              >
                <FontAwesomeIcon icon={faPen} />
              </Button>
              <Button
                variant="sm"
                id="btn-eliminar"
                className="mx-1  btn-news"
                onClick={() => deleteUser()}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </Button>
            </div>
          )}
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formId">
              <Form.Label>Id</Form.Label>
              <Form.Control
                maxLength="40"
                className="p-2"
                type="text"
                placeholder="Id"
                disabled
                value={info._id}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Usuario </Form.Label>
              <Form.Control
                maxLength="40"
                className="p-2"
                type="text"
                placeholder="JavaSports"
                value={nameUser}
                disabled={editableFields}
                onChange={(e) => setNameUser(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control
                maxLength="40"
                className="p-2"
                type="Email"
                placeholder="Java@Sports.com"
                value={mailUser}
                disabled={editableFields}
                onChange={(e) => setMailUser(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRole">
              <Form.Label>Rol</Form.Label>
              <Form.Select
                aria-label="Seleccionar rol"
                disabled={editableFields}
                value={roleUser}
              >
                {view !== "administrativeStaff" && (
                  <option className="text-dark" value="2">
                    Usuario
                  </option>
                )}
                <option className="text-dark" value="1">
                  Administrador
                </option>
              </Form.Select>
            </Form.Group>
            {view === "administrativeStaff" && (
              <Form.Group className="mb-3" controlId="formId">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  maxLength="40"
                  className="p-2"
                  type="text"
                  placeholder="Contraseña"
                  disabled={editableFields}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {action !== "display" && (
            <Button
              className="btn-gray btn-gray-border"
              onClick={() => confirmNews()}
            >
              {action !== "new" ? action : "Confirmar"}
            </Button>
          )}
          <Button className="btn-gray btn-gray-border" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CrudUsers;
