import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const CreateCompany = () => {

    const handleAddEmployee = () => {

    }


    return (
        <div>
            <Container style={{ paddingTop: 50 }}>
                <Row>
                    <Col>
                        <h4>Create new Company</h4>
                        <Form>
                            <Form.Group style={{ width: 600 }} className="mb-3" controlId="formCompany">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Company Name" />
                                <Form.Label>Address</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter Address" />
                                <Form.Label>Website</Form.Label>
                                <Form.Control type="text" placeholder="Website" />
                            </Form.Group>
                            <hr style={{ height: 1, backgroundColor: 'black' }} />
                            <Form.Group style={{ width: 600 }} className="mb-3" controlId="formEmployee">
                                <Form.Label>Name </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Employee Name" />
                                <Form.Label>Age </Form.Label>
                                <Form.Control type="text" placeholder="Employee Age" />

                            </Form.Group>
                            <Button variant="primary" onClick={handleAddEmployee}> Add Employee </Button> { }
                            <Button variant="danger" type="submit"> Delete Employee </Button> { }
                            <Button variant="success" type="submit"> Add To Company </Button> { }
                            <Button variant='info'>Back Home</Button>
                        </Form>
                    </Col>
                    <Col>
                        <h4>New Employee list</h4>
                        <p>Name: {'Cathy'}  - Age: {20}</p>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default CreateCompany