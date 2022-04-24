import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from '../Service';
import Header from './Header';

const Services = () => {

    const [services] = useServices();
    // console.log(services)
    const { id } = services;

    return (
        <div className='my-5'>
            <h2 className='text-center py-4 purple fw-bold'>All Services</h2>
            <div className='row row-cols-1 row-cols-md-3 g-4 px-5'>{
                services.map(service => <Service
                    key={id}
                    service={service}
                ></Service>)
            }</div>
        </div>
    );
};

export default Services;