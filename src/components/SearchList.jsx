import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import News from "./News";
import "../styles/search.css";

const SearchList = ({ matchList, auth }) => {
  return (
    <Container className="my-5">
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

export default SearchList;
