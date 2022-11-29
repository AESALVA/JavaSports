import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import News from "./News";

const SectionsList = ({ categoryId, articles, auth }) => {
  let matchList = articles.filter((item) => item.categoryId === categoryId);
  let category = "";

  const categoryName = () => {
    switch (categoryId) {
      case "1":
        category = "Fútbol";
        break;
      case "2":
        category = "Hockey";
        break;
      case "3":
        category = "Tenis";
        break;

      default: //4 - boxeo
        category = "Boxeo";
        break;
    }
  };
  categoryName();
  return (
    <Container className="main-container my-5">
      <div>
        <h2 className="text-center mb-5 ">
          <strong className="text-secondary">{category}</strong>
        </h2>
      </div>
      <div></div>
      <Row className="" md={3} xs={12}>
        {matchList.map((item, i) => (
          <div className="spaceNews" key={i}>
            <News sizeCard="card-big" view="Home" article={item} auth={auth} />
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default SectionsList;
