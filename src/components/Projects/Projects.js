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
import Atombot_1 from "../../Assets/Projects/Atombot_1.jpg";



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
              imgPaths={[Curly_1, Curly_2]}
              isBlog={false}
              title="Umich Curly Lab- ASV Project"
              description="This is a autonomous surface vehicle built by Umich Curly Lab. 
              The ASV is capable of autonomous navigation, obstacle avoidance, and data collection. I am responsible for the mechanical design, fabrication, deploying and tuning the MPC controller. There is still a lot of work to do."
            />
        </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[Atombot_1]}
              isBlog={false}
              title="Atombot-Swarm Robots Research"
              description="This is a research under Umich MDP Program, the research is led by Professor Y.Z., aiming to study swarm intelligence for robots with brownian motion. In the picture is a tiny robot independently designed
              and built by me, which is capable of moving in all direction."
            />
        </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[Mhacks_2, Mhacks_1]}
              isBlog={false}
              title="Sqoreo"
              description="This is a web application completed in 24 hours for MHacks 14. It's an AI chatbot and grade tracker that helps students predict their 
              course grades based on past performance. Think of it as a crystal ball for your GPA—giving you valuable insights to help you stay on track
              toward your academic goals. Sqoreo also provides personalized feedback, preventing students from getting overly discouraged by one or two
              poor performances. With Sqoreo, you can monitor your progress in real-time, with predictions based on three possible scenarios: Trend
                (maintaining your current performance), Regress (a dip in performance), and Improve (an upward trajectory).The web application was developed 
                using Python for the backend and React for the frontend. It also integrates API, Jupyter Notebook, and OpenAI GPT-4o."
              ghLink="https://github.com/pppucbuc/Mhacks17-96"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[ME350_1, ME350_2]}
              isBlog={false}
              title="Autonomous Climbing Robot"
              description="This is the final project of ME350 course. It is controlled by Raspberry Pi and integrates gyroscope, motor encoders, and camera. The robot utilizes the gyroscope and motor encoders to continuously adjust its path from the road's edges. The camera allows the robot to recognize road signs and make informed decisions. Its robot arm can hold the robot up, making it climb on steps. Its tank tracks help it travel on sand easily."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[championship_1, championship_2, championship_3]}
              isBlog={false}
              title="Robots for 2023-24 VEX Robotics World Championship"
              description="These robots were built by Shanghai Jiao Tong University VEX Robotics Team for 2023-24 VEX Robotics World Championship. The entire structure is crafted using milled parts. The large robot's chassis is powered by 8 motors, while the smaller one is driven by 12 motors. Both robots are equipped with gyroscopes, tracking wheels, and motor encoders for precise path planning and autonomous navigation. Pneumatic systems are extensively used throughout the robots to control wings, shovels, and climbers, assisting in specific scoring tasks such as pushing balls into holes and climbing scoring poles. These are likely among the most powerful machines that undergraduates can build at the university level."
              ghLink="https://github.com/SJTU-VEX/24-Turtle"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[asia_open_1, asia_open_2, asia_open_3]}
              isBlog={false}
              title="Robots for 2023-24 VEX Robotics Asia Open Finals"
              description="These robots were built by the Shanghai Jiao Tong University VEX Robotics Team for 2023-24 VEX Robotics Asia Open Finals. The entire structure is crafted using sheet metal components. Both robots utilize motor encoders and gyroscopes for precise path planning and autonomous navigation. Pneumatic systems are extensively used throughout the robots to control wings, shovels, and climbers, assisting in specific scoring tasks such as pushing balls into holes and climbing scoring poles. These are likely among the most powerful machines that undergraduates can build at the university level."
              ghLink="https://github.com/SJTU-VEX/24-Big"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
