import "../styles/landing.css";
import Container from "react-bootstrap/Container";
import News from "./News";
import "../styles/landing.css";
import { Row } from "react-bootstrap";

const Landing = ({ articles, auth }) => {
  return (
    <Container className="my-5">
      <Row className="m-0" md={3} xs={12}>
        {articles.map((item, i) => (
          <div className="spaceNews" key={i}>
            <News sizeCard="card-big" view="Home" article={item} auth={auth} />
          </div>
        ))}
      </Row>
    </Container>
  );
};
export default Landing;
