import React from "react";
import Card from "react-bootstrap/Card";
import { MdOutlinePhoneAndroid, MdOutlineMail } from "react-icons/md";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I pursued the bachelor’s degree to have a foundation of my true
            journey into the{" "}
            <span className="primary-color">world of technology</span>.
            <br />
            This opened my eyes to my true passion,{" "}
            <span className="primary-color">web development</span>.
            <br />
            It was when I joined <span className="primary-color">
              Helppier
            </span>{" "}
            that I was able to taste the{" "}
            <span className="primary-color">practical experience</span>, which I
            was lacking.
            <br />
            At the time I started doing the master's degree and working in{" "}
            <span className="primary-color">CGI</span>, I found an interest in{" "}
            <span className="primary-color">good practices</span> and{" "}
            <span className="primary-color">design patterns</span>, improving my
            skills even more.
            <br />
            Currently, I am working at{" "}
            <span className="primary-color">Kuehne + Nagel</span>, this role
            gave me a more in depth learning about{" "}
            <span className="primary-color">DevOps</span> and represents the
            latest step in my ongoing journey in the tech industry.
            <br />
            <br />
            Feel free to reach out to me for any opportunities, or inquiries. I
            look forward to connect with you!
          </p>
          <ul>
            <li className="project-card-technologies">
              <MdOutlinePhoneAndroid className="primary-color spacing" />
              <strong className="primary-color">
                &#40;+351&#41; 917 304 667
              </strong>
            </li>
            <li className="project-card-technologies">
              <MdOutlineMail className="primary-color spacing" />
              <strong className="primary-color">
                vasco.f.lusitano@gmail.com
              </strong>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
