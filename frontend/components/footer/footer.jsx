import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-info'>
            <div className='footer-app-and-text'>
                <Link to='/'>
                    <img src='https://in-tents-seed.s3-us-west-1.amazonaws.com/main_images/app-icon.png' className='footer-app-image' />
                </Link>
                <div className='footer-text'>
                    "We need to find God, and he cannot be found in noise and restlessness.
                    <br />
                    God is the friend of silence. See how nature - trees, flowers, grass - grows in silence;
                    <br />
                    see the stars, the moon and the sun, how they move in silence...
                    <br />
                    We need silence to be able to touch souls." 
                    <br />
                    - Mother Teresa
                </div>
            </div>
            <div className='footer-mountain'>

            </div>
        </div>
    );
};

export default Footer;