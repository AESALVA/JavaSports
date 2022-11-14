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
      <News id="one-card" sizeCard="" mockSections={MockArticle} view="Home" />
      <News id="two-card" sizeCard="" mockSections={MockArticle} view="Home" />
      <News
        id="three-card"
        sizeCard=""
        mockSections={MockArticle}
        view="Home"
      />
      <News id="four-card" sizeCard="" mockSections={MockArticle} view="Home" />
      {/* PUBLICIDAD */}
      {/* <Publicity id="five-card" publicityType="horizontal" /> */}
      <News id="five-card" sizeCard="" mockSections={MockArticle} view="Home" />
      <News id="six-card" sizeCard="" mockSections={MockArticle} view="Home" />
      <News
        id="seven-card"
        sizeCard="card-big"
        mockSections={MockArticle}
        view="Home"
      />
      <News
        id="eight-card"
        sizeCard=""
        mockSections={MockArticle}
        view="Home"
      />
      <News id="nine-card" sizeCard="" mockSections={MockArticle} view="Home" />

      {/* PUBLICIDAD */}
      {/* <Publicity id="ten-card" publicityType="vertical" /> */}
      <News id="ten-card" sizeCard="" mockSections={MockArticle} view="Home" />

      <News
        id="eleven-card"
        sizeCard=""
        mockSections={MockArticle}
        view="Home"
      />
      <News
        id="twelve-card"
        sizeCard=""
        mockSections={MockArticle}
        view="Home"
      />
      <News
        id="thirteen-card"
        sizeCard=""
        mockSections={MockArticle}
        view="Home"
      />

      <News
        id="fourteen-card"
        sizeCard=""
        mockSections={MockArticle}
        view="Home"
      />

      {/* PUBLICIDAD */}
      {/* <Publicity id="fifteen-card" publicityType="vertical" /> */}
      <News
        id="fifteen-card"
        sizeCard=""
        mockSections={MockArticle}
        view="Home"
      />

      <News
        id="sixteen-card"
        sizeCard=""
        mockSections={MockArticle}
        view="Home"
      />
      <News
        id="seventeen-card"
        sizeCard="card-big"
        mockSections={MockArticle}
        view="Home"
      />
      <News
        id="eighteen-card"
        sizeCard=""
        mockSections={MockArticle}
        view="Home"
      />
      {/* </div> */}
      <div id="nineteen-card" className="d-flex d-none d-lg-block">
        <Row className="justify-content-center">
          <News sizeCard="square" mockSections={MockArticle} view="Home" />
          <News sizeCard="square" mockSections={MockArticle} view="Home" />
        </Row>
        <Row className="justify-content-center">
          <News sizeCard="square" mockSections={MockArticle} view="Home" />
          <News sizeCard="square" mockSections={MockArticle} view="Home" />
        </Row>
      </div>
      <News
        id="twenty-card"
        sizeCard="card-big"
        mockSections={MockArticle}
        view="Home"
      />
    </Container>
  );
};

export default NewsList;
