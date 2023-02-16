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
import LikeCounter from "./LikeCounter";
import validator from "validator";
import { useEffect } from "react";

const Sections = ({ article, auth, commentsContainer }) => {
  const [comment, setComment] = useState({
    comment: "",
    user: "",
    likes: [],
    id: "",
  });
  const [showComment, setShowComment] = useState([]);

  const addLikes = (comment) => {
    const aux = [...showComment];
    aux.map((a) => {
      if (a.comment === comment.comment) {
        a.likes = [...a.likes, auth.user];
        if (!a._id) {
          fetch(`https://java-sports-back.vercel.app/comments/search`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(a),
          })
            .then((res) => res.json())
            .then((json) =>
              fetch(
                "https://java-sports-back.vercel.app/comments/update/" + json,
                {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    comment: a.comment,
                    user: a.user,
                    likes: a.likes,
                  }),
                }
              )
            );
        } else {
          fetch(
            "https://java-sports-back.vercel.app/comments/update/" + a._id,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                comment: a.comment,
                user: a.user,
                likes: a.likes,
              }),
            }
          );
        }
      }
      return a;
    });
    setShowComment([...aux]);
  };

  const addComment = () => {
    setShowComment([...showComment, comment]);
    setComment({ comment: "", user: auth.user, likes: [], id: article._id });

    fetch("https://java-sports-back.vercel.app/comments/newComment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    });
  };

  const validateComments = (n) => {
    return (
      validator.matches(n, "^[a-zA-Z ]*$") &&
      validator.isLength(n, { min: 4, max: 100 })
    );
  };

  const commentsLength = showComment.filter(
    (comment) => comment.id === article._id
  ).length;

  useEffect(() => {
    setShowComment(commentsContainer);
  }, [commentsContainer]);

  return (
    <Container className="sections py-5">
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
          {commentsLength > 0 && commentsLength}
        </h4>
        <input
          className="w-100 sections input-comments mt-3"
          placeholder="Ingrese su comentario"
          maxLength={100}
          type="text"
          value={comment.comment}
          onChange={(e) =>
            setComment({
              comment: e.target.value,
              user: auth.user,
              likes: [],
              id: article._id,
            })
          }
        />
        <Button
          variant="secondary"
          className="mt-2"
          onClick={() => validateComments(comment.comment) && addComment()}
        >
          <FontAwesomeIcon icon={faComment} /> Comentar
        </Button>
        {showComment.map(
          (comment, i) =>
            comment.id === article._id && (
              <Row key={i} className="p-4">
                <Col>
                  <FontAwesomeIcon icon={faUser} /> ({comment.user})
                </Col>
                <span> {comment.comment}</span>
                <span>
                  <LikeCounter
                    addLikes={addLikes}
                    comment={comment}
                    auth={auth}
                    setShowComment={setShowComment}
                    showComment={showComment}
                  />
                </span>
              </Row>
            )
        )}
      </div>
    </Container>
  );
};

export default Sections;
