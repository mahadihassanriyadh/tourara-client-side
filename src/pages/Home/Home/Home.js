import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import VacationPackages from '../VacationPackages/VacationPackages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <VacationPackages></VacationPackages>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;