import Container from "react-bootstrap/Container";
import News from "./News";
import "../styles/landing.css";
import Publicity from "./Publicity";
import { Col, Row } from "react-bootstrap";

const NewsList = ({ MockArticle }) => {
  // console.log(MockArticle[0].title);
  return (
    <Container className="container-grid my-5">
      <div id="one-card" className="spaceNews">
        <News sizeCard="" view="Home" article={MockArticle[0]} />
      </div>
      <div id="two-card" className="spaceNews">
        <News sizeCard="" view="Home" article={MockArticle[0]} />
      </div>
      <div id="three-card" className="spaceNews">
        <News sizeCard="" view="Home" article={MockArticle[0]} />
      </div>
      <div id="four-card" className="spaceNews">
        <News sizeCard="" view="Home" article={MockArticle[0]} />
      </div>
      <div id="five-card" className="spaceNews">
        <News sizeCard="" view="Home" article={MockArticle[0]} />
      </div>
      <div id="six-card" className="spaceNews">
        <News sizeCard="" view="Home" article={MockArticle[0]} />
      </div>
      <div id="seven-card" className="spaceNews">
        <News sizeCard="card-big" view="Home" article={MockArticle[0]} />
      </div>
      <div id="eight-card" className="spaceNews">
        <News sizeCard="" view="Home" article={MockArticle[0]} />
      </div>
      <div id="nine-card" className="spaceNews">
        <News sizeCard="" view="Home" article={MockArticle[0]} />
      </div>
      <div id="ten-card" className="spaceNews">
        <News sizeCard="" view="Home" article={MockArticle[0]} />
      </div>
      <div id="eleven-card" className="spaceNews">
        <News sizeCard="" view="Home" article={MockArticle[0]} />
      </div>
      <div id="twelve-card" className="spaceNews">
        <News sizeCard="" view="Home" article={MockArticle[0]} />
      </div>
      <div id="thirteen-card" className="spaceNews">
        <News sizeCard="" view="Home" article={MockArticle[0]} />
      </div>
      <div id="fourteen-card" className="spaceNews">
        <News sizeCard="" view="Home" article={MockArticle[0]} />
      </div>
      <div id="fifteen-card" className="spaceNews">
        <News sizeCard="card-big" view="Home" article={MockArticle[0]} />
      </div>
      <div id="sixteen-card" className="spaceNews">
        <News sizeCard="" view="Home" article={MockArticle[0]} />
      </div>
      <div id="seventeen-card" className="spaceNews">
        <News sizeCard="" view="Home" article={MockArticle[0]} />
      </div>
      <div id="eighteen-card" className="spaceNews">
        <News sizeCard="" view="Home" article={MockArticle[0]} />
      </div>

      <div id="nineteen-card" className=" ">
        <News sizeCard="" view="Home" article={MockArticle[0]} />
      </div>

      <div id="twenty-card" className="">
        <News sizeCard="card-big" view="Home" article={MockArticle[0]} />
      </div>
    </Container>
  );
};

export default NewsList;
