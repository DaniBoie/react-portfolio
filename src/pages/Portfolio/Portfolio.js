import React from 'react'

import PortfolioPage from '../../components/portfolioCard/porfolioCard'
import { Container, Row, Col } from 'reactstrap';
import TrackImg from '../../assets/images/LifeFix.png'
import SenseImg from '../../assets/images/Sensify.png'
import PlannerImg from '../../assets/images/EmployeeManager.png'
import BeeImg from '../../assets/images/BeePlanner.png'

let projects = [
  {
    name: 'LifeTrack',
    img: TrackImg,
    role: 'Full-Stack Developer / Group Manager',
    bio: "LifeTrack was an application built to be a convienent daily life tracking app. With LifeTrack, you can track your past daily thoughts and actions while always keeping track of what's ahead.",
    contributers: ['Bao Nguyen, ', ' Adam Madueno'],
    gitLink: 'https://github.com/DaniBoie/lifeTrack',
    liveLink: 'https://afternoon-stream-93666.herokuapp.com/'
  },
  {
    name: 'Sensify',
    img: SenseImg,
    role: 'Backend Developer',
    bio: 'This project was my first front-end web application, It uses Spotify and Weather API\'s to create a custom playlist that takes into account mood, location, and weather.',
    contributers: ['Matthew Javier, ', 'Danielle Hillman, ', 'Adam Madueno, ', 'Daniel Le']
  },
  {
    name: 'Employee Manager',
    role: 'Developer',
    img: PlannerImg,
    bio: 'The Employee Manager app was built using JS and SQL to manage employees in a workplace, whether that looks like hiring on a new member, or changing existing member\'s role. '
  },
  {
    name: 'Work Day Scheduler',
    role: 'Developer',
    img: BeeImg,
    bio: 'This is a Day Planner for the busy, BUSY developer work day. This project was put together using jquery and local storage within my first month of learning Web Development.'
  }
]

const Portfolio = () => {
  return (
    <>
      <Container>
        <h1 className='projectTitle'>My Proudest Projects To Date:</h1>
        <Row className='projectCards'>
          {
            projects.map(project => <PortfolioPage project={project} />)
          }
        </Row>

      </Container>
    </>
  )
}

export default Portfolio