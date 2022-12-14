import React from 'react';
import Banner from './Banner';
import ExtraSection from './ExtraSection';
import Footer from './Footer';
import Header from './Header';

import Services from './Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <ExtraSection></ExtraSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;