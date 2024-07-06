import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import FullTimeJobs from "./jobs/FullTimeJobs";
import SideJobs from "./jobs/SideJobs";

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
        <FullTimeJobs />
        <div className="fading-line-container">
          <div className="fading-line" />
        </div>
        <h1 className="project-heading">
          Side <strong className="primary-color">Jobs </strong>
        </h1>
        <SideJobs />
      </Container>
    </Container>
  );
}

export default Projects;
