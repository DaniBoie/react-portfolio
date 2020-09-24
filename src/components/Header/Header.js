import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from "../../pages/Home"
import Portfolio from "../../pages/Portfolio"
import Contact from '../../pages/Contact'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import '../../App.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div className="backdrop">
        <Navbar color="light" light expand="md">
          <NavbarBrand>Daniel Ayala</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink><Link to="/" className='link'>Home</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/portfolio" className='link'>Portfolio</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/contact" className='link'>Contact</Link></NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  )
}

export default App