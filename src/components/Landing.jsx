import { Button } from "react-bootstrap"
import { useState } from "react";
import LoginModal from "./LoginModal";




const Landing = (auth,
  login,
  logout,
  validate,
  setAuth) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
  <LoginModal login={login}
        logout={logout}
        setAuth={setAuth}
        validate={validate}
        auth={auth} />
  </div>
  )
}

export default Landing