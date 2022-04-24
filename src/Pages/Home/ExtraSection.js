import React from 'react';

const ExtraSection = () => {
    return (
        <div className='m-5 p-3'>
            <h2 className='text-center purple fw-bold'>How it works</h2>
            <ol className='mx-auto'>
                <li>Schedule a 30-minute phone consult to discuss your career services needs.</li>
                <li>Receive detailed information about the process, recommended package, pricing, and turnaround time (generally 10 business days).</li>
                <li>Proceed with the client service agreement, online payment, and questionnaire.</li>
            </ol>
            <button className='extraSection-button d-block mx-auto'>SCHEDULE A CONSULT</button>

        </div>
    );
};

export default ExtraSection;