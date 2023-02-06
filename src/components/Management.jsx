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

const Management = ({
  auth,
  articles,
  setArticles,
  users,
  action,
  setAction,
  confirmDEL,
  confirmDELUsers,
}) => {
  const navigate = useNavigate();
  // let articlesManagement = articles; //le asigno por primera vez lo que llega de app.

  useEffect(() => {
    // solo puede visualizar la pàgina el admin
    auth.role !== "admin" && navigate("/");
  }, [auth]);

  const confirmINS = (news) => {
    articles.push(news);
  };

  const confirmINS_Users = (u) => {
    users.push(u);
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
        <div className="mb-3" id="title-admin">
          {action}
          <h5 className="text-center titulo-aboutus">Administración</h5>
        </div>
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
              confirmDELUsers={confirmDELUsers}
              confirmINS_Users={confirmINS_Users}
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
              confirmDELUsers={confirmDELUsers}
              confirmINS_Users={confirmINS_Users}
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
              users={users}
              setAction={setAction}
              confirmINS={confirmINS}
              confirmDEL={confirmDEL}
              messages={messages}
              confirmDELUsers={confirmDELUsers}
              confirmINS_Users={confirmINS_Users}
            />
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

export default Management;
