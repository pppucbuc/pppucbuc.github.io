import React from "react";
import { Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import fishing from "../../Assets/Projects/fishing2.jpg";
import car from "../../Assets/Projects/car.jpg";

function AboutCard() {
  return (
    <blockquote className="blockquote mb-0 about-card">
      <Row>
        {/* 左边文字 */}
        <Col md={8}>
          <p style={{ textAlign: "justify" }}>
            Hi, This is <span className="cyan"> Yinan Dong </span>
            from Shanghai, China.
            <br />
            Currently, I am pursuing two bachelor degrees:
            <br />
            <b className="blue">Data Science Engineering</b> in University of Michigan
            <br />
            <b className="red">Mechanical Engineering</b> in Shanghai Jiao Tong University.
            <br />
            <br />
            Apart from my studies, here are some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Fishing
            </li>
            <li className="about-activity">
              <ImPointRight /> Making Fishing Videos
            </li>
            <li className="about-activity">
              <ImPointRight /> Flipping Cars
            </li>
            <li className="about-activity">
              <ImPointRight /> Making Flipping Car Videos
            </li>
          </ul>
        </Col>

        {/* 右边图片（上下排列） */}
        <Col
          md={4}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0px",
            marginLeft:"0px",
          }}
        >
          <img
            src={fishing}
            alt="fishing"
            style={{ width: "240px", height: "240px", objectFit: "cover" }}
          />
          <img
            src={car}
            alt="car"
            style={{ width: "240px", height: "240px", objectFit: "cover" }}
          />
        </Col>
      </Row>
    </blockquote>
  );
}

export default AboutCard;
