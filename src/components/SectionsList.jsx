import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";

const SectionsList = ({ mockSections }) => {
  return (
    <Container>
      <Container className="ContainerSectionsList text-center">
        <div className="SectionOne ">
          <Card>
            <Card.Img variant="top" src="/img/imgSection.webp" />
            <Card.Title>{mockSections.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.{" "}
              <Link to="/SectionsContainer">Ver Más</Link>
            </Card.Text>
          </Card>
        </div>
        <div className="SectionTwo">
          <Card className="SectionCard ">
            <Card.Img variant="top" src="/img/imgSection.webp" />
            <Card.Title>Article Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.{" "}
              <Link to="/SectionsContainer">Ver Más</Link>
            </Card.Text>
          </Card>
          <Card className="SectionCard ">
            <Card.Img variant="top" src="/img/imgSection.webp" />
            <Card.Title>Article Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.{" "}
              <Link to="/SectionsContainer">Ver Más</Link>
            </Card.Text>
          </Card>
        </div>
      </Container>
      <Container className="ContainerGridSections text-center">
        <CardGroup className="p-2">
          <Card className="m-2 Card">
            <Card.Img variant="top" src="/img/imgSection.webp" />
            <Card.Title>Article Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.{" "}
              <Link to="/SectionsContainer">Ver Más</Link>
            </Card.Text>
          </Card>
          <Card className="m-2 Card">
            <Card.Img variant="top" src="/img/imgSection.webp" />
            <Card.Title>Article Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.{" "}
              <Link to="/SectionsContainer">Ver Más</Link>
            </Card.Text>
          </Card>
          <Card className="m-2 Card">
            <Card.Img variant="top" src="/img/imgSection.webp" />
            <Card.Title>Article Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.{" "}
              <Link to="/SectionsContainer">Ver Más</Link>
            </Card.Text>
          </Card>
        </CardGroup>
        <CardGroup className="p-2 Card">
          <Card className="m-2 Card">
            <Card.Img variant="top" src="/img/imgSection.webp" />
            <Card.Title>Article Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.{" "}
              <Link to="/SectionsContainer">Ver Más</Link>
            </Card.Text>
          </Card>
          <Card className="m-2 Card">
            <Card.Img variant="top" src="/img/imgSection.webp" />
            <Card.Title>Article Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.{" "}
              <Link to="/SectionsContainer">Ver Más</Link>
            </Card.Text>
          </Card>
          <Card className="m-2 Card">
            <Card.Img variant="top" src="/img/imgSection.webp" />
            <Card.Title>Article Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.{" "}
              <Link to="/SectionsContainer">Ver Más</Link>
            </Card.Text>
          </Card>
        </CardGroup>
      </Container>
      <Container className="ContainerSectionsList text-center">
        <div className="SectionOnePlus">
          <Card className="SectionCard ">
            <Card.Img variant="top" src="/img/imgSection.webp" />
            <Card.Title>Article Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.{" "}
              <Link to="/SectionsContainer">Ver Más</Link>
            </Card.Text>
          </Card>
          <Card className="SectionCard ">
            <Card.Img variant="top" src="/img/imgSection.webp" />
            <Card.Title>Article Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.{" "}
              <Link to="/SectionsContainer">Ver Más</Link>
            </Card.Text>
          </Card>
        </div>
        <div className="SectionTwoPlus">
          <Card>
            <Card.Img variant="top" src="/img/imgSection.webp" />
            <Card.Title>Article Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.{" "}
              <Link to="/SectionsContainer">Ver Más</Link>
            </Card.Text>
          </Card>
        </div>
      </Container>
    </Container>
  );
};

export default SectionsList;
