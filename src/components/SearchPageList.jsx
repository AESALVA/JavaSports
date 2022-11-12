import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import News from "./News";
import "../styles/search.css";

const SearchPageList = ({ matchList }) => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-5 title-search">RESULTADOS</h2>
      <Row className="g-4" md={4} xs={2}>
        {matchList.map((news, i) => (
          <News sizeCard="" />
        ))}
      </Row>
    </Container>
  );
};

export default SearchPageList;
