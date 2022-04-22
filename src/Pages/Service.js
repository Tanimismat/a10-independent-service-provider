import React from 'react';

const Service = ({ service }) => {
    console.log(service)
    const { id, img, name, price, description } = service;
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p>Price: ${price}</p>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="card-footer">
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;