import React from 'react'
import { useState } from 'react'
import Button from "react-bootstrap/Button";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const LikeCounter = ({addLikes}) => {

const [counter, setCounter] = useState(0);
const addCounter = (c, q) => {
    setCounter(c + q);
    addLikes();
  };
  
  
  return (
    <div><Button variant="secondary" onClick={() => addCounter(counter, 1)} className="border-0">{counter>0 && counter}{' '}<FontAwesomeIcon icon={faThumbsUp} /></Button>
    </div>
  )
}

export default LikeCounter