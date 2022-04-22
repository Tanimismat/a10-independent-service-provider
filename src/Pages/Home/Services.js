import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from '../Service';

const Services = () => {

    const [services] = useServices();
    // console.log(services)
    const { id } = services;

    return (
        <div>
            <h2>All Services</h2>
            <div className='row row-cols-1 row-cols-md-3 g-4'>{
                services.map(service => <Service
                    key={id}
                    service={service}
                ></Service>)
            }</div>
        </div>
    );
};

export default Services;