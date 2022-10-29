import { Button } from "react-bootstrap"
import { useState } from "react";
import LoginModal from "./LoginModal";




const Landing = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
  <LoginModal />
  </div>
  )
}

export default Landing