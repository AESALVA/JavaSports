import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import "../styles/LikeCounter.css";

const LikeCounter = ({
  addLikes,
  comment,
  auth,
  setShowComment,
  showComment,
}) => {
  const [counter, setCounter] = useState(0);
  const addCounter = (c, q) => {
    setCounter(c + q);
    addLikes(comment);
  };

  const deleteComment = (id) => {
    if (!comment._id) {
      fetch(`https://java-sports-back.vercel.app/comments/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
      })
        .then((res) => res.json())
        .then((json) =>
          fetch(`https://java-sports-back.vercel.app/comments/delete/${json}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          })
        );
    } else {
      fetch(`https://java-sports-back.vercel.app/comments/delete/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
    }

    const aux = [...showComment];
    const delAux = aux.filter((a) => a !== comment);
    setShowComment([...delAux]);
  };

  const [showLikes, setShowLikes] = useState([]);

  const showList = () => {
    if (!showLikes) {
      setShowLikes([]);
    } else {
      setShowLikes(comment.likes);
    }
  };
  return (
    <div onMouseEnter={() => showList()} onMouseLeave={() => setShowLikes([])}>
      <Button
        disabled={comment.likes.find((c) => c === auth.user)}
        variant="secondary"
        onClick={() => addCounter(counter, 1)}
      >
        {comment.likes.length > 0 && comment.likes.length}{" "}
        <FontAwesomeIcon icon={faThumbsUp} />
      </Button>{" "}
      <ul className="LikeList">
        {showLikes.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
      {auth.role === "admin" && (
        <Button
          className="btn-red btn-red-border"
          onClick={() => deleteComment(comment._id)}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </Button>
      )}
    </div>
  );
};

export default LikeCounter;
