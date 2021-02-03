import React from 'react';
import {Container, Col, Row, Button} from 'react-bootstrap';


function Overview(){
  console.log("Show Carmine Sacco!")
  return <header className="overview">
          <Container className="container-port" fluid={true}>
            <Row>
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
                  <div className="button-3d-wrapper">
                    <div className="button-shadow"></div>
                    <Button className="true-button" href="#contact">
                      Get in touch
                    </Button>
                  </div>
                </div>
              </Col>
              <Col className="foto">
                <div className="foto-wrapper">
                  <img className="foto" src="assets/images/mypicture.svg" alt=''/>
                </div>
              </Col>
            </Row>
          </Container>
        </header>;
}


export default Overview;