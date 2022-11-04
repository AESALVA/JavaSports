import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardGroup from "react-bootstrap/CardGroup";

const SectionsList = () => {
  return (
    <>
      <Container className="ContainerSectionsList">
        <div className="SectionOne ">
          <Card>
            <Card.Img variant="top" src="/img/imgSection.webp" />
          </Card>
        </div>
        <div className="SectionTwo">
          <Card className="SectionCard ">
            <Card.Img variant="top" src="/img/imgSection.webp" />
          </Card>
          <Card className="SectionCard ">
            <Card.Img variant="top" src="/img/imgSection.webp" />
          </Card>
        </div>
      </Container>
      <Container className="ContainerGridSections">
        <CardGroup className="p-2 ">
          <Card className="m-2 ">
            <Card.Img variant="top" src="/img/imgSection.webp" />
          </Card>
          <Card className="m-2 ">
            <Card.Img variant="top" src="/img/imgSection.webp" />
          </Card>
          <Card className="m-2">
            <Card.Img variant="top" src="/img/imgSection.webp" />
          </Card>
        </CardGroup>
        <CardGroup className="p-2">
          <Card className="m-2">
            <Card.Img variant="top" src="/img/imgSection.webp" />
          </Card>
          <Card className="m-2">
            <Card.Img variant="top" src="/img/imgSection.webp" />
          </Card>
          <Card className="m-2">
            <Card.Img variant="top" src="/img/imgSection.webp" />
          </Card>
        </CardGroup>
      </Container>
      <Container className="ContainerSectionsList">
        <div className="SectionOnePlus">
          
          <Card className="SectionCard ">
            <Card.Img variant="top" src="/img/imgSection.webp" />
          </Card>
          <Card className="SectionCard ">
            <Card.Img variant="top" src="/img/imgSection.webp" />
          </Card>
        </div>
        <div className="SectionTwoPlus">
        <Card>
            <Card.Img variant="top" src="/img/imgSection.webp" />
          </Card>
        </div>
      </Container>
    </>
  );
};

export default SectionsList;
