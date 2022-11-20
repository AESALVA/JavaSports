import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import News from "./News";
import "../styles/search.css";

const SearchList = ({ matchList, search }) => {
  return (
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
  );
};

export default SearchList;
