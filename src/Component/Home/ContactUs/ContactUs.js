import React from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import img from './1.gif'
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className="container mt-5">

            <div className='row'>

                <div className='col-md-12 col-lg-6 mt-5'>
                    <h3>Contact With Us</h3>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Name" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name@Email.com"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingTextarea2" label="Share Your Thoughts!">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '200px' }}
                        />
                    </FloatingLabel>
                    <Button className='submit-btn' variant="dark">Submit</Button>
                </div>
                <div className='col-4'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;