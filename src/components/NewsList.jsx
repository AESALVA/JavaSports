import Container from "react-bootstrap/Container";
import News from "./News";
import "../styles/landing.css";
import Publicity from "./Publicity";
import { Col, Row } from "react-bootstrap";

const NewsList = () => {
  const MockArticle = {
    id: "1",
    categories: "football",
    title: "Gabriel Jesus is not the perfect",
    img: "/img/imgSection.webp",
    imgTitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    description:
      "Five-nil. But then, Manchester City just look so strong at the moment. Still: five-nil. But that injury to Bukayo Saka, how much of a blow could that be? Anyway, it was five-nil. But those Nottingham Forest chances, the Jesse Lingard shot where Gabriel Magalhães basically passes it straight to him, one day those are going to cost you. And yet, check the scoreboard, girls and boys: five-nil. It is the eternal gift of Arsenal fans to be able to identify the potential anxiety in virtually any situation, however favourable or triumphant. Pleasure is simply misery deferred. Most people look for crumbs of comfort; Arsenal fans look for crumbs of concern, scan the fixture list for oncoming hazards, scan every horizon for grey clouds. And so, even a routine and rampant 5-0 victory comes with its own quantum of unease.",
    imgTwo: "/img/imgSection2.webp",
    synopsis:
      "Of course, as anyone who has seen Jesus play will be able to tell you, this is not all you get. One of the reasons it feels unfair judging Jesus by the output of a conventional striker is that his input is not that of a conventional striker. Of his 72 touches, only 16 came in the Forest penalty area. Thirteen were in his own half. The vast majority, in fact, were on the left wing, with another little cluster around the left edge of the centre circle. He attempted more tackles than any other Arsenal player. Jesus is, in effect, a ball-winning wide midfielder who does striking for a little extra cash.",
  };

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

      <div id="nineteen-card" className="m-0 d-flex d-none d-md-block">
        <Row className="justify-content-center">
          <Col className=" d-md-none d-lg-block">
            <News sizeCard="square" mockSections={MockArticle} view="Home" />
          </Col>
          <Col>
            <News sizeCard="square" mockSections={MockArticle} view="Home" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className=" d-md-none d-lg-block">
            <News sizeCard="square" mockSections={MockArticle} view="Home" />
          </Col>
          <Col>
            <News sizeCard="square" mockSections={MockArticle} view="Home" />
          </Col>
        </Row>
      </div>

      <div id="twenty-card" className="spaceNews">
        <News sizeCard="card-big" mockSections={MockArticle} view="Home" />
      </div>
    </Container>
  );
};

export default NewsList;
