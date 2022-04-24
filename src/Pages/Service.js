import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    console.log(service)
    const { id, img, name, price, description } = service;

    const navigate = useNavigate()
    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`);
    }
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p>Price: ${price}</p>
                        <p className="card-text">{description}</p>
                    </div>
                    <div className="card-footer">
                        <button onClick={() => navigateToServiceDetail(id)}><Link to='/checkout'>Checkout</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;