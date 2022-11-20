import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import News from "./News";
import SearchList from "./SearchList";
import { Link } from "react-router-dom";
import { useState } from "react";

const SearchPageContainer = ({ articles, search }) => {
  const matchList = [];
  // Tengo que filtrar los articulos por la busqueda dada.

  const limit = articles.length;
  if (search) {
    for (let i = 0; i < limit; i++) {
      const tagTitle = articles[i].title.toLowerCase();
      const tagImgTitle = articles[i].imgTitle.toLowerCase();
      const patt = new RegExp(search.toLowerCase());
      const resTitle = patt.test(tagTitle);
      const resImgTitle = patt.test(tagImgTitle);
      // console.log(res);
      if (resTitle === true || resImgTitle === true) {
        matchList.push(articles[i]);
      }
    }
  }

  return (
    <>
      {matchList > 0 ? (
        <Container className="my-5">
          <h2 className="text-center mb-5 title-search">
            RESULTADOS PARA: {search.toUpperCase()}
          </h2>
          <Row className="g-4" md={3} xs={12}>
            {matchList.forEach((noti) => {
              <News sizeCard="" view="Home" article={noti} />;
            })}
          </Row>
        </Container>
      ) : (
        <Container>
          <h2 className="text-center my-5">
            No hay coincidencias para: {search.toUpperCase()}{" "}
          </h2>
        </Container>
      )}
    </>
  );
};

export default SearchPageContainer;
