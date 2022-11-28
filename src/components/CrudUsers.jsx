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

const CrudUsers = ({ info, view, action, showModal, handleClose }) => {
  // estado para usuario
  const [nameUser, setNameUser] = useState(info.name);
  const [mailUser, setMailUser] = useState(info.mail);
  const [roleUser, setRoleUser] = useState(info.role);

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
              {view === "news" && (
                <Button variant="sm" className="mx-1 btn-news">
                  <FontAwesomeIcon icon={faStar} />
                </Button>
              )}
              <Button variant="sm" className="mx-1 btn-news">
                <FontAwesomeIcon icon={faPen} />
              </Button>
              <Button variant="sm" id="btn-eliminar" className="mx-1  btn-news">
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
                onChange={(e) => setMailUser(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRole">
              <Form.Label>Rol</Form.Label>
              <Form.Select aria-label="Seleccionar rol">
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-gray btn-gray-border" onClick={handleClose}>
            Confirmar
          </Button>
          <Button className="btn-gray btn-gray-border" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CrudUsers;
