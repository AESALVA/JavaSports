import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import News from "./News";
import SearchList from "./SearchList";
import { Link } from "react-router-dom";

const SearchPageContainer = ({ MockArticle }) => {
  const matchList = ["news1", "news2", "news3", "news4"];

  return (
    <>
      {matchList ? (
        <SearchList matchList={matchList} />
      ) : (
        "No hay coincidencias"
      )}
    </>
  );
};

export default SearchPageContainer;
