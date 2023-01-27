import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { json, Link, useNavigate } from "react-router-dom";
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
  setAction,
  confirmINS,
  articles,
  confirmDEL,
  messages,
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
  let patron = /\w+\s\w+\s?.+/; //patron para las descripciones
  let patronURL =
    /^(https:\/\/)([^\s(["<,>/]*)(\/?)[^\s[",><]*(.png|.jpg|.PNG|.JPG)(\?[^\s[",><]*)?$/;

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
    console.log("entro para confirmar");

    // Actualizar el objeto article con los nuevos cambios.
    article._id = idNews;
    article.title = titleNews;
    article.categoryId = categoryIdNews;
    article.categories = categoryNameNews;
    article.important = importantNews;
    article.description = descriptionNews;
    article.synopsis = synopsisNews;
    article.img = imgNews;
    article.imgTitle = imgTitleNews;
    article.imgTwo = imgTwoNews;
    if (!article._id) {
      let article = {};
      fetch(`https://java-sports-back.vercel.app/articles/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(news),
      })
        .then((res) => res.json())
        .then((json) => (article = json))
        .catch((error) => console.log(error));
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
    } else {
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
    }
    messages("El articulo se actualizó con éxito!", "success");
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
    confirmINS(news); //Actualizo el frontEnd
    fetch(`https://java-sports-back.vercel.app/articles/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(news),
    });

    messages("El articulo se registró con éxito!", "success");
  };

  const confirmDelete = () => {
    if (!article._id) {
      let article = {};
      fetch(`https://java-sports-back.vercel.app/articles/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(news),
      })
        .then((res) => res.json())
        .then((json) => (article = json))
        .catch((error) => console.log(error));
      fetch(
        `https://java-sports-back.vercel.app/articles/delete/${article._id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
    } else {
      fetch(
        `https://java-sports-back.vercel.app/articles/delete/${article._id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    confirmDEL(titleNews);

    // Mensaje de éxito.
    messages("El articulo ha sido eliminado!", "success");
    handleClose();
  };

  // FUNCIONES PARA VALIDAR FORMULARIO
  const validateTitle = (n = "hol") => {
    return patron.test(n) && validator.isLength(n, { min: 5, max: 50 });
  };
  const validateImgTitle = (n = "hol") => {
    return patron.test(n) && validator.isLength(n, { min: 5, max: 50 });
  };

  const validateDescription = (t = "hol") => {
    // validator.matches(t, "^[a-zA-Z0-9 ]*$")
    return patron.test(t) && validator.isLength(t, { min: 50, max: 600 });
  };
  const validateSynopsis = (t = "hol") => {
    return patron.test(t) && validator.isLength(t, { min: 50, max: 600 });
  };
  const validateURL = (t = "hol") => {
    return patronURL.test(t) && validator.isLength(t, { min: 10, max: 250 });
  };

  const confirmUPD = () => {
    console.log("action" + action);
    //Confirmo INSERT o UPDATE
    switch (action) {
      case "new":
        confirmNew();
        break;
      case "Modificar":
        confirmUpdate();
        break;
    }
    setAction(true);
    handleClose();
  };

  const confirmNews = () => {
    if (action === "Eliminar") {
      confirmDelete();
    } else {
      categoryName(); //Cargo id de categoria segun lo que elegi
      if (
        // confirma solo si el formulario cumple con los requisitos
        validateTitle(titleNews) &&
        validateImgTitle(imgTitleNews) &&
        validateDescription(descriptionNews) &&
        validateSynopsis(synopsisNews) &&
        validateURL(imgNews) &&
        validateURL(imgTwoNews)
      ) {
        confirmUPD();
      } else {
        setTitle_validate(false);
        setImgTitle_validate(false);
        setDescription_validate(false);
        setSynopsis_validate(false);
        setImg_validate(false);
        setImgTwo_validate(false);
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
          <h5 className="title">JavaSports</h5>
          {action !== "new" && (
            <div id="header-btn" className="mt-2">
              <Button
                variant="sm"
                className={
                  action === "Modificar"
                    ? `mx-1 btn-select-active`
                    : `mx-1 btn-select`
                }
                onClick={() => updateNews()}
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
                onClick={() => deleteNews()}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </Button>
            </div>
          )}
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3 d-none" controlId="formId">
              <Form.Label>Id</Form.Label>
              <Form.Control
                maxLength="100"
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
                maxLength="80"
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
                maxLength="80"
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
                maxLength="250"
                className="p-2"
                type="text"
                size="sm"
                placeholder="Ingresar url de imagen"
                value={imgNews || ""}
                onChange={(e) => setImgNews(e.target.value)}
                disabled={editableFields}
              />
              {!validateURL(imgNews) && !img_validate && (
                <div className="alert alert-danger p-0" role="alert">
                  Error en el campo "Imagen 1".
                </div>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImg2">
              <Form.Label>Imagen 2 </Form.Label>
              <Form.Control
                maxLength="250"
                className="p-2"
                type="text"
                placeholder="Ingresar url de imagen"
                value={imgTwoNews || ""}
                onChange={(e) => setImgTwoNews(e.target.value)}
                disabled={editableFields}
              />
              {!validateURL(imgTwoNews) && !imgTwo_validate && (
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
              className="btn-gray btn-gray-border btn-form"
              onClick={() => confirmNews()}
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

export default CrudNews;
