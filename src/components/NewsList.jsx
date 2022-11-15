import Container from "react-bootstrap/Container";
import News from "./News";
import "../styles/landing.css";
import Publicity from "./Publicity";
import { Col, Row } from "react-bootstrap";

const NewsList = ({ MockArticle }) => {
  return (
    <Container className="container-grid my-5">
      <div id="one-card" className="spaceNews">
        <News sizeCard="" mockSections={MockArticle} view="Home" />
      </div>
      <div id="two-card" className="spaceNews">
        <News sizeCard="" mockSections={MockArticle} view="Home" />
      </div>
      <div id="three-card" className="spaceNews">
        <News sizeCard="" mockSections={MockArticle} view="Home" />
      </div>
      <div id="four-card" className="spaceNews">
        <News sizeCard="" mockSections={MockArticle} view="Home" />
      </div>
      <div id="five-card" className="spaceNews">
        <News sizeCard="" mockSections={MockArticle} view="Home" />
      </div>
      <div id="six-card" className="spaceNews">
        <News sizeCard="" mockSections={MockArticle} view="Home" />
      </div>
      <div id="seven-card" className="spaceNews">
        <News sizeCard="card-big" mockSections={MockArticle} view="Home" />
      </div>
      <div id="eight-card" className="spaceNews">
        <News sizeCard="" mockSections={MockArticle} view="Home" />
      </div>
      <div id="nine-card" className="spaceNews">
        <News sizeCard="" mockSections={MockArticle} view="Home" />
      </div>
      <div id="ten-card" className="spaceNews">
        <News sizeCard="" mockSections={MockArticle} view="Home" />
      </div>
      <div id="eleven-card" className="spaceNews">
        <News sizeCard="" mockSections={MockArticle} view="Home" />
      </div>
      <div id="twelve-card" className="spaceNews">
        <News sizeCard="" mockSections={MockArticle} view="Home" />
      </div>
      <div id="thirteen-card" className="spaceNews">
        <News sizeCard="" mockSections={MockArticle} view="Home" />
      </div>
      <div id="fourteen-card" className="spaceNews">
        <News sizeCard="" mockSections={MockArticle} view="Home" />
      </div>
      <div id="fifteen-card" className="spaceNews">
        <News sizeCard="card-big" mockSections={MockArticle} view="Home" />
      </div>
      <div id="sixteen-card" className="spaceNews">
        <News sizeCard="" mockSections={MockArticle} view="Home" />
      </div>
      <div id="seventeen-card" className="spaceNews">
        <News sizeCard="" mockSections={MockArticle} view="Home" />
      </div>
      <div id="eighteen-card" className="spaceNews">
        <News sizeCard="" mockSections={MockArticle} view="Home" />
      </div>

      <div id="nineteen-card" className=" ">
        <News sizeCard="" mockSections={MockArticle} view="Home" />
      </div>

      <div id="twenty-card" className="">
        <News sizeCard="card-big" mockSections={MockArticle} view="Home" />
      </div>
    </Container>
  );
};

export default NewsList;
