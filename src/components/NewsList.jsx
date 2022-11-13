import Container from "react-bootstrap/Container";
import News from "./News";
import "../styles/landing.css";
import Publicity from "./Publicity";
import { Col, Row } from "react-bootstrap";

const NewsList = () => {
  const MockArticle = {
    id: "1",
    categories: "football",
    title:
      "Gabriel Jesus is not the perfect striker but he may be just perfect for Arsenal",
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
    <Container className="container-grid ">
      <div id="one-card">
        <News sizeCard="" mockSections={MockArticle} />
      </div>
      <div id="two-card">
        <News sizeCard="" mockSections={MockArticle} />
      </div>
      <div id="three-card">
        <News sizeCard="" mockSections={MockArticle} />
      </div>
      <div id="four-card">
        <News sizeCard="" mockSections={MockArticle} />
      </div>
      <div id="five-card" className="card-publicidad text-center">
        {/* PUBLICIDAD */}
        <Publicity publicityType="horizontal" />
      </div>
      <div id="six-card">
        <News sizeCard="" mockSections={MockArticle} />
      </div>
      <div id="seven-card" className="mb-4">
        <News sizeCard="card-big" mockSections={MockArticle} />
      </div>
      <div id="eight-card">
        <News sizeCard="" mockSections={MockArticle} />
      </div>
      <div id="nine-card">
        <News sizeCard="" mockSections={MockArticle} />
      </div>
      <div id="ten-card" className="card-publicidad text-center">
        {/* PUBLICIDAD */}
        <Publicity publicityType="vertical" />
      </div>
      <div id="eleven-card">
        <News sizeCard="" mockSections={MockArticle} />
      </div>
      <div id="twelve-card">
        <News sizeCard="" mockSections={MockArticle} />
      </div>
      <div id="thirteen-card">
        <News sizeCard="" mockSections={MockArticle} />
      </div>
      <div id="fourteen-card">
        <News sizeCard="" mockSections={MockArticle} />
      </div>
      <div id="fifteen-card" className="card-publicidad text-center">
        {/* PUBLICIDAD */}
        <Publicity publicityType="vertical" />
      </div>
      <div id="sixteen-card">
        <News sizeCard="" mockSections={MockArticle} />
      </div>
      <div id="seventeen-card">
        <News sizeCard="card-big" mockSections={MockArticle} />
      </div>
      <div id="eighteen-card" className="d-none d-md-block">
        <News sizeCard="" mockSections={MockArticle} />
      </div>
      <div id="nineteen-card" className="d-flex d-none d-lg-block">
        <Row className="justify-content-center">
          <News sizeCard="square" mockSections={MockArticle} />
          <News sizeCard="square" mockSections={MockArticle} />
        </Row>
        <Row className="justify-content-center">
          <News sizeCard="square" mockSections={MockArticle} />
          <News sizeCard="square" mockSections={MockArticle} />
        </Row>
      </div>
      <div id="twenty-card" className="d-none d-lg-block">
        <News sizeCard="card-big" mockSections={MockArticle} />
      </div>
    </Container>
  );
};

export default NewsList;
