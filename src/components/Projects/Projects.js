import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ME350_1 from "../../Assets/Projects/ME350_1.jpg";
import ME350_2 from "../../Assets/Projects/ME350_2.jpg";
import asia_open_1 from "../../Assets/Projects/asia_open_1.jpg";
import asia_open_2 from "../../Assets/Projects/asia_open_2.jpg";
import asia_open_3 from "../../Assets/Projects/asia_open_3.jpg";
import championship_1 from "../../Assets/Projects/championship_1.jpg";
import championship_2 from "../../Assets/Projects/championship_2.jpg";
import championship_3 from "../../Assets/Projects/championship_3.png";
import Mhacks_1 from "../../Assets/Projects/Mhacks_1.png";
import Mhacks_2 from "../../Assets/Projects/Mhacks_2.png";
import Curly_1 from "../../Assets/Projects/Curly_1.jpg";
import Curly_2 from "../../Assets/Projects/Curly_2.png";
import algorithm_1 from "../../Assets/Projects/algorithm_pipeline.png";
import Atombot_1 from "../../Assets/Projects/Atombot_1.jpg";
import { FaFileAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        


        <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[Curly_1, Curly_2, algorithm_1]}
              isBlog={false}
                title={
                <div className="project-title">
                  <div>University of Michigan Curly Lab</div>
                  <div style={{ fontSize: "1.2rem" }}>
                  Autonomous Surface Vehicle Research
                </div>
                </div>
              }
              description={
              <>
              <p> 
                This research project was conducted at the University of Michigan Curly Lab under 
                the supervision of Prof. Maani Ghaffari (University of Michigan) and 
                Dr. Sangli Teng (University of California, Berkeley).
              </p>
              
              <p>
                I led the mechanical design, fabrication, and an research on learning-based control, including hardware assembly
                and ROS2-based communication debugging. Building on this platform, I developed an online learning pipeline 
                for a Lie-algebraic Model Predictive Controller (MPC) to improve trajectory tracking under
                unknown disturbances and modeling uncertainties. I also optimize the MPC using CasADi, reducing the control 
                loop latency from 40 ms to 15 ms for real-world deployment. I conducted extensive simulations and real-world experiments
                to validate the effectiveness of the proposed method.
              </p>

              <p>
                This work has resulted in a paper currently under review at IEEE Robotics and
                Automation Letters (RA-L).
              </p>
              </>        
              }
              links={[
                {
                  label: "Paper",
                  url: "https://www.arxiv.org/abs/2511.18683",
                  icon: <FaFileAlt />,
                },
                {
                  label: "GitHub",
                  url: "https://github.com/UMich-CURLY",
                  icon: <BsGithub />,
                },
              ]}          
            />
        </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[championship_1, championship_2, championship_3]}
              isBlog={false}
              title={
                <div className="project-title">
                  <div>2023–24 VEX Robotics</div>
                  <div>World Championship</div>
                </div>
              }
              description={
                <>
                  These robots were built by Shanghai Jiao Tong University VEX Robotics Team for 
                  2023-24 VEX Robotics World Championship. The entire structure is crafted using milled parts. 
                  The large robot's chassis is powered by 8 motors, while the smaller one is driven by 12 motors. 
                  Both robots are equipped with gyroscopes, tracking wheels, and motor encoders for 
                  precise path planning and autonomous navigation. Pneumatic systems are extensively 
                  used throughout the robots to control wings, shovels, and climbers, assisting in 
                  specific scoring tasks such as pushing balls into holes and climbing scoring poles.
                  These are likely among the most powerful machines that undergraduates can build at
                  the university level.
                </>
              }
              links={[
                {
                  label: "GitHub",
                  url: "https://github.com/SJTU-VEX",
                  icon: <BsGithub />,
                },
              ]}  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[asia_open_2, asia_open_3]}
              isBlog={false}
              title={
                <div className="project-title">
                  <div>2023–24 VEX Robotics</div>
                  <div>Asia Open Finals</div>
                </div>
              }
              description={
                <>
                  These robots were built by the Shanghai Jiao Tong University 
                           VEX Robotics Team for 2023-24 VEX Robotics Asia Open Finals. 
                           The entire structure is crafted using sheet metal components. 
                           Both robots utilize motor encoders and gyroscopes for precise 
                           path planning and autonomous navigation. Pneumatic systems are 
                           extensively used throughout the robots to control wings, shovels, 
                           and climbers, assisting in specific scoring tasks such as pushing 
                           balls into holes and climbing scoring poles. These are likely 
                           among the most powerful machines that undergraduates can build 
                           at the university level."
                </>
              }
              links={[
                {
                  label: "GitHub",
                  url: "https://github.com/SJTU-VEX",
                  icon: <BsGithub />,
                },
              ]}  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
