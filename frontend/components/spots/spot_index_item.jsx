import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';

const SpotIndexItem = ({ spot }) => (
    <div className='spot-list-items'>
        <div className='spot-pictures'>
            <Carousel>
                <img src={spot.photoUrls[0]} className='pic-slides' />
                <img src={spot.photoUrls[1]} className='pic-slides' />
                <img src={spot.photoUrls[2]} className='pic-slides' />
                <img src={spot.photoUrls[3]} className='pic-slides' />       
            </Carousel>
        </div>

        <div className='spot-info'>
            <div className='spot-name'>
                {spot.name}
            </div>
            <div className='spot-location'>
                {spot.nearby}
            </div>
            <div className='extra-spot-info'>
                <i className="fas fa-thumbs-up"></i>
                <div className='spot-price'>
                    ${spot.price}/night
                </div>
            </div>
        </div>
    </div>
);


export default SpotIndexItem;