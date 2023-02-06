import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const RegisterForm = () => {

    const initialState = {
        firstName : '',
        lastName : '',
        dob : '',
        weight : '',
        bg : '',
        gender : '',
        street : '',
        area : '',
        city : '',
        pincode : '',
        mobile : '',
        email : '',
        password : ''
    }

    const [formData , setFormData] = useState(initialState);
    const [formError , setFormError] = useState('');
    const navigate = useNavigate();

    const inputHandler = (e) => {
        setFormData({
            ...formData ,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setFormError('');
        axios.post("http://localhost:5000/users" , formData)
        .then(() => {
            setFormData(initialState);
            window.alert("Registered Successfully");
            navigate("/login");
        })
        .catch(err => {
            setFormError(err.response.data.message);
        })      
    }

    return (
        <Container>
            <Row className="m-2 text-center fs-2">
                <span>Donor Registration</span>
            </Row>
            <Form onSubmit={submitHandler} className="my-3">
                <Row className="m-3 text-center fs-3 border-bottom border-2">
                    <span>Personal Details</span>
                </Row>
                <Row className="m-3 justify-content-center">
                    <Form.Group as={Col} md="4">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Firstname"
                            name="firstName"
                            value={formData.firstName}
                            onChange={inputHandler}
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Lastname"
                            name="lastName"
                            value={formData.lastName}
                            onChange={inputHandler}
                        />
                    </Form.Group>
                </Row>
                <Row className="m-3 justify-content-center">
                    <Form.Group as={Col} md="4">
                        <Form.Label>Date Of Birth</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            name="dob"
                            value={formData.dob}
                            max={new Date().toLocaleDateString('en-CA')}
                            onChange={inputHandler}
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="Weight"
                            name="weight"
                            value={formData.weight}
                            min={30}
                            onChange={inputHandler}
                        />
                    </Form.Group>
                </Row>

                <Row className="m-3 justify-content-center">
                    <Form.Group as={Col} md="4">
                        <Form.Label>Blood Group</Form.Label>
                        <Form.Select 
                        aria-label="Blood Group"
                        name="bg"
                        onChange={inputHandler}
                        >
                            <option>Blood Group</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="O">O</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label>Gender</Form.Label>
                        <div>
                            <Form.Check
                                inline
                                type="radio"
                                label="Male"
                                name="gender"
                                value="male"
                                onChange={inputHandler}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="Female"
                                name="gender"
                                value="female"
                                onChange={inputHandler}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="Other"
                                name="gender"
                                value="other"
                                onChange={inputHandler}
                            />
                        </div>
                    </Form.Group>
                </Row>

                <Row className="m-3 text-center fs-3 border-bottom border-2">
                    <span>Address Details</span>
                </Row>

                <Row className="m-3 justify-content-center">
                    <Form.Group as={Col} md="4">
                        <Form.Label>Street</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Street"
                            name="street"
                            value={formData.street}
                            onChange={inputHandler}
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label>Area</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Area"
                            name="area"
                            value={formData.area}
                            onChange={inputHandler}
                        />
                    </Form.Group>
                </Row>

                <Row className="m-3 justify-content-center">
                    <Form.Group as={Col} md="4">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="City"
                            name="city"
                            value={formData.city}
                            onChange={inputHandler}
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="Pincode"
                            name="pincode"
                            value={formData.pincode}
                            onChange={inputHandler}
                        />
                    </Form.Group>
                </Row>

                <Row className="m-3 justify-content-center">
                    <Form.Group as={Col} md="4">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="Mobile"
                            name="mobile"
                            value={formData.mobile}
                            max={9999999999}
                            min={1000000000}
                            onChange={inputHandler}
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={inputHandler}
                        />
                    </Form.Group>
                </Row>

                <Row className="m-3 text-center fs-3 border-bottom border-2">
                    <span>Set Password</span>
                </Row>

                <Row className="m-3 justify-content-center">
                    <Form.Group as={Col} md="4">
                        <Form.Label>Set Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Set Password"
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Confirm Password"
                            name="password"
                            value={formData.password}
                            onChange={inputHandler}
                        />
                    </Form.Group>
                </Row>

                <Row className="fs-6 text-danger my-3 text-center">
                    <div>{formError}</div>
                </Row>

                <div className="text-center m-4">
                    <Button type="submit" variant="danger" size='lg'>Register</Button>
                </div>
            </Form>
        </Container>
    );
}

export default RegisterForm;