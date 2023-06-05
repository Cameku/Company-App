import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { CompanyType } from '../types'
import EmployeesModal from './EmployeesModal';

const CompanyCard = (companyInfo: CompanyType) => {

    return (

        <Container >
            <Row>
                <Col style={{ display: 'block', width: 200, padding: 10 }}>
                    <Card style={{ width: '28rem' }}>
                        <Card.Header>Company card</Card.Header>
                        <Card.Body>
                            <Card.Title>Name: <b>{companyInfo.name} </b></Card.Title>
                            <Card.Text>Address: <b>{companyInfo.address}</b> </Card.Text>
                            <Card.Text>Link to Website: <b>{companyInfo.url} </b> </Card.Text>
                            <EmployeesModal employees={companyInfo.employees} />
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>



    )
}

export default CompanyCard