import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Header from './Home/Header';

const Registration = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate('/login');
    }
    const [
        createUserWithEmailAndPassword
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const handleRegister = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(name, email, password);
        createUserWithEmailAndPassword(email, password);
        navigate('/home');
    }

    return (
        <div>
            <Header></Header>
            <div className='w-50 mx-auto mt-3'>
                <h2 className='text-center purple'>Please register</h2>
                <Form onSubmit={handleRegister}>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control ref={nameRef} type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button className='login-button mx-auto d-block my-3' variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <p>Already have an account? <Link className='text-primary text-decoration-none' to="/login" onClick={navigateLogin}>Please Login.</Link></p>
            </div>
        </div>
    );
};

export default Registration;