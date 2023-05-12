import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CompanyCard from '../views/CompanyCard';
import { CompanyType } from '../types';
import NotFound from './NotFound';

const Companies = () => {
    const [companyDetails, setCompanyDetails] = useState<CompanyType[]>([])

    const displayCompanies = () => {
        const companies = localStorage.getItem('Companies');
        if (companies !== null) {
            const companyDetails = JSON.parse(companies);
            console.log('This company details ' + companyDetails)
            setCompanyDetails(companyDetails);
        }
    }

    useEffect(() => {
        displayCompanies();
    }, [])

    const navigate = useHistory();

    return (
        <Container>
            <Row>
                <Col>
                    <h2>Welcome to the Companies page</h2>
                    <p>
                        View companies and their employees
                    </p>
                    <Button onClick={() => { navigate.push('/CreateCompany') }}> Create Company </Button> { } <Button onClick={() => { navigate.push('/') }}>Back Home</Button>
                </Col>
            </Row>
            <br />
            <Row>

                {companyDetails?.length > 0 ? (
                    companyDetails.map((company, index) => (
                        <Container key={index}>
                            <CompanyCard name={company.name} address={company.address} url={company.url} employees={company.employees} />
                        </Container>
                    ))

                ) : (
                    <div>
                        <NotFound />
                    </div>
                )
                }

            </Row>

        </Container>
    )
}

export default Companies;