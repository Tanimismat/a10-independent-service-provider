import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './Home/Header';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <Header></Header>
            <div className='mx-auto w-25 mt-4'>
                <h2 className='purple'>Welcome to .... : {serviceId}</h2>
                <button className='proceedCheckOut-button w-100 mt-5'><Link className='text-decoration-none text-light' to='/checkout'>Proceed checkout</Link></button>
                <p className='text-center mt-2'>Thank you for the booking...</p>
            </div>
        </div>
    );
};

export default ServiceDetail;