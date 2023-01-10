import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import validator from "validator";
import Swal from "sweetalert2";
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

  // Estado para las validaciones
  const [title_validate, setTitle_validate] = useState(true);
  const [description_validate, setDescription_validate] = useState(true);
  const [synopsis_validate, setSynopsis_validate] = useState(true);
  const [img_validate, setImg_validate] = useState(true);
  const [imgTitle_validate, setImgTitle_validate] = useState(true);
  const [imgTwo_validate, setImgTwo_validate] = useState(true);
  const [validateForm, setValidateForm] = useState(true);

  // const load = () => {};
  useEffect(() => {
    action === "new" ? seteditableFields(false) : seteditableFields(true);
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
    // estado de validaciones:
    setTitle_validate(true);
    setDescription_validate(true);
    setSynopsis_validate(true);
    setImgTitle_validate(true);
  }, [showModal]);

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
      case "hochey":
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

  // FUNCIONES PARA VALIDAR FORMULARIO
  const validateTitle = (n = "hol") => {
    return (
      validator.matches(n, "^[a-zA-Z ]*$") &&
      validator.isLength(n, { min: 5, max: 50 })
    );
  };
  const validateImgTitle = (n = "hol") => {
    return (
      validator.matches(n, "^[a-zA-Z ]*$") &&
      validator.isLength(n, { min: 5, max: 50 })
    );
  };

  const validateDescription = (t = "hol") => {
    return (
      validator.matches(t, "^[a-zA-Z0-9 ]*$") &&
      validator.isLength(t, { min: 5, max: 500 })
    );
  };
  const validateSynopsis = (t = "hol") => {
    return (
      validator.matches(t, "^[a-zA-Z0-9 ]*$") &&
      validator.isLength(t, { min: 5, max: 500 })
    );
  };

  const confirmUPD = () => {
    //Confirmo INSERT o UPDATE
    // switch (action) {
    //   case "INS":
    //     confirmNew();
    //     break;
    //   case "UPD":
    //     confirmUpdate();
    //     break;
    // }
    console.log("paso las validaciones");
    // handleClose();
  };

  const confirmNews = () => {
    if (action === "Eliminar") {
      confirmDelete();
    } else {
      categoryName(); //Cargo id de categoria segun lo que elegi
      // confirma solo si el formulario cumple con los requisitos
      if (
        validateTitle(titleNews) &&
        validateImgTitle(imgTitleNews) &&
        validateDescription(descriptionNews) &&
        validateSynopsis(synopsisNews)
      ) {
        confirmUPD();
      } else {
        setTitle_validate(false);
        setImgTitle_validate(false);
        setDescription_validate(false);
        setSynopsis_validate(false);
      }
    }
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
          <Form>
            <Form.Group className="mb-3" controlId="formId">
              <Form.Label>Id</Form.Label>
              <Form.Control
                maxLength="40"
                className="p-2"
                type="text"
                placeholder="Id"
                value={idNews || ""}
                onChange={(e) => setIdNews(e.target.value)}
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
                value={titleNews || ""}
                onChange={(e) => setTitleNews(e.target.value)}
                disabled={editableFields}
              />
              {!validateTitle(titleNews) && !title_validate && (
                <div className="alert alert-danger p-0" role="alert">
                  Error en el campo "Nombre".
                </div>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTitleImg">
              <Form.Label>Titulo de Imagen principal </Form.Label>
              <Form.Control
                maxLength="40"
                className="p-2"
                type="text"
                placeholder="Titulo de imagen principal"
                value={imgTitleNews || ""}
                onChange={(e) => setImgTitleNews(e.target.value)}
                disabled={editableFields}
              />
              {!validateImgTitle(imgTitleNews) && !imgTitle_validate && (
                <div className="alert alert-danger p-0" role="alert">
                  Error en el campo "Imagen Principal".
                </div>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCategories">
              <Form.Label>Categoria</Form.Label>
              <Form.Select
                aria-label="Seleccionar categoria"
                disabled={editableFields}
                onChange={(e) => setCategoryNameNews(e.target.value)}
                value={categoryNameNews || ""}
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
            <Form.Group className="mb-3" controlId="formDestacada">
              <Form.Label>¿Destacada?</Form.Label>
              <Form.Select
                aria-label="Elegir opción"
                disabled={editableFields}
                value={importantNews || ""}
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
                value={descriptionNews || ""}
                onChange={(e) => setDescriptionNews(e.target.value)}
                onBlur={() => setDescription_validate(false)}
                disabled={editableFields}
              />
              {!validateDescription(descriptionNews) &&
                !validateDescription(descriptionNews) &&
                !description_validate && (
                  <div className="alert alert-danger p-0" role="alert">
                    Error en el campo "Descripción".
                  </div>
                )}
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
                value={synopsisNews || ""}
                onChange={(e) => setSynopsisNews(e.target.value)}
                disabled={editableFields}
              />
              {!validateSynopsis(synopsisNews) && !synopsis_validate && (
                <div className="alert alert-danger p-0" role="alert">
                  Error en el campo "Synopsis".
                </div>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImg1">
              <Form.Label>Imagen 1 (Principal)</Form.Label>
              <Form.Control
                maxLength="40"
                className="p-2"
                type="text"
                size="sm"
                placeholder="Ingresar url de imagen"
                value={imgNews || ""}
                onChange={(e) => setImgNews(e.target.value)}
                disabled={editableFields}
              />
              {!img_validate && (
                <div className="alert alert-danger p-0" role="alert">
                  Error en el campo "Imagen 1".
                </div>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImg2">
              <Form.Label>Imagen 2 </Form.Label>
              <Form.Control
                maxLength="40"
                className="p-2"
                type="text"
                placeholder="Ingresar url de imagen"
                value={imgTwoNews || ""}
                onChange={(e) => setImgTwoNews(e.target.value)}
                disabled={editableFields}
              />
              {!imgTwo_validate && (
                <div className="alert alert-danger p-0" role="alert">
                  Error en el campo "Imagen 2".
                </div>
              )}
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
