import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import img1 from './1.png'
import './Footer.css'

const fb = <FontAwesomeIcon icon={faFacebook} />
const yt = <FontAwesomeIcon icon={faYoutube} />
const twitter = <FontAwesomeIcon icon={faTwitter} />
const instagram = <FontAwesomeIcon icon={faInstagram} />
const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer-1">
                    <h3>
                        <span className="company-name">Travelo</span></h3>
                    <p>Where the journey begins!</p>
                    <p className="footer-company-name">Travelo &copy; 2022</p>
                </div>
                <div className="footer-2">
                    <img className="payment" src={img1} alt="" />
                </div>
                <div className="footer-3">
                    <div>
                        <p>169 Wilson Street, New York, USA</p>
                    </div>
                    <div>
                        <p>+88 013-090909</p>
                    </div>
                    <div>
                        <p><a className='mail' href="mailto:support@company.com">contact@Travelo.com</a></p>
                    </div>
                </div>
                <div className="footer-4">
                    <h5 className="footer-icons1">{fb}</h5>
                    <h5 className="footer-icons2">{yt}</h5>
                    <h5 className="footer-icons3">{twitter}</h5>
                    <h5 className="footer-icons4">{instagram}</h5>
                </div>
            </div>
        </div>
    );
};

export default Footer;