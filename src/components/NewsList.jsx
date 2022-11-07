import Container from "react-bootstrap/Container";
import News from "./News";
import "../styles/landing.css";

const NewsList = () => {
  return (
    <Container className="container-grid my-5">
      <div id="one-card">
        <News sizeCard="" />
      </div>
      <div id="two-card">
        <News sizeCard="" />
      </div>
      <div id="three-card">
        <News sizeCard="" />
      </div>
      <div id="four-card">
        <News sizeCard="" />
      </div>
      <div id="five-card" className="card-publicidad">
        PUBLICIDAD
      </div>
      <div id="six-card">
        <News sizeCard="" />
      </div>
      <div id="seven-card">
        <News sizeCard="card-big" />
      </div>
      <div id="eight-card">
        <News sizeCard="" />
      </div>
      <div id="nine-card">
        <News sizeCard="" />
      </div>
      <div id="ten-card" className="card-publicidad">
        PUBLICIDAD
      </div>
      <div id="eleven-card">
        <News sizeCard="" />
      </div>
      <div id="twelve-card">
        <News sizeCard="" />
      </div>
      <div id="thirteen-card">
        <News sizeCard="" />
      </div>
      <div id="fourteen-card">
        <News sizeCard="" />
      </div>
      <div id="fifteen-card" className="card-publicidad">
        PUBLICIDAD
      </div>
      <div id="sixteen-card">
        <News sizeCard="" />
      </div>
      <div id="seventeen-card">
        <News sizeCard="" />
      </div>
    </Container>
  );
};

export default NewsList;
