import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3" style={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <Container>
        <Row>
          <Col>
            &copy; 2024 Your E-Commerce Site. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
