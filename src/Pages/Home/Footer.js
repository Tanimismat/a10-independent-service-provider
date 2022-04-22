import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer style={{ height: '100px', backgroundColor: 'gray' }} className='text-center'>
            <p><small>Copyright © {year}</small></p>
        </footer>
    );
};

export default Footer;