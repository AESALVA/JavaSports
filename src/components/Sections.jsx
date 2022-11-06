import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";

const Sections = ({article}) => {
  const comments = [
    {
      user: "Eduardo",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam in,  placeat debitis provident quo, ",
    },
    {
      user: "Valentina",
      comment:
        "Lorem ipsum dolor sit amet consectetur  elit. Laboriosam in, adipisci placeat debitis provident quo, ",
    },
    {
      user: "Joaquin",
      comment:
        "Lorem ipsum dolor sit amet consectetur Laboriosam in, adipisci placeat debitis provident quo, ",
    },
  ];

  const [comment, setComment] = useState({comment:"", user:"Eduardo"});
  const [showComment, setShowComment] = useState([]);
  

const addComment = ()=>{  
setShowComment([...showComment, comment]);
setComment({comment:"",user:"eduardo"});
}

  return (
    <Container className="sections pb-5">
      <Card className="mx-auto text-center sections border-0 ">
        <Card.Title className="sections-fonts">
          {article.title}
        </Card.Title>
        <Card.Img variant="top" src={article.img} />
        <Card.Body>
          <Card.Text>
            {article.imgTitle}
          </Card.Text>
        </Card.Body>
        <Card.Body className="sections-fonts">
          {article.description}
        </Card.Body>
        <Card.Img variant="top" src={article.imgTwo} />
        <Card.Body className="sections-fonts">
          {article.synopsis}
        </Card.Body>
      </Card>
      <div className="commentArea-container sections">
        <h4 className="comments-title">
          All Comments {""}
          {showComment.length}
        </h4>
        <input
          className="w-100 sections input-comments mt-3"
          placeholder="Ingrese su comentario"
          type="text"
          value={comment.comment}
          onChange={(e)=>setComment({comment: e.target.value, user:"Eduardo"})} 
        />
        <Button
          variant="secondary"
          className="mt-2"
          onClick={() => addComment()}
          >
          <FontAwesomeIcon icon={faComment} /> Comentar
        </Button>
        {showComment.map((comment, i) => (
          <Row key={i} className="p-4">
            <Col>
              <FontAwesomeIcon icon={faUser} /> ({comment.user})
            </Col>
            <span> {comment.comment}</span>
          </Row>
        ))}
      </div>
    </Container>
  );
};

export default Sections;
