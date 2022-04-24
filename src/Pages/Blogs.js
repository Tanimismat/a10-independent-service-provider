import React from 'react';
import Header from './Home/Header';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-75 mx-auto mt-4'>
                <h2 className='text-center'>Blogs</h2>
                <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p>Firebase application SDKs directly interact with backend services. Firebase is typically used to write code to query the database in the app.Firebase supports OAuth 2.0 and OpenID authentication. Other options for authentication are:</p>
                <ul>
                    <li>Cookie-based authentication</li>
                    <li>Token-based authentication</li>
                    <li>SAML (Security Assertion Markup Language)</li>
                </ul>

                <h5>Difference between authorization and authentication.</h5>
                <ul>
                    <li>In authentication process user's identity is checked, while in authorization process user's authority is checked.</li>
                    <li>Authentication needs user's login details. In authorization process user's privilege or security is needed.</li>
                    <li>Authentication determines if the person is user or not where  authorization checks what permissions user have.</li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;