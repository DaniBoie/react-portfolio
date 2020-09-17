import React from 'react'
import { Container, Row, Col } from 'reactstrap';


const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md="6"> Hello </Col>
          <Col md="6"> I'm </Col>
        </Row>
        <Row>
          <Col md="6"> Daniel </Col>
          <Col md="6"> Ayala </Col>
        </Row>
      </Container>
    </>  )
}

export default Home