import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <div>
            <h2>login</h2>
            <Form >

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>

            </Form>
        </div>
    );
};

export default Login;