import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "../ProjectCards";
import chatbot from "../../../Assets/Projects/chatbot.png";
import saci from "../../../Assets/Projects/saci.png";

function SideJobs() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              title="RAG Chatbot"
              description="It's a chatbot forked from the famous open-source Open Web UI project, 
                integrated with Ollama and a mistral LLM to use only local dependencies so companies 
                don't risk their data getting breached while inputing sensible data."
              frontend="ReactJS"
              backend="FastAPI"
              database="ChromaDB"
              label="Chatbot"
              link="https://github.com/dipar2009/open-webui"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={saci}
              title="Saci"
              description="Created the backend skeleton of this project and worked as architect and backend 
                tutor for 4 interns in Kuehne + Nagel. This project serves as a guide and roadmap tool 
                for software related carreers."
              frontend="VueJS"
              backend="Java"
              database="MySQL"
              label="Saci"
              link="https://github.com/Saci-Career/saci-backend"
            />
          </Col>
        </Row>
    );
}

export default SideJobs;