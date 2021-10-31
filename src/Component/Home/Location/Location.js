import React from 'react';
import img from './Location.gif'
import './Location.css'
const Location = () => {
    return (
        <div className="row container-fluid mt-5">
            <h2 className="mb-4 mt-5">Our HQ</h2>
            <div className="col-md-6">
                <img src={img} alt="" />
            </div>
            <div className="col-md-6">
                <iframe title="google-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.60168180962!2d-74.0954308845987!3d40.59454677934483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24ee99627adc9%3A0xd2b43950480dbeff!2zMTY5IFdpbHNvbiBTdCwgU3RhdGVuIElzbGFuZCwgTlkgMTAzMDQsIOCmruCmvuCmsOCnjeCmleCmv-CmqCDgpq_gp4HgppXgp43gpqTgprDgpr7gprfgp43gpp_gp43gprA!5e0!3m2!1sbn!2sbd!4v1635546516429!5m2!1sbn!2sbd"
                    width="100%"
                    height="600px"
                    style={{ borderRadius: "50px" }}
                />
            </div>


        </div>
    );
};

export default Location;