import React from 'react';
import {Col, Container, Nav, Navbar, Row} from 'react-bootstrap';


function Navigation(props){
  console.log("App Hello World!")
  return <>
          <Navbar collapseOnSelect={props.collapseOnSelect} bg="white" fixed="top" 
            expand="lg" id="mainNav">
            <Container fluid={true}>
              <Row className="rowNav">
                <Col xs={6} md={6} lg={2} className="colNav">
                  <Navbar.Brand href="#page-top" className="navItem">
                    <img className="d-inline-block align-top" src={props.logo} alt=""/>
                  </Navbar.Brand>
                </Col>
                <Col xs={6} md={6} lg className="colNav">
                  <Navbar.Toggle label={props.menu} aria-controls="navbarResponsive"/>
                  <Navbar.Collapse id="navbarResponsive" className="navItem">
                    <Col xs={12} md={8} lg={8}>
                      <Nav className="justify-content-center ml-auto">
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
                    </Col>
                    <Col xs={12} md={4} lg>
                      <Nav className="justify-content-end">
                        <p>Linkedin</p>
                        <p>Instagram</p>
                        <p>Github</p>
                      </Nav>
                    </Col>
                    
                  </Navbar.Collapse>
                </Col>
              </Row>
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