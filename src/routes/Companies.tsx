import React from 'react'
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Companies = () => {


    const navigate = useHistory();
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Welcome to the Companies page</h2>
                    <p>
                        View companies and their employees
                    </p>
                    <Button> Add Employees </Button> { } <Button onClick={() => { navigate.push('/') }}>Back Home</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Companies;