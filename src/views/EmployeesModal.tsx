import React, { useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { Employee } from '../types';
import NotFound from '../routes/NotFound';

const EmployeesModal = ({ employees }: { employees: Employee[] }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                View Employees
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{ }</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            {
                                employees?.length > 0 ? (
                                    employees.map((employee, index) => (
                                        <div key={index}>
                                            <Col md>
                                                Name: <b>{employee.name}</b> { }
                                                Age: <b>{employee.age}</b>
                                            </Col>
                                            <col>
                                                { }
                                            </col>
                                        </div>
                                    ))
                                ) : (
                                    <div>
                                        <NotFound />
                                    </div>
                                )
                            }
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EmployeesModal