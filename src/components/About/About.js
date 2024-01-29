import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import Toolstack from "./Toolstack";
import MyTimeline from "./MyTimeline";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={6}
            style={{
              justifyContent: "center",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              How I became a{" "}
              <strong className="primary-color">Software Engineer</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <MyTimeline />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="primary-color">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="primary-color">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
