import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TableManagement from "./TableManagement";
import "../styles/management.css";
import { Navigate, useNavigate } from "react-router-dom";

const Management = ({ auth, articles, users }) => {
  const navigate = useNavigate();
  // solo lo puede visualizar el admin
  useEffect(() => {
    auth.role !== "admin" && navigate("/");
  }, [auth]);

  return (
    <Container className="main-container d-flex flex-column">
      <div>
        <h3 className="text-center mt-5">
          Administración <FontAwesomeIcon icon={faHouse} />
        </h3>
      </div>
      <div className="mt-5">
        <Tabs
          defaultActiveKey="news"
          id="table-administrative"
          className=" title-tabs"
        >
          <Tab eventKey="news" title="Noticias de JavaSports" className="">
            <TableManagement view="news" articles={articles} users={users} />
          </Tab>
          <Tab eventKey="users" title="Usuarios registrados" className="">
            <TableManagement view="users" articles={articles} users={users} />
          </Tab>
          <Tab
            eventKey="administrativeStaff"
            title="Personal administrativo"
            className=""
          >
            <TableManagement
              view="administrativeStaff"
              articles={articles}
              users={users}
            />
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

export default Management;
