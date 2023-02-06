import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import axios from "axios";
import { useSelector } from 'react-redux';

const Register = () => {

    const initialState = {
        venue : "",
        date : ""
    };

    const [formData , setFormData] = useState(initialState);
    const [formError , setFormError] = useState('');
    const user = useSelector(state => state.user.value);

    const inputHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/register" , { ...formData , email : user.decodedToken.email})
        .then(() => {
            window.alert("Registered Successfully");
            setFormData(initialState);
        })
        .catch(err => {
            setFormError(err.response.data.message);
        }) 
    }

    return (
        <Container>
            <Row className="m-2 text-center fs-2">
                <span>Dononation Registration</span>
            </Row>
            <Form onSubmit={submitHandler} className="my-5">  
                <Row className="m-3 justify-content-center">
                    <Form.Group as={Col} md="4">
                        <Form.Label>Venue</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="City Name"
                            name="venue"
                            value={formData.venue}
                            onChange={inputHandler}
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            name="date"
                            min={new Date().toLocaleDateString('en-CA')}
                            value={formData.date}
                            onChange={inputHandler}
                        />
                    </Form.Group>
                </Row>

                {/* <Row className='fs-6 text-center m-5'>
                    <div>After registration you will receive message of the confirmation of the donation registration.</div>
                </Row> */}
                
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

export default Register;