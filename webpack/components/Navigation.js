import React from 'react';
import {Col, Container, Nav, Navbar, Row} from 'react-bootstrap';
import Social from './Social';

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
          <header class="masthead">
            <div class="container">
              <div class="masthead-subheading">Welcome To Our Studio!</div>
              <div class="masthead-heading text-uppercase">
                It's Nice To Meet You
                </div>
              <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" 
                href="#services">
                Tell Me More
              </a>
            </div>
          </header>
        </>;   
}




export default Navigation;