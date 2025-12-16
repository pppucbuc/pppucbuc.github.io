import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
// import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  // let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          Based on format from Soumyajit Behera
        </Col>
        <Col md="4" className="footer-body">
        <ul className="footer-icons">
          <li className="social-icons">
            <a
              href="https://github.com/pppucbuc"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          </li>

          <li className="social-icons">
            <a
              href="https://scholar.google.com/citations?user=0_EZCKMAAAAJ&hl=en"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGooglescholar />
            </a>
          </li>
        </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
