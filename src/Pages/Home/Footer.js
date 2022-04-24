import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer style={{ height: '100px' }} className='footer text-center'>
            <p className='pt-4'><small>Copyright © {year}</small></p>
        </footer>
    );
};

export default Footer;