import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TableManagement from "./TableManagement";
import "../styles/management.css";

const Management = ({ mockSections, mocksUsers }) => {
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
            <TableManagement
              view="news"
              mockSections={mockSections}
              mocksUsers={mocksUsers}
            />
          </Tab>
          <Tab eventKey="users" title="Usuarios registrados" className="">
            <TableManagement
              view="users"
              mockSections={mockSections}
              mocksUsers={mocksUsers}
            />
          </Tab>
          <Tab
            eventKey="administrativeStaff"
            title="Personal administrativo"
            className=""
          >
            <TableManagement
              view="administrativeStaff"
              mockSections={mockSections}
              mocksUsers={mocksUsers}
            />
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

export default Management;
