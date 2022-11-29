import React from 'react'
import { useState } from 'react'
import Button from "react-bootstrap/Button";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";



const LikeCounter = ({addLikes, comment, auth}) => {

const [counter, setCounter] = useState(0);
const addCounter = (c, q) => {
    setCounter(c + q);
    addLikes(comment);
    console.log(comment.likes.length)
  };

  const deleteComment = (id)=>{
    fetch(`https://java-sports-back.vercel.app/comments/delete/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
    console.log(id)
  }
 
  return (
    <div><Button disabled={comment.likes.find(c=>c===auth.user)} variant="secondary" onClick={() => addCounter(counter, 1)} className="border-0">{comment.likes.length>0 && comment.likes.length}{' '}<FontAwesomeIcon icon={faThumbsUp} /></Button>
    {' '}{auth.role === "admin" && <Button variant='secondary' onClick={()=>deleteComment(comment._id) } ><FontAwesomeIcon icon={faTrashCan} /></Button>}
    </div>
  )
}

export default LikeCounter