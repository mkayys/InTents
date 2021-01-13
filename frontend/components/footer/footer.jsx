import React from 'react';
import { Link } from 'react-router-dom';

// const goHome = (e) => {
//     e.currentTarget.innerText = `Go to Home Page`;
// }

const Footer = () => {
    return (
        <div className='footer-info'>
            <div className='footer-app-and-text'>
                <Link to='/'>
                    {/* <span onMouseEnter={goHome}> */}
                    <img src='https://in-tents-seed.s3-us-west-1.amazonaws.com/main_images/app-icon.png' className='footer-app-image' />
                    {/* </span> */}
                </Link>
                <div className='footer-text'>
                    "Heaven is under our feet as well as over our heads. 
                    <br/>
                    —Henry David Thoreau
                    <br />
                    <br />
                    Hello, welcome to my site, In-Tents. My name is Michelle and I am a software engineer based in SF.
                    <br />
                    I enjoy being in nature and wanted to bring that bit of passion for hiking and exploring
                    <br />
                    into my personal project. I hope you find the pictures enjoyable and the experience, satisfying.
                    {/* "We need to find God, and he cannot be found in noise and restlessness.
                    <br />
                    God is the friend of silence. See how nature - trees, flowers, grass - grows in silence;
                    <br />
                    see the stars, the moon and the sun, how they move in silence...
                    <br />
                    We need silence to be able to touch souls." 
                    <br />
                    - Mother Teresa */}
                </div>
            </div>
            <div className='footer-mountain'>

            </div>
        </div>
    );
};

export default Footer;