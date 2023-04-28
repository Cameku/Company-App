import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Navbar bg='light' expand='lg'>
            <LinkContainer to='/'>
              <Navbar.Brand>Dela Software Solutions</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default Navigation;
