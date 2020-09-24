import React from 'react'
import '../../App.css'
import { Container, Row, Col } from 'reactstrap';
import UseAnimations from "react-useanimations";
import github from 'react-useanimations/lib/github'
import explore from 'react-useanimations/lib/explore'

const portfolioCard = (props) => {

  return (
    <>
      <Col md="6" className="cardColor">

        <div id="cardStyle" className="card cardStyle">
          <div class="card-text">
            <h1>{props.project.name}:</h1>
            <div className="card-image center"><img className="projectImg" src={props.project.img} alt="ProjectImage" /></div>
            <h4>Role In Project: <br /> {props.project.role}</h4>
            <hr />
            <p>{props.project.bio}</p>
            <span className="date">Contributers: {props.project.contributers || "Solo Project"}</span>
          </div>

          <Row>
            <Col md="6" className="center">
              <div className="links">
                <a href={props.project.gitLink} target="blank">
                  <UseAnimations className="fix" animation={github} size={56} />
                  <p><strong>GitHub Link</strong></p>
                </a>
              </div>
            </Col>

            <Col md="6" className="center">
              <div className="links">
                <a href={props.project.liveLink} target="blank">
                  <UseAnimations className="fix" animation={explore} size={56} />
                  <p><strong>Live Link</strong></p>
                </a>
              </div>
            </Col>

          </Row>

        </div>
      </Col>
    </>
  )
}

export default portfolioCard