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

const CrudNews = ({ info, view, action, showModal, handleClose }) => {
  //   estados para noticia
  const [titleNews, setTitleNews] = useState();

  const [categoryNews, setcategoryNews] = useState();
  const [importantNews, setimportantNews] = useState();
  const [descriptionNews, setDescriptionNews] = useState();
  const [synopsisNews, setSynopsisNews] = useState();
  const [imgNews, setImgNews] = useState();
  const [imgTwoNews, setImgTwoNews] = useState();

  return (
    <>
      <Modal
        show={showModal}
        onHide={handleClose}
        id="modalCRUD_News"
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
            <Form.Group className="mb-3" controlId="formTitleNew">
              <Form.Label>Titulo noticia </Form.Label>
              <Form.Control
                maxLength="40"
                className="p-2"
                type="text"
                placeholder="Titulo"
                value={info.title}
                onChange={(e) => setTitleNews(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCategories">
              <Form.Label>Categoria</Form.Label>
              <Form.Select aria-label="Seleccionar categoria">
                <option className="text-dark" value="1">
                  Fútbol
                </option>
                <option className="text-dark" value="2">
                  Hockey
                </option>
                <option className="text-dark" value="3">
                  Tenis
                </option>
                <option className="text-dark" value="4">
                  Boxeo
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDestacada">
              <Form.Label>¿Destacada?</Form.Label>
              <Form.Select aria-label="Elegir opción">
                <option className="text-dark" value="false">
                  No
                </option>
                <option className="text-dark" value="true">
                  Si
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Descripción </Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                maxLength="100"
                className="p-2"
                type="text"
                placeholder="Descripción"
                required
                value={info.description}
                onChange={(e) => setDescriptionNews(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSynopsis">
              <Form.Label>Sinopsis</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                maxLength="100"
                className="p-2"
                type="text"
                placeholder="Synopsis"
                value={info.synopsis}
                onChange={(e) => setSynopsisNews(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImg1">
              <Form.Label>Imagen 1</Form.Label>
              <Form.Control
                maxLength="40"
                className="p-2"
                type="text"
                placeholder="Ingresar url de imagen"
                value={info.img}
                onChange={(e) => setImgNews(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImg2">
              <Form.Label>Imagen 2 </Form.Label>
              <Form.Control
                maxLength="40"
                className="p-2"
                type="text"
                placeholder="Ingresar url de imagen"
                value={info.imgTwo}
                onChange={(e) => setImgTwoNews(e.target.value)}
              />
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

export default CrudNews;
