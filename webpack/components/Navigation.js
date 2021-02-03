import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import Social from './Social';

// Using Navbar fixed at top it don't has got the space where it is located.
// If you want to make that space busy set position = relative but the navbar won't scroll with the page
function Navigation(props){
  console.log("App Hello World!")
  return <>
          <Navbar collapseOnSelect={props.collapseOnSelect} bg="white" fixed="top" 
            expand="lg" id="mainNav">
            <Container className="nav-container" fluid={true}>
              <Navbar.Brand href="#page-top" className="navItem nav-brand">
                <img className="d-inline-block align-top" src={props.logo} alt=""/>
              </Navbar.Brand>
              <div className="social-wrapper">
                <Social />
              </div>
              <Navbar.Toggle label={props.menu} aria-controls="navbarResponsive"/>
              <Navbar.Collapse id="navbarResponsive" className="navItem">
                <Nav className="nav-menu">
                  <Nav.Link className="js-scroll-trigger" href="#about">
                    About
                  </Nav.Link>
                  <Nav.Link className="js-scroll-trigger" href="#portfolio">
                    Portfolio
                  </Nav.Link>
                  <Nav.Link className="js-scroll-trigger" href="#hobbies">
                    Hobbies &amp; Fun
                  </Nav.Link>
                  <Nav.Link href="#writeme">
                    Get In Touch
                  </Nav.Link>
                  <div className="nav-menu-social social-wrapper">
                    <Social />
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>;   
}




export default Navigation;