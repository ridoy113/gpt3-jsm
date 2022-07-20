import React from 'react';
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'



const Footer = () => {
    return (
        <div className='gpt3__footer section__padding'>
            <div className='gpt3__footer-heading'>
                <h1 className='gradient__text'>
                    Do you want to step in to the future others.
                </h1>
            </div>

            <div className='gpt3__footer-btn'>
                <p>Request Early Access</p>
            </div>

            <div className='gpt3__footer-links'>
                <div className='gpt3__footer-links_logo'>
                    <img src={gpt3Logo} alt="logo" />
                    <p>Abidpour, Comilla, Bangladesh All Rights Reserver</p>
                </div>

                <div className='gpt3__footer-links_div'>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Country</p>
                    <p>Contact</p>
                </div>



                <div className='gpt3__footer-links_div'>
                    <h4>Company</h4>
                    <p>RTerms & Condition</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>



                <div className='gpt3__footer-links_div'>
                    <h4>Get in touch</h4>
                    <p>Abidpour, Comilla, Bangladesh </p>
                    <p>01874997427</p>
                    <p>almamounhridoy113@gmail.com</p>
                </div>
            </div>

            <div className='gpt3__footer-copyright'>
                <p>© 2021 GPT-3 All right reserved.</p>
            </div>
        </div>
    );
};

export default Footer;