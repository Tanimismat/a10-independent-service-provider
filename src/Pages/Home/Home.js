import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';

import Services from './Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <h2>this is home</h2>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;