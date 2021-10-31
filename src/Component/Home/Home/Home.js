import React from 'react';
import Banner from '../Banner/Banner'
import ContactUs from '../ContactUs/ContactUs';

import Location from '../Location/Location';
import Services from '../Services/Services';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <WhyChooseUs></WhyChooseUs>
            <ContactUs></ContactUs>
            <Location></Location>

        </div>
    );
};

export default Home;