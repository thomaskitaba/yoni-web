// import { useState, useEffect } from "react";
import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from '../assets/img/burger-thursday.png';
export const Banner = () => {
    return (
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">

            <Col XS={12} md={6} xl={7}>
              <span className="tagline">Education Reimagined</span>
              <h1><span className="wrap">
                <ul className='moto'>
                  <h1>We ....</h1>
                  <li>Empower Educators and Transform Schools</li>
                  <li>Build Bridges to Educational Equity</li>
                  <li>Unlock Every learners Potential</li>
                  <li>Education Reimagined</li>
                </ul>
              </span></h1>
              <button href="#footer" onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle /></button>
            </Col>
            <Col>
              <img src={headerImg} alt="Header Img" />
          </Col>

          </Row>
        </Container>
      </section>
    )
}
