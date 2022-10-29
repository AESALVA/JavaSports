import React from 'react'
import Container from 'react-bootstrap/Container'
import Footer from '../components/Footer'
import Landing from '../components/Landing'

const Main = (auth,
  login,
  logout,
  validate,
  setAuth) => {
  return (
    <Container fluid className="min-vh-100 d-flex ">
    <Landing login={login}
        logout={logout}
        setAuth={setAuth}
        validate={validate}
        auth={auth}
        />
    <Footer />
    </Container>
  )
}

export default Main