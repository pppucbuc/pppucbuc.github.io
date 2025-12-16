import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaFileAlt, FaVideo } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPaths.map((imgPath, index) => (
        <Card.Img
          variant="top"
          src={imgPath}
          alt={`card-img-${index}`}
          key={index}
        />
      ))}

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.links &&
          props.links.map((link, index) => (
            <Button
              key={index}
              variant="primary"
              href={link.url}
              target="_blank"
              style={{ marginRight: "10px", marginTop: "5px" }}
            >
              {link.icon} &nbsp; {link.label}
            </Button>
          ))}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;