import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import helppier from "../../Assets/Projects/helppier.png";
import cgi from "../../Assets/Projects/cgi.png";
import kn from "../../Assets/Projects/kn.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="primary-color">Jobs </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={helppier}
              title="Interactive Tutorials"
              description="Web Development of interactive tutorials that help the users with website browsing."
              frontend="ReactJS"
              backend="NodeJS"
              database="MongoDB"
              company="Helppier"
              companyLink="https://www.helppier.com/en/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cgi}
              title="Energy & Water ERP"
              description="Web Development of enterprise resource planning for water and energy companies."
              frontend="ExtJS"
              backend="Java, C"
              database="Oracle"
              company="CGI"
              companyLink="https://www.cgi.com/en"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kn}
              title="Seafreight Logistics"
              description="Web development of sea freight logistics to provide order management services."
              frontend="ReactJS"
              backend="Java"
              database="Oracle"
              company="Kuehne + Nagel"
              companyLink="https://home.kuehne-nagel.com/en/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
