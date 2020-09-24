import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import '../../App.css'

const Contact = () => {

  const [wordState, setWordState] = useState({
    words: ['', 'Critique', 'Tech', 'Oppertunity', 'Inspiration', 'Buisness'],
    word: 'My Portfolio'
  })

  setTimeout(function () {
    let indexVal = Math.floor(Math.random() * 4)
    console.log(indexVal)
    // setWordState({...wordState, word: wordState.words[indexVal]})  
    console.log('hit') }, 5000);

  return (
    <>
      <Container>
        <div className="main">
          <Form>
            <h1>Contact Me About (<span className="portfolioChange">{wordState.word}</span>)</h1>
            <FormGroup>
              <Label for="exampleEmail">Your Email:</Label>
              <Input type="email" name="email" id="exampleEmail" />
            </FormGroup>

            <FormGroup>
              <Label for="subject">Subject:</Label>
              <Input type="text" name="subject" id="subject" />
            </FormGroup>

            <FormGroup>
              <Label for="message">Message:</Label>
              <Input type="textarea" name="message" id="message" style={{ height: "150px" }} />
            </FormGroup>

            <Row>

              <Col md="6">
                <FormGroup>
                  <Label for="exampleFile">File: (Optional)</Label>
                  <Input type="file" name="file" id="exampleFile" />
                  <FormText color="muted">
                    Estimated Response Time: 1-3 Days.
           </FormText>
                </FormGroup>
              </Col>

              <Col md="6" style={{ textAlign: 'right' }}>
                <Button className="emailBtn">Send Email</Button>
              </Col>

            </Row>
          </Form>
        </div>
        {/* <Col md="6"> Hello </Col>
          <Col md="6"> I'm </Col> */}

      </Container>


    </>
  )
}

export default Contact