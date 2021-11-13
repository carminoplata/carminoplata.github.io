import React from 'react';
import {Container, Col, Row, Button} from 'react-bootstrap';

function Overview(){
  console.log("Show Carmine Sacco!")
  return <header className="overview">
          <Container className="container-port" fluid={true}>
            <Row id="presentation">
              <Col className="description">
                <div className="desc-wrapper">
                  <h1 className="heading">
                    Hi, I'm Carmine, a Tech Pioneer!
                  </h1>
                  <div className="desc">
                    I’m a polyglot Software Engineer always looking for new opportunities 
                    to innovate and create new ideas. <br/>
                    My motto is: <em>"If you can dream it, I can make it happen"</em>
                  </div>
                  <div id="buttons-group">
                    <div className="button-3d-wrapper" id="btn-get-in-touch">
                      <div className="button-shadow"></div>
                      <Button className="true-button" href="mailto:carmine.sacco91@icloud.com">
                        Get in touch
                      </Button>
                    </div>
                    <div className="button-3d-wrapper" id="btn-resume">
                      <div className="button-shadow"></div>
                      <Button className="true-button" href="assets/docs/Resume.pdf">
                        Get my Resume
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="foto">
                <div className="foto-wrapper">
                  <img className="foto" src="assets/images/picture.svg" alt=''/>
                </div>
              </Col>
            </Row>
            <Row>
              <Col id="col-logo">
                <div id="logo-containers">
                  <div id="cpp" className="logo-dev">
                     <img alt="C++ Logo" 
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/64px-ISO_C%2B%2B_Logo.svg.png"/>          
                  </div>
                  <div id="python" className="logo-dev">
                    <img alt="Python Logo" 
                         src="assets/images/python.png"/>       
                  </div>
                  <div id="javascript" className="logo-dev">
                    <img alt="JavaScript Logo" 
                         src="assets/images/javascript.png"/>
                  </div>
                  <div id="qt" className="logo-dev">
                    <img alt="Qt Logo" 
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Qt_logo_2016.svg/64px-Qt_logo_2016.svg.png"/>
                  </div>
                  <div id="react" className="logo-dev">
                    <img alt="React Logo"
                         src="assets/images/react.png"/>
                  </div>
                  <div id="git">
                    <img alt="Git Logo" 
                         src="assets/images/git.png"/>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </header>;
}


export default Overview;

/*<div id="logo-containers">
                  <div id="teoresi">
                    <img className="logo" alt="Teoresi spa" src="assets/images/teoresi.svg"/>
                  </div>
                  <div id="magnetimarelli">
                    <img className="logo" alt="Magneti Marelli spa" src="assets/images/magnetimarelli.png"/>
                  </div>
                  <div id="honeywell">
                    <img className="logo" alt="Honeywell International sro" 
                         src="assets/images/honeywell.png"/>
                  </div>
                </div>*/