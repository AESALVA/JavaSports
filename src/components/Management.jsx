import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TableManagement from "./TableManagement";
import "../styles/management.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Management = ({
  auth,
  articles,
  setArticles,
  users,
  action,
  setAction,
  confirmDEL,
}) => {
  const navigate = useNavigate();
  // let articlesManagement = articles; //le asigno por primera vez lo que llega de app.
  // let personalList = users.filter((user) => user.role === "admin") || [];
  let personalList = [];

  useEffect(() => {
    // solo puede visualizar la pàgina el admin
    auth.role !== "admin" && navigate("/");
  }, [auth]);

  const confirmINS = (news) => {
    articles.push(news);
  };

  const messages = (msg, typeIcon) => {
    Swal.fire({
      title: "JavaSports",
      text: msg,
      icon: typeIcon,
      iconColor: "#413f4a",
      width: "20rem",
      confirmButtonColor: "#413f4a",
    });
  };

  return (
    <Container className="main-container d-flex flex-column">
      <div>
        {action}
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
            <TableManagement
              viewTable="news"
              articles={articles}
              setArticles={setArticles}
              users={users}
              setAction={setAction}
              confirmINS={confirmINS}
              confirmDEL={confirmDEL}
              messages={messages}
            />
          </Tab>
          <Tab eventKey="users" title="Usuarios registrados" className="">
            <TableManagement
              viewTable="users"
              articles={articles}
              setArticles={setArticles}
              users={users}
              setAction={setAction}
              confirmINS={confirmINS}
              confirmDEL={confirmDEL}
              messages={messages}
            />
          </Tab>
          <Tab
            eventKey="administrativeStaff"
            title="Personal administrativo"
            className=""
          >
            <TableManagement
              viewTable="administrativeStaff"
              articles={articles}
              setArticles={setArticles}
              users={personalList}
              setAction={setAction}
              confirmINS={confirmINS}
              confirmDEL={confirmDEL}
              messages={messages}
            />
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

export default Management;
