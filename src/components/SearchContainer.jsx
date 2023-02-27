import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import News from "./News";
import SearchList from "./SearchList";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchContainer = ({ articles, search, auth }) => {
  const [articlesList, setArticlesList] = useState([{}]);
  // Tengo que filtrar los articulos por la busqueda dada.
  const filter = () => {
    let matchList = [];
    articles.forEach((article) => {
      article.title.toLowerCase().includes(search.toLowerCase()) &&
        matchList.push(article);
    });
    setArticlesList(matchList);
  };

  useEffect(() => {
    filter();
  }, [search]);

  return (
    <>
      <Container id="main-container">
        {search && articlesList.length > 0 ? (
          <div>
            <h4 className="text-center my-5 title-search">
              RESULTADOS PARA: {search.toUpperCase()}
            </h4>
            <SearchList matchList={articlesList} auth={auth} />
          </div>
        ) : (
          <div className="container-notFound">
            {search === "" ? (
              <p className="text-center">
                Debe ingresar palabras para poder filtrar!
              </p>
            ) : (
              <p className="text-center">
                No hay coincidencias para tu búsqueda !
              </p>
            )}
            <div className="d-flex justify-content-center mt-3">
              <img
                id="icons-notFound"
                src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
                alt=""
              />
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default SearchContainer;
