import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import News from "./News";
import SearchList from "./SearchList";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchPageContainer = ({ articles, search }) => {
  const [searchList, setSearchList] = useState([{}]);
  // Tengo que filtrar los articulos por la busqueda dada.
  const filter = () => {
    let matchList = [];
    articles.forEach((noticia) => {
      // console.log(noticia.title.toLowerCase().includes(search.toLowerCase()));
      noticia.title.toLowerCase().includes(search.toLowerCase()) &&
        matchList.push(noticia);
    });
    setSearchList(matchList);
  };

  useEffect(() => {
    filter();
  }, [search]);

  return (
    <>
      {search && searchList.length > 0 ? (
        <Container className="my-5">
          <h2 className="text-center mb-5 title-search">
            RESULTADOS PARA: {search}
          </h2>
          <SearchList matchList={searchList} />
        </Container>
      ) : (
        <Container className="container-not-found">
          <h3 className="text-center my-5">
            No hay coincidencias para tu búsqueda!
          </h3>
          <div className="d-flex justify-content-center mb-5">
            <img
              id="icons-notFound"
              src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
              alt=""
            />
          </div>
        </Container>
      )}
    </>
  );
};

export default SearchPageContainer;
