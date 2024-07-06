import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiIntellijidea,
  SiGitlab,
  SiRedhatopenshift,
  SiDocker,
  SiKubernetes,
  SiAmazonaws
} from "react-icons/si";
import { DiGit, DiGithubBadge, DiBitbucket } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
        <p>GitLab</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
        <p>GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBitbucket />
        <p>BitBucket</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <p>Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedhatopenshift />
        <p>Openshift</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
        <p>Kubernets</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <p>AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
        <p>IntelliJ</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p>VS Code</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
