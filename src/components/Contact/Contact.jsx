import React, { useEffect } from "react";
import "./Contact.scss";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import AOS from "aos";
import "aos/dist/aos.css";
import InputGroup from "react-bootstrap/InputGroup";

export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <body>
      <main className="contact">
        <h1 className="contact__header" data-aos="fade-down">
          Contact
        </h1>
        <hr className="contact__underline" />
        <h2 className="contact__text">Enter something here to suggest they contact for special requests or concerns</h2>
        <div className="contact__form">
          {
            <Form className="contact__input">
              <Row>
                <Col>
                  <Form.Control className="mb-3 border border-dark" placeholder="First name" data-aos="fade-right"/>
                  <Form.Control className="mt-5 border border-dark" placeholder="Phone Number" data-aos="fade-right" />
                </Col>
                <Col>
                  <Form.Control className="mb-3 border border-dark" placeholder="Last name" data-aos="fade-left"/>
                  <Form.Control className="mt-5 border border-dark" placeholder="Email Address" data-aos="fade-left"/>
                </Col>
              </Row>
              <Form className="contact__textarea mh-100" > 
                <Row>
                  <Form.Control
                    className="mt-5 border border-dark"
                    as="textarea"
                    aria-label="With textarea"
                    placeholder="Enter any comments or requests here"
                    data-aos="fade-up"
                  />
                </Row>
              </Form>
            </Form>
          }
        </div>
      </main>
    </body>
  );
}
