import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import News from "./News";
import SearchPageList from "./SearchPageList";

const SearchPage = () => {
  const matchList = ["news1", "news2", "news3", "news4"];

  return (
    <>
      {matchList ? (
        <SearchPageList matchList={matchList} />
      ) : (
        "No hay coincidencias"
      )}
    </>
  );
};

export default SearchPage;
