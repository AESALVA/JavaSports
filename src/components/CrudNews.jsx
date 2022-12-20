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
import "../styles/management.css";

const CrudNews = ({
  article,
  view,
  action,
  setActionAMB,
  showModal,
  handleClose,
}) => {
  //   estados para noticia
  const [idNews, setIdNews] = useState("");
  const [titleNews, setTitleNews] = useState("");
  const [categoryIdNews, setCategoryIdNews] = useState("");
  const [importantNews, setimportantNews] = useState("");
  const [descriptionNews, setDescriptionNews] = useState("");
  const [synopsisNews, setSynopsisNews] = useState("");
  const [imgNews, setImgNews] = useState("");
  const [imgTitleNews, setImgTitleNews] = useState("");
  const [imgTwoNews, setImgTwoNews] = useState("");
  const [categoryNameNews, setCategoryNameNews] = useState("");
  const [editableFields, seteditableFields] = useState(true);

  useEffect(() => {
    setIdNews(article._id);
    setTitleNews(article.title);
    setCategoryIdNews(article.categoryId);
    setimportantNews(article.important);
    setDescriptionNews(article.description);
    setSynopsisNews(article.synopsis);
    setImgNews(article.img);
    setImgTitleNews(article.imgTitle);
    setImgTwoNews(article.imgTwo);
    setCategoryNameNews(article.categories);
  }, []);

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

  const categoryName = () => {
    // segun la categoria que elija en el input  me carga el nombre segun el còdigo indentificatorio.
    switch (categoryNameNews) {
      case "football":
        setCategoryIdNews("1");
        break;
      case "hockey":
        setCategoryIdNews("2");
        break;
      case "tennis":
        setCategoryIdNews("3");
        break;
      case "box":
        setCategoryIdNews("4");
        break;
    }
  };

  const updateNews = () => {
    // cuando presiono update me habilita los campos
    seteditableFields(false);
    setActionAMB("Modificar");
  };
  const deleteNews = () => {
    seteditableFields(true);
    setActionAMB("Eliminar");
  };

  const confirmUpdate = () => {
    fetch(
      `https://java-sports-back.vercel.app/articles/update/${article._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          categories: categoryNameNews,
          title: titleNews,
          img: imgNews,
          imgTitle: imgTitleNews,
          description: descriptionNews,
          imgTwo: imgTwoNews,
          synopsis: synopsisNews,
          important: importantNews,
          categoryId: categoryIdNews,
        }),
      }
    );
  };

  const confirmNew = () => {
    news.categories = categoryNameNews;
    news.title = titleNews;
    news.img = imgNews;
    news.imgTitle = imgTitleNews;
    news.description = descriptionNews;
    news.imgTwo = imgTwoNews;
    news.synopsis = synopsisNews;
    news.important = importantNews;
    news.categoryId = categoryIdNews;

    fetch(`https://java-sports-back.vercel.app/articles/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(news),
    });
  };

  const confirmDelete = () => {
    //eliminar noticia por id
    fetch(
      `https://java-sports-back.vercel.app/articles/delete/${article._id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
  };

  const confirmNews = (e) => {
    e.preventDefault();
    if (action === "Eliminar") {
      confirmDelete();
    } else {
      //Cargo id de categoria segun lo que elegi
      categoryName();
      if (action === "new") {
        confirmNew();
      } else {
        confirmUpdate();
      }
    }
    handleClose();
  };

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
          <Form onSubmit={(e) => confirmNews(e)}>
            <Form.Group className="mb-3" controlId="formId">
              <Form.Label>Id</Form.Label>
              <Form.Control
                maxLength="40"
                className="p-2"
                type="text"
                placeholder="Id"
                value={idNews}
                onChange={(e) => setIdNews(e.target.value)}
                // disabled
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
                // disabled={editableFields}
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
                // disabled={editableFields}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCategories">
              <Form.Label>Categoria</Form.Label>
              <Form.Select
                aria-label="Seleccionar categoria"
                // disabled={editableFields}
                onChange={(e) => setCategoryNameNews(e.target.value)}
                value={categoryNameNews}
              >
                <option className="text-dark" value="football">
                  Fútbol
                </option>
                <option className="text-dark" value="hockey">
                  Hockey
                </option>
                <option className="text-dark" value="tennis">
                  Tenis
                </option>
                <option className="text-dark" value="box">
                  Boxeo
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formDestacada"
              // disabled={editableFields}
            >
              <Form.Label>¿Destacada?</Form.Label>
              <Form.Select
                aria-label="Elegir opción"
                // disabled
                value={importantNews}
                onChange={(e) => setimportantNews(e.target.value)}
              >
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
                // disabled={editableFields}
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
                // disabled={editableFields}
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
                // disabled={editableFields}
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
                // disabled={editableFields}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {action !== "display" && (
            <Button className="btn-gray btn-gray-border" type="submit">
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
