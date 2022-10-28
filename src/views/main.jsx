import React from 'react'
import Container from 'react-bootstrap/Container'
import Footer from './Footer'
import Landing from './Landing'

const Main = () => {
  return (
    <Container fluid className="min-vh-100 d-flex ">
    <Landing />
    <Footer />
    </Container>
  )
}

export default Main