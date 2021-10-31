import React from 'react';
import { Container } from 'react-bootstrap';
import './WhyChooseUs.css'



const WhyChooseUs = () => {
    return (
        <Container fluid className="why-us">


            <h2 className="text-white mb-5">Why Choose Us</h2>
            <div className="why-us-container">
                <div className="single-service">
                    <h3>Best Travel Guidance</h3>
                    <p>We Provide Best Travel Guidance to our Customer. Our experts team always working for serve our Customer to Best Travel Guidance. </p>
                </div>
                <div className="single-service">
                    <h3>Best Service</h3>
                    <p>From Travelo you will experience best customer service. Our staffs always ready to ensure to provide best customer experience.</p>
                </div>
                <div className="single-service">
                    <h3>Budget Friendly</h3>
                    <p>We can 100% ensure that you will get most budget friendly package from us. So why are you waiting! just grab the pack!</p>
                </div>
            </div>

        </Container>
    );
};

export default WhyChooseUs;