import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

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

  return (
    <div>
      <Button
        disabled={comment.likes.find((c) => c === auth.user)}
        variant="secondary"
        onClick={() => addCounter(counter, 1)}
        className="border-0"
      >
        {comment.likes.length > 0 && comment.likes.length}{" "}
        <FontAwesomeIcon icon={faThumbsUp} />
      </Button>{" "}
      {auth.role === "admin" && (
        <Button variant="secondary" onClick={() => deleteComment(comment._id)}>
          <FontAwesomeIcon icon={faTrashCan} />
        </Button>
      )}
    </div>
  );
};

export default LikeCounter;
