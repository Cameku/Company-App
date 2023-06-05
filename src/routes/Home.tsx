import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ApiHelper } from '../apiHelper/ApiHelper';


const Home: React.FC = () => {

  const [key, setKey] = useState('');
  // const [error, setError] = useState(null)

  const navigate = useHistory();

  const apiHelper = new ApiHelper();

  const apiKeyAsync = async (key: string) => {
    const apiKey = await apiHelper.getApiKeyAsync();
    localStorage.setItem('Api-key', apiKey)
    return apiKey;
  }

  const companyApiAsync = async (key: string) => {
    const apiKey = localStorage.getItem('Api-key')!;
    const companies = await apiHelper.getCompaniesAsync(apiKey);
    localStorage.setItem('Companies', JSON.stringify(companies))
  }

  useEffect(() => {
    apiKeyAsync(key);
  }, [])

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
          <p>Click to see companies {key}</p>

          <Button onClick={() => companyApiAsync(key)}>Click to Store Companies</Button> { }
          <Button onClick={() => navigate.push('Companies')}> View Companies </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
