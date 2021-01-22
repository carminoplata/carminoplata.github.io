import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';


function Navigation(props){
  console.log("App Hello World!")
  return <>
          <Navbar collapseOnSelect={props.collapseOnSelect} bg="white" fixed="top" 
            expand="lg" id="mainNav">
            <Container>
              <Navbar.Brand href="#page-top">
                <img className="d-inline-block align-top" src={props.logo} alt=""/>
              </Navbar.Brand>
              <Navbar.Toggle label={props.menu} aria-controls="navbarResponsive"/>
              <Navbar.Collapse id="navbarResponsive">
                <Nav className="ml-auto">
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
                    Write Me
                  </Nav.Link>
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