import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome to the React Project</h1>
          <p>
            This application does the following
          </p>
          <ul>
            <li>Performs an API call to get a key.</li>
            <li>Use key to fetch company data & displays the companies and their employees.</li>
            <li>Creates company card with the ability to add 1-n employees.</li>
            <li> POST this new company to the API, along with several employees.</li>
            <li>Creates unit tests using jest.</li>
            <li>Migrates the data and API logic into Redux.</li>
          </ul>

          <hr />
          <br />
          <p>Click to see companies</p>

          <Button>View Companies</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
