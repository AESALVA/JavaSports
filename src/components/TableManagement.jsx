import { Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../styles/management.css";
import { useState } from "react";
import CrudUsers from "./CrudUsers";
import CrudNews from "./CrudNews";
import { useEffect } from "react";

const TableManagement = ({ viewTable, articles, users }) => {
  const [showModal, setShowModal] = useState(false);
  const [actionAMB, setActionAMB] = useState("");
  const [viewInfo, setViewInfo] = useState({});
  const [matchlist, setMatchlist] = useState([{}]);
  const [seeker, setSeeker] = useState("");

  let columnTwo;
  let columnThree;
  if (viewTable === "news") {
    columnTwo = "Noticia";
    columnThree = "Categoria";
  } else {
    columnTwo = "Nombre completo";
    columnThree = "Rol";
  }

  const handleClose = () => {
    setViewInfo({});
    setShowModal(false);
  };
  const handleShow = () => {
    setShowModal(true);
  };

  const showModalNew = () => {
    setActionAMB("new");
    setViewInfo({}); //paso el objeto vacio
    handleShow();
  };
  const showModalDisplay = (article) => {
    setActionAMB("display");
    setViewInfo(article);
    handleShow();
  };

  useEffect(() => {
    let listSeeker = [];

    if (viewTable === "news") {
      articles.forEach((article) => {
        article.title.toLowerCase().includes(seeker.toLowerCase()) &&
          listSeeker.push(article);
      });
      setMatchlist(listSeeker);
    } else {
      users.forEach((user) => {
        user.name.toLowerCase().includes(seeker.toLowerCase()) &&
          listSeeker.push(user);
      });
      setMatchlist(listSeeker);
    }
  }, [seeker]);

  return (
    <>
      <div className="d-flex flex-column ">
        {/* BOTONERA DE LA TABLA */}
        <div className="table-header-administrative d-flex  justify-content-end my-4">
          {/* BOTONERA CON BUSCADOR */}
          {viewTable !== "users" && (
            <Button
              className="btn-gray btn-gray-border"
              size="sm"
              onClick={showModalNew}
            >
              <span className="me-1 d-none d-md-inline-block">Agregar</span>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          )}
          <Form size="sm" className="d-flex mx-2">
            <Form.Control
              type="text"
              placeholder="Buscar"
              className="py-0"
              aria-label="Search"
              onInput={(e) => setSeeker(e.target.value)}
            />
          </Form>
        </div>
        {/* TABLA INFORMATIVA */}
        <div className="table-administrative">
          <Table hover>
            <thead>
              <tr>
                <th>{columnTwo}</th>
                <th>{columnThree}</th>
              </tr>
            </thead>
            <tbody>
              {viewTable === "news"
                ? matchlist.map((article, i) => (
                    <tr
                      id={i}
                      key={i}
                      onClick={() => showModalDisplay(article)}
                    >
                      <td>{article.title}</td>
                      <td>{article.categories}</td>
                    </tr>
                  ))
                : matchlist.map((article, i) => (
                    <tr
                      id={i}
                      key={i}
                      onClick={() => showModalDisplay(article)}
                    >
                      <td>{article.name}</td>
                      <td>{article.role}</td>
                    </tr>
                  ))}
            </tbody>
          </Table>
        </div>
      </div>

      {/* MODAL CRUD */}
      {viewTable === "news" ? (
        <CrudNews
          article={viewInfo}
          view={viewTable}
          action={actionAMB}
          setActionAMB={setActionAMB}
          showModal={showModal}
          handleClose={handleClose}
        />
      ) : (
        <CrudUsers
          info={viewInfo}
          view={viewTable}
          action={actionAMB}
          setActionAMB={setActionAMB}
          showModal={showModal}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default TableManagement;
