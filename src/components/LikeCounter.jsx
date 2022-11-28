import React from 'react'
import { useState } from 'react'
import Button from "react-bootstrap/Button";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const LikeCounter = ({addLikes, comment, auth}) => {

const [counter, setCounter] = useState(0);
const addCounter = (c, q) => {
    setCounter(c + q);
    addLikes(comment);
    console.log(comment.likes.length)
  };
 
  return (
    <div><Button disabled={comment.likes.find(c=>c===auth.user)} variant="secondary" onClick={() => addCounter(counter, 1)} className="border-0">{comment.likes.length>0 && comment.likes.length}{' '}<FontAwesomeIcon icon={faThumbsUp} /></Button>
    </div>
  )
}

export default LikeCounter