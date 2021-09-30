import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import "../HomePageAbout/style.css";
import Layout from "../Layout";

const About = () => {
  return (
    <Layout>
      <section className="m-4 homepage-about d-flex align-items-center">
        <Container className="text-center">
          <Row>
            <Col>
              <h1>About us</h1>
            </Col>
          </Row>
          <Row>
            <Col className="mb-4">
              <span className="count">
                500+ Clients{" "}
                <span className="count2"> and still counting.</span>
              </span>
            </Col>
          </Row>
          <Row>
            <Col className="quote-icon" md={3}>
              <ImQuotesLeft />
            </Col>

            <Col>
              <p>
                Viplus deal in b2b and b2c and already we have 500+ dealers in
                the Indian marketing and this year we would be deal in
                international market. We have trendy caps and good quality stuff
                and designing.
              </p>
            </Col>
            <Col className="quote-icon" md={3}>
              <ImQuotesRight />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default About;
