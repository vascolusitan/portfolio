import React from "react";
import Card from "react-bootstrap/Card";
import Button from "@mui/material/Button";
import { VscArrowCircleRight } from "react-icons/vsc";
import { GoProjectSymlink } from "react-icons/go";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="primary-color">
          <strong>{props.title}</strong>
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          <strong className="primary-color">Description:</strong>{" "}
          {props.description}
          <p />
          <ul>
            <li className="project-card-technologies">
              <VscArrowCircleRight className="primary-color spacing" />
              Frontend:{" "}
              <strong className="primary-color">{props.frontend}</strong>
            </li>
            <li className="project-card-technologies">
              <VscArrowCircleRight className="primary-color spacing" />
              Backend:{" "}
              <strong className="primary-color">{props.backend}</strong>
            </li>
            <li className="project-card-technologies">
              <VscArrowCircleRight className="primary-color spacing" />
              Database:{" "}
              <strong className="primary-color">{props.database}</strong>
            </li>
          </ul>
        </Card.Text>
        <Button
          className="mt-auto text-center custom-btn"
          variant="contained"
          href={props.companyLink}
          startIcon={<GoProjectSymlink />}
        >
          {props.company}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
