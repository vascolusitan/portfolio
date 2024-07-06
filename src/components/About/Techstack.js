import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
} from "react-icons/di";
import {
  SiPostgresql,
  SiElasticsearch,
  SiOracle,
  SiRabbitmq,
  SiApachekafka,
  SiKotlin
} from "react-icons/si";
import { TbCloudCog } from "react-icons/tb";
import { FaRegFileCode } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p>NodeJS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin />
        <p>Kotlin</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p>ReactJS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
        <p>Oracle</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiElasticsearch />
        <p>Elasticsearch</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiRabbitmq />
        <p>RabbitMQ</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka />
        <p>Kafka</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbCloudCog />
        <p>REST</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRegFileCode />
        <p>SOAP</p>
      </Col>
    </Row>
  );
}

export default Techstack;
