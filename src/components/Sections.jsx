import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
  import { useState } from "react";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import LikeCounter from "./LikeCounter";

const Sections = ({ article, auth, setCommentsContainer }) => {
  const [comment, setComment] = useState({ comment: "", user: "" });
  const [showComment, setShowComment] = useState([]);
  
  const addLikes = (comment)=>{
    const aux = [...showComment];
    aux.map((a)=>{
     if(a.comment === comment.comment){ a.likes = [...a.likes, auth.user]}
    })
   setShowComment([...aux]);
   console.log(showComment)
  }

  const addCommentsContainer = ()=>{
    setCommentsContainer([...showComment, comment]);
  }
  const addComment = () => {
    setShowComment([...showComment, comment]);
    setComment({ comment: "", user: auth.user });
    addCommentsContainer();
  };
  return (
    <Container className="sections pb-5">
      <Card className="mx-auto text-center sections border-0 ">
        <Card.Title className="sections-fonts">{article.title}</Card.Title>
        <Card.Img variant="top" src={article.img} />
        <Card.Body>
          <Card.Text>{article.imgTitle}</Card.Text>
        </Card.Body>
        <Card.Body className="sections-fonts">{article.description}</Card.Body>
        <Card.Img variant="top" src={article.imgTwo} />
        <Card.Body className="sections-fonts">{article.synopsis}</Card.Body>
      </Card>
      <div className="commentArea-container sections">
        <h4 className="comments-title">
          All Comments {""}
          {showComment.length>0 && showComment.length}
        </h4>
        <input
          className="w-100 sections input-comments mt-3"
          placeholder="Ingrese su comentario"
          maxLength={100}
          type="text"
          value={comment.comment}
          onChange={(e) =>
            setComment({ comment: e.target.value, user: auth.user, likes:[] })
          }
        />
        <Button
          variant="secondary"
          className="mt-2"
          onClick={() =>comment.comment && addComment()}
        >
          <FontAwesomeIcon icon={faComment} /> Comentar
        </Button>
        {showComment.map((comment, i) => (
          <Row key={i} className="p-4">
            <Col>
              <FontAwesomeIcon icon={faUser} /> ({comment.user})
            </Col>
            <span> {comment.comment}</span>
            <span><LikeCounter addLikes={addLikes} comment={comment}/></span>
          </Row>
        ))}
      </div>
      
    </Container>
  );
};

export default Sections;
