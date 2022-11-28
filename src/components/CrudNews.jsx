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

const CrudNews = ({
  info,
  view,
  action,
  setActionAMB,
  showModal,
  handleClose,
}) => {
  //   estados para noticia
  const [titleNews, setTitleNews] = useState();
  const [categoryNews, setcategoryNews] = useState();
  const [importantNews, setimportantNews] = useState();
  const [descriptionNews, setDescriptionNews] = useState();
  const [synopsisNews, setSynopsisNews] = useState();
  const [imgNews, setImgNews] = useState();
  const [imgTitleNews, setImgTitleNews] = useState();
  const [imgTwoNews, setImgTwoNews] = useState();
  const [editableFields, seteditableFields] = useState(true);

  // plantilla de noticias:
  let news = {
    categories: "",
    title: "",
    img: "",
    imgTitle: "",
    description: "",
    imgTwo: "",
    synopsis: "",
    important: "",
    categoryId: "",
  };

  const updateNews = () => {
    // cuando presiono update me habilita los campos
    seteditableFields(false);
    setActionAMB("Modificar noticia");
  };
  const deleteNews = () => {
    seteditableFields(true);
    setActionAMB("Eliminar noticia");
  };

  const categoryName = () => {
    let name = "";
    // segun la categoria que elija en el input  me carga el nombre segun el còdigo indentificatorio.
    switch (categoryNews) {
      case "1":
        name = "football";
        break;
      case "2":
        name = "hockey";
        break;
      case "3":
        name = "tennis";
        break;
      case "4":
        name = "box";
        break;
    }
    return name;
  };

  const confirmNews = () => {
    news.categories = categoryName();
    news.title = titleNews;
    news.img = imgNews;
    news.imgTitle = imgTitleNews;
    news.description = descriptionNews;
    news.imgTwo = imgTwoNews;
    news.synopsis = synopsisNews;
    news.important = importantNews;
    news.categoryId = categoryNews;

    if (action === "new") {
      fetch(`https://java-sports-back.vercel.app/articles/new`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          news,  // YA HACE EL POST DE NEWS PERO NO LE PASA NINGUNA PROPIEDAD, XQ?
        }),
      });
      console.log("presiono confirmar en modo new");
    } else {
      //display para update. YA FUNCIONA EL PUT ! Modifique el titulo de la noticia primera de gabriel jesus
      fetch(`https://java-sports-back.vercel.app/articles/update/${info._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          categories: categoryName(),
          title: titleNews,
          img: imgNews,
          imgTitle: imgTitleNews,
          description: descriptionNews,
          imgTwo: imgTwoNews,
          synopsis: synopsisNews,
          important: importantNews,
          categoryId: categoryNews,
        }),
      });
      console.log("presiono confirmar en modo display");
      console.log(news.title);
    }
    handleClose();
  };

  // cuando levanto el modal deshabilito todos los campos y cargo estados de los input
  useEffect(() => {
    action === "new" ? seteditableFields(false) : seteditableFields(true);
    setTitleNews(info.title);
    setcategoryNews(info.categoryId);
    setimportantNews(info.important);
    setDescriptionNews(info.description);
    setSynopsisNews(info.synopsis);
    setImgNews(info.img);
    setImgTwoNews(info.imgTwo);
    setImgTitleNews(info.imgTitle);
  }, [showModal]);

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
                <Button variant="sm" className="mx-1 btn-news btn-select">
                  <FontAwesomeIcon icon={faStar} />
                </Button>
              )}
              <Button
                variant="sm"
                className="mx-1 btn-news btn-select"
                onClick={() => updateNews()}
              >
                <FontAwesomeIcon icon={faPen} />
              </Button>
              <Button
                variant="sm"
                id="btn-eliminar"
                className="mx-1  btn-news btn-select"
                onClick={() => deleteNews()}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </Button>
            </div>
          )}
        </Modal.Header>
        <Modal.Body>
          <h6 className="text-dark text-center mb-3">{`Accion: ${action}`}</h6>
          <Form>
            <Form.Group className="mb-3" controlId="formId">
              <Form.Label>Id</Form.Label>
              <Form.Control
                maxLength="40"
                className="p-2"
                type="text"
                placeholder="Id"
                value={info._id}
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTitleNew">
              <Form.Label>Titulo noticia </Form.Label>
              <Form.Control
                maxLength="40"
                className="p-2"
                type="text"
                placeholder="Titulo"
                value={titleNews}
                onChange={(e) => setTitleNews(e.target.value)}
                disabled={editableFields}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTitleImg">
              <Form.Label>Titulo de Imagen principal </Form.Label>
              <Form.Control
                maxLength="40"
                className="p-2"
                type="text"
                placeholder="Titulo de imagen principal"
                value={imgTitleNews}
                onChange={(e) => setImgTitleNews(e.target.value)}
                disabled={editableFields}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCategories">
              <Form.Label>Categoria</Form.Label>
              <Form.Select
                aria-label="Seleccionar categoria"
                disabled={editableFields}
              >
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
            <Form.Group
              className="mb-3"
              controlId="formDestacada"
              disabled={editableFields}
            >
              <Form.Label>¿Destacada?</Form.Label>
              <Form.Select aria-label="Elegir opción" disabled>
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
                minLength="20"
                maxLength="500"
                className="p-2"
                type="text"
                placeholder="Descripción"
                required
                value={descriptionNews}
                onChange={(e) => setDescriptionNews(e.target.value)}
                disabled={editableFields}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSynopsis">
              <Form.Label>Sinopsis</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                minLength="20"
                maxLength="200"
                className="p-2"
                type="text"
                placeholder="Synopsis"
                value={synopsisNews}
                onChange={(e) => setSynopsisNews(e.target.value)}
                disabled={editableFields}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImg1">
              <Form.Label>Imagen 1 (Principal)</Form.Label>
              <Form.Control
                maxLength="40"
                className="p-2"
                type="text"
                placeholder="Ingresar url de imagen"
                value={imgNews}
                onChange={(e) => setImgNews(e.target.value)}
                disabled={editableFields}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImg2">
              <Form.Label>Imagen 2 </Form.Label>
              <Form.Control
                maxLength="40"
                className="p-2"
                type="text"
                placeholder="Ingresar url de imagen"
                value={imgTwoNews}
                onChange={(e) => setImgTwoNews(e.target.value)}
                disabled={editableFields}
              />
            </Form.Group>
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

export default CrudNews;

// PENDIENTES:
// BOTON ELIMINAR . BOTON DESTACADAA - SACARLO DE ARRIBA Y HABILITAR INPUT , si cambia el valor a SI .->
// analizar si es posible segun la logica que planteamos con eduardo.
// FALTA EL BUSCADOR - Y REPLICAR LOGICA DE CRUDNEWS a CRUDUsers.
// falta testear si funciona con la api - falta validaciones en el input.
