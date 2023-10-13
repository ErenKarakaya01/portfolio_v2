import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Eren Karakaya </span>
            from <span className="purple"> Istanbul, Turkey.</span>
            <br /> I am a final year student pursuing Computer Engineering at Eskisehir Technical University.
            <br />
            Additionally, I am currently employed as a software developer at ...
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Work smarter, not harder!"{" "}
          </p>
          <footer className="blockquote-footer">Eren</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
