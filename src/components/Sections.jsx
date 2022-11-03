import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";




const Sections = () => {
  const comments = [
    {user: "Eduardo", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam in,  placeat debitis provident quo, "},
    {user: "Valentina", comment: "Lorem ipsum dolor sit amet consectetur  elit. Laboriosam in, adipisci placeat debitis provident quo, "},
    {user: "Joaquin", comment: "Lorem ipsum dolor sit amet consectetur Laboriosam in, adipisci placeat debitis provident quo, "},
  ];

  return (
    <Container className='sections pb-5'>
      <Card className='mx-auto text-center sections border-0 '>
        <Card.Title className='sections-fonts'>
Gabriel Jesus is not the perfect striker but he may be just perfect for Arsenal</Card.Title>
        <Card.Img  variant="top" src="/img/imgSection.webp" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Body className='sections-fonts'>Five-nil. But then, Manchester City just look so strong at the moment. Still: five-nil. But that injury to Bukayo Saka, how much of a blow could that be? Anyway, it was five-nil. But those Nottingham Forest chances, the Jesse Lingard shot where Gabriel Magalhães basically passes it straight to him, one day those are going to cost you. And yet, check the scoreboard, girls and boys: five-nil.
It is the eternal gift of Arsenal fans to be able to identify the potential anxiety in virtually any situation, however favourable or triumphant. Pleasure is simply misery deferred. Most people look for crumbs of comfort; Arsenal fans look for crumbs of concern, scan the fixture list for oncoming hazards, scan every horizon for grey clouds. And so, even a routine and rampant 5-0 victory comes with its own quantum of unease.
</Card.Body>
<Card.Img  variant="top" src="/img/imgSection2.webp" />
<Card.Body className='sections-fonts'>Of course, as anyone who has seen Jesus play will be able to tell you, this is not all you get. One of the reasons it feels unfair judging Jesus by the output of a conventional striker is that his input is not that of a conventional striker. Of his 72 touches, only 16 came in the Forest penalty area. Thirteen were in his own half. The vast majority, in fact, were on the left wing, with another little cluster around the left edge of the centre circle.
   He attempted more tackles than any other Arsenal player. Jesus is, in effect, a ball-winning wide midfielder who does striking for a little extra cash.</Card.Body>
      </Card>
      <div className='commentArea-container sections'>
        <h4 className='comments-title'>All Comments {""}{comments.length}</h4>
      <input className="w-100 sections input-comments mt-3" placeholder="Ingrese su comentario" type="text" />
      <Button variant='secondary' className='mt-2' onClick={() => console.log("works")}><FontAwesomeIcon icon={faComment} />{' '}Comentar</Button>
      {comments.map((comment, i) => (
          <Row key={i} className="p-4">
            <Col><FontAwesomeIcon icon={faUser} />{' '}({comment.user})</Col>
            <span> {comment.comment}</span>
          </Row>
        ))}
      </div>
      </Container>
  )
}

export default Sections