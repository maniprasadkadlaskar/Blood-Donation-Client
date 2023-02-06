import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const initialState = {
        email: '',
        password: ''
    };

    const [formData, setFormData] = useState(initialState);
    const [formError, setFormError] = useState('');

    const inputHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setFormError('');
        axios.post("http://localhost:5000/login", formData)
        .then(res => {
            localStorage.setItem("access_token" , res.data.token);
            window.alert("Successfully loggedin");
            setFormData(initialState);
            navigate("/");
        })
        .catch(err => {
            setFormError(err.response.data.message);
        })
    }

    return (
        <Form onSubmit={submitHandler} className="m-2 p-4">
            <Row className="m-2 text-center fs-3">
                <span>Donor Login</span>
            </Row>
            <Row className="m-2 justify-content-center">
                <Form.Group as={Col} md="4">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        required 
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={formData.email}
                        onChange={inputHandler}
                    />
                </Form.Group>
            </Row>

            <Row className="m-2 justify-content-center">
                <Form.Group as={Col} md="4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required 
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={inputHandler}
                    />
                </Form.Group>
            </Row>

            <Row className="fs-6 text-danger my-3 text-center">
                <div>{formError}</div>
            </Row>

            <div className="text-center">
                <Button type="submit" variant="danger" size='lg'>Login</Button>
            </div>
        </Form>
    )
}

export default Login;