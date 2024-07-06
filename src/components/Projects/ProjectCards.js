import React from "react";
import Card from "react-bootstrap/Card";
import Button from "@mui/material/Button";
import { VscArrowCircleRight } from "react-icons/vsc";
import { GoProjectSymlink } from "react-icons/go";

function ProjectCards(props) {
  const { imgPath, title, description, frontend, backend, database, link, label } = props;
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="primary-color">
          <strong>{title}</strong>
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          <strong className="primary-color">Description:</strong>{" "}
          {description}
          <p />
          <ul>
            <li className="project-card-technologies">
              <VscArrowCircleRight className="primary-color spacing" />
              Frontend:{" "}
              <strong className="primary-color">{frontend}</strong>
            </li>
            <li className="project-card-technologies">
              <VscArrowCircleRight className="primary-color spacing" />
              Backend:{" "}
              <strong className="primary-color">{backend}</strong>
            </li>
            <li className="project-card-technologies">
              <VscArrowCircleRight className="primary-color spacing" />
              Database:{" "}
              <strong className="primary-color">{database}</strong>
            </li>
          </ul>
        </Card.Text>
        <Button
          className="mt-auto text-center custom-btn"
          variant="contained"
          href={link}
          startIcon={<GoProjectSymlink />}
        >
          {label}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
