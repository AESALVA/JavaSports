import { Container, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../styles/management.css";
import { useState } from "react";
import Search from "./Seeker";

const TableManagement = ({ view, mockSections, mocksUsers }) => {
  let columnTwo;
  let columnThree;
  let columnFour;
  let infoTable = [{}];
  if (view === "news") {
    columnTwo = "Noticia";
    columnThree = "Categoria";
    infoTable = mockSections;
  } else {
    columnTwo = "Nombre completo";
    columnThree = "Rol";
    infoTable = mocksUsers; //filtrar por role administrativo para la otra tabs
  }

  return (
    <>
      <div className="d-flex flex-column ">
        {/* BOTONERA DE LA TABLA */}
        <div className="table-header-administrative d-flex  justify-content-end my-3">
          {/* BOTONERA CON BUSCADOR */}
          <Button variant="secondary" size="sm">
            Nuevo
            <span className="ms-1">
              <FontAwesomeIcon icon={faPlus} />
            </span>
          </Button>
          <Form size="sm" className="d-flex mx-2">
            <Form.Control
              type="text"
              placeholder="Buscar"
              className=""
              aria-label="Search"
            />
          </Form>
        </div>
        {/* TABLA INFORMATIVA */}
        <div className="table-administrative">
          <Table hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>{columnTwo}</th>
                <th>{columnThree}</th>
              </tr>
            </thead>
            <tbody>
              {/* {infoTable.map((info, i) => {
                return (
                  <tr>
                    <td>{info[i].id}</td>
                    <td>{info[i].title}</td>
                    <td>{info[i].categories}</td>
                  </tr>
                );
              })} */}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default TableManagement;
