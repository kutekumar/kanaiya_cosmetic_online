import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3 navigation_header'>
            Copyright &copy; Kanaiya Cosmetics 2021
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
