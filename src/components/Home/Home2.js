import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import techPic from "../../Assets/home2pic.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              Graduated in <b className="primary-color">Computer Engineering</b> and master in <b className="primary-color">Software Engineering</b>.
              <br/>
              <br/>
              This learning had a great impact on defining myself as a <b className="primary-color">proactive</b> person
              who has <b className="primary-color">responsibility</b> and <b className="primary-color">determination</b> to achive results with
              <b className="primary-color"> positivity</b> and <b className="primary-color">perseverance</b>.
              <br/>
              <br/>
              I <b className="primary-color">value the challenge</b> of meeting new people and job opportunities that lead
              to career progression and, where I can <b className="primary-color">interact and work as a team</b>.
              <br/>
              <br/>
              <b className="primary-color">Web development</b> is my area of interest, using mainly the world-renowned 
              <b className="primary-color"> JavaScript</b> and <b className="primary-color">Java</b>.  
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={techPic} className="img-fluid home-avatar" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="primary-color">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vascolusitan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vasco-lusitano-55897823a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vascolusitano12"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
