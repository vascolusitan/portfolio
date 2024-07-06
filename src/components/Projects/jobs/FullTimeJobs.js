import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "../ProjectCards";
import helppier from "../../../Assets/Projects/helppier.png";
import cgi from "../../../Assets/Projects/cgi.png";
import kn from "../../../Assets/Projects/kn.png";

function FullTimeJobs() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={helppier}
              title="Interactive Tutorials"
              description="Web Development of interactive tutorials that help the users with website browsing."
              frontend="ReactJS"
              backend="NodeJS"
              database="MongoDB"
              label="Helppier"
              link="https://www.helppier.com/en/"
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
              label="CGI"
              link="https://www.cgi.com/en"
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
              label="Kuehne + Nagel"
              link="https://home.kuehne-nagel.com/en/"
            />
          </Col>
        </Row>
    );
}

export default FullTimeJobs;