import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Header from './Home/Header';
import SocialLogin from './SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        signInError
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log("sign in ", email, password);
        signInWithEmailAndPassword(email, password);
    };
    const [sendPasswordResetEmail, resetPasswordError, sending] = useSendPasswordResetEmail(auth);

    const navigateRegister = event => {
        navigate('/register')
    };

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Email sent');
    };
    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    let errorElement;
    if (signInError || resetPasswordError) {
        errorElement = <p className='text-danger'> {signInError?.message} {resetPasswordError?.message}</p>
    }
    return (
        <div>
            <Header></Header>
            <div className='w-50 mx-auto mt-3'>
                <h2 className='text-center purple'>Please Login</h2>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button className='login-button mx-auto d-block my-3' type="submit">
                        Login
                    </Button>
                </Form>
                {errorElement}
                <p>New to YOUR SUCCESS WIZARD ? <Link to="/register" className='pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
                <p>Forget Password? <button className='btn btn-link pe-auto text-primary text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;