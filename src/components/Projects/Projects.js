import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import friend from "../../Assets/Projects/friend-story.png";
import gezilerimiz from "../../Assets/Projects/gezilerimiz.png";
import stock from "../../Assets/Projects/stock.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import chat from "../../Assets/Projects/chat.png";
import run from "../../Assets/Projects/run.png";
import pokemon from "../../Assets/Projects/pokemon.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={run}
              isBlog={false}
              title="Run Group"
              description="Run Group is an online platform for runners. This platform will help you to find clubs, schedule events, and meet other runners in your area."
              ghLink="https://github.com/ErenKarakaya01/RunGroup"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokemon}
              isBlog={false}
              title="Pokemon Review API"
              description="Welcome to the Pokemon Review API! This ASP.NET Core API is built using .NET 6 and allows users to review and rate their favorite Pokemon."
              ghLink="https://github.com/ErenKarakaya01/pokemon-review-api"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={friend}
              isBlog={false}
              title="Friend Story"
              description="This is a Flutter and Firebase starter project that includes a register and login system, and allows users to write their thoughts about their friends, accept or reject thoughts, and display accepted thoughts from their friends."
              ghLink="https://github.com/ErenKarakaya01/friend-story"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gezilerimiz}
              isBlog={false}
              title="Gezilerimiz"
              description="Gezilerimiz is a React-based web application built to showcase travel experiences and stories. This app utilizes Firebase for user authentication, Redux for state management, and various other technologies to bring together a seamless blogging experience. This app was created for my cousin."
              ghLink="https://github.com/ErenKarakaya01/blog-web"
              demoLink="http://www.gezilerimiz.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stock Beyaz"
              description="Hi, I'm Eren and I study at Eskisehir Technical University as a Computer Science 2. grade student. I made a stock image web app using Next.js and Node.js! This web app was my Database Management course project."
              ghLink="https://github.com/ErenKarakaya01/Stock-Image"
              demoLink="https://sprinkaistockbeyaz.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="First Portfolio"
              description="This project was my first portfolio. I made this project using React.js. It was coded on 2021. Long time ago, right? :)"
              ghLink="https://github.com/ErenKarakaya01/CV"
              demoLink="https://sprinkaiportfolio.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat App"
              description="A realtime chat app called SprinkaiChat with MERN Stack. I made this site to improve my coding skills. I used MongoDB technologies and MongoDB Atlas. To use my app just create an account, log in, join a room and chat with other people!"
              ghLink="https://github.com/ErenKarakaya01/RealtimeChatApp-MERN"
              demoLink="https://sprinkaichat.herokuapp.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
