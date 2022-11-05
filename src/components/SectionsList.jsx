import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardGroup from "react-bootstrap/CardGroup";

const SectionsList = () => {
  return (
    <Container>
      <Container className="ContainerSectionsList text-center">
        <div className="SectionOne ">
          <Card>
            <Card.Img variant="top" src="/img/imgSection.webp" />
            <Card.Title>Article Title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          </Card>
        </div>
        <div className="SectionTwo">
          <Card className="SectionCard ">
            <Card.Img variant="top" src="/img/imgSection.webp" />
            <Card.Title>Article Title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          </Card>
          <Card className="SectionCard ">
            <Card.Img variant="top" src="/img/imgSection.webp" />
            <Card.Title>Article Title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
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
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          </Card>
          <Card className="m-2 Card">
            <Card.Img variant="top" src="/img/imgSection.webp" />
            <Card.Title>Article Title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          </Card>
          <Card className="m-2 Card">
            <Card.Img variant="top" src="/img/imgSection.webp" />
            <Card.Title>Article Title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          </Card>
        </CardGroup>
        <CardGroup className="p-2 Card">
          <Card className="m-2 Card">
            <Card.Img variant="top" src="/img/imgSection.webp" />
            <Card.Title>Article Title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          </Card>
          <Card className="m-2 Card">
            <Card.Img variant="top" src="/img/imgSection.webp" />
            <Card.Title>Article Title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          </Card>
          <Card className="m-2 Card">
            <Card.Img variant="top" src="/img/imgSection.webp" />
            <Card.Title>Article Title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
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
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          </Card>
          <Card className="SectionCard ">
            <Card.Img variant="top" src="/img/imgSection.webp" />
            <Card.Title>Article Title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          </Card>
        </div>
        <div className="SectionTwoPlus">
        <Card>
            <Card.Img variant="top" src="/img/imgSection.webp" />
            <Card.Title>Article Title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          </Card>
        </div>
      </Container>
    </Container>
  );
};

export default SectionsList;
