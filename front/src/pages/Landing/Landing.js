import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./landing.css";

export default () => {
  return (
    <div className="page landing">
      <Container className="mt-5">
        <Row>
          <Col xs="12" className="mission-summary">
            Landing
          </Col>
        </Row>
      </Container>
    </div>
  );
};
