import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { CompanyType, Employee } from '../types';
import { ApiHelper } from '../apiHelper/ApiHelper';
import { useHistory } from 'react-router-dom';
import { Constants } from '../apiHelper/Constants';


const CreateCompany = () => {

    const [employeeList, setEmployeeList] = useState<Employee[]>([]);
    const [indexBeingEdited, setIndexBeingEdited] = useState(-1);
    const [employeeName, setEmployeeName] = useState('');
    const [employeeAge, setEmployeeAge] = useState(Number);
    const [name, setName] = useState('');
    const [address, setaddress] = useState('');
    const [url, setUrl] = useState('');

    const addEmployee = () => {
        if (employeeName.trim().length !== 0 && employeeAge > 0) {
            setEmployeeList(employeeList => [...employeeList, { name: employeeName, age: employeeAge }]);
            setEmployeeName('');
            setEmployeeAge(0)
        } else {
            prompt('Input value cannot be empty')
        }

    }

    const handleDeleteEmployee = (index: number) => {
        setEmployeeList(newEmployeeList => { return newEmployeeList.filter((_, i) => i !== index) });
    }

    const editEmployee = (index: number) => {
        setIndexBeingEdited(index);
    }

    const handleInput = (e: any) => {
        const newName = employeeList.map((empName) => (
            empName.name === employeeName ? { ...empName, [e.target.name]: e.target.value } : empName
        ))
        setEmployeeList(newName);
    }

    const updateEmployee = (name: string, age: number) => {
        setEmployeeList(employeeList => [...employeeList, { name: employeeName, age: employeeAge }])
    }

    const apiHelper = new ApiHelper();
    const history = useHistory();

    const addToCompaniesAsync = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        //1. get new company details from input
        const newCompany: CompanyType = { name, address, url, employees: employeeList }
        //2. send to api
        const apikey = localStorage.getItem('Api-key')!
        let isPosted = await apiHelper.postNewCompanyAsync(apikey, newCompany)

        if (isPosted) {
            const companies = JSON.parse(localStorage.getItem(Constants.CompaniesKey)!);
            companies.push(newCompany);
            localStorage.setItem(Constants.CompaniesKey, JSON.stringify(companies));
            history.push('/companies');
        } else {
            console.log('There was an error, try again')
        }
    }

    return (
        <div>
            <Container style={{ paddingTop: 50 }}>
                <Row>
                    <Col>
                        <h4>New Company</h4>
                        <Form>
                            <Form.Group className="mb-3" controlId="formCompany">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={name}
                                    placeholder="Enter Company Name"
                                    onChange={(e) => setName(e.target.value)} />
                                <Form.Label>Address</Form.Label>
                                <Form.Control as="textarea" rows={3}
                                    value={address}
                                    placeholder="Enter Address"
                                    onChange={(e) => setaddress(e.target.value)} />
                                <Form.Label>Website</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={url}
                                    placeholder="Website"
                                    onChange={(e) => setUrl(e.target.value)} />
                            </Form.Group>
                            {/* <hr style={{ height: 1, backgroundColor: 'black' }} /> */}
                            <Form.Group className="mb-3" controlId="formEmployee">
                                <Form.Label>Name </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Employee Name"
                                    value={employeeName}
                                    onChange={(e) => setEmployeeName(e.target.value)} />
                                <Form.Label>Age </Form.Label>
                                <Form.Control
                                    type='number'
                                    pattern='[0-9]*'
                                    placeholder="Employee Age"
                                    value={employeeAge}
                                    onChange={(e) => setEmployeeAge(Number(e.target.value))} />
                            </Form.Group>

                            <Button variant="primary" onClick={addEmployee} > Add Employee </Button> { }
                            <Button variant="success" onClick={addToCompaniesAsync} > Send Company to Api </Button> { }
                            <Button variant='warning' onClick={() => history.push('/')} >Back Home</Button>
                        </Form>
                    </Col>
                    <Col>
                        <h4>New Employee list</h4>
                        {
                            employeeList?.length > 0 ? (
                                employeeList.map((employee, index) => (
                                    indexBeingEdited === index ?
                                        <div key={index}>
                                            <Row className='mb-2'>
                                                <Col>
                                                    <input
                                                        className="mr-3"
                                                        value={employee.name}
                                                        type="text"
                                                        onChange={handleInput}
                                                    //onChange={(e) => setEmployeeName(employee.name)}
                                                    />
                                                    <input
                                                        className="mr-3"
                                                        value={employee.age}
                                                        type="number"
                                                        placeholder="Employee Age"
                                                        onChange={(e) => setEmployeeAge(Number(e.target.value))}
                                                    //onChange={(e) => handleChange(Number(employee.age, e))} 
                                                    />
                                                </Col>

                                                <Button variant="danger" size='sm' className='mr-2'
                                                    onClick={() => { handleDeleteEmployee(index) }}>Delete </Button>
                                                <Button variant="secondary" size='sm' onClick={() => { updateEmployee(employee.name, employee.age) }}
                                                >Update </Button>
                                            </Row>
                                        </div>
                                        :
                                        <div key={index}>
                                            <Row className='mb-1'>
                                                <Col>
                                                    Name: <b className='mr-3'>{employee.name}</b>
                                                    Age: <b className='mr-3'>{employee.age}</b> </Col>
                                                <Button variant="danger" size='sm' className='mr-2'
                                                    onClick={() => { handleDeleteEmployee(index) }} >Delete </Button>
                                                <Button variant="secondary" size='sm' onClick={() => { editEmployee(index) }}
                                                >Edit Employee </Button>
                                            </Row>
                                        </div>
                                ))
                            ) : (
                                <div><h6>Please add an employee to the list</h6></div>
                            )
                        }
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default CreateCompany


