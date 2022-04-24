import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Home/Header';

const Registration = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const checkboxRef = useRef();

    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate('/login');
    }
    return (
        <div>
            <Header></Header>
            <h2>Please register</h2>
            <Form>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control ref={nameRef} type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check ref={checkboxRef} type="checkbox" label="Accept terms and condition" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have an account? <Link to="/login" className='pe-auto' onClick={navigateLogin}>Please Login.</Link></p>
        </div>
    );
};

export default Registration;