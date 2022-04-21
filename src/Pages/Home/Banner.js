import React from 'react';
import banner from '../../images/banner1.jpg'

const Banner = () => {
    return (
        <div>
            <img style={{ height: '400px' }} className='w-100' src={banner} alt="" />
        </div>
    );
};

export default Banner;