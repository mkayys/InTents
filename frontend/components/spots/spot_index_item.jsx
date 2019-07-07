import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';

const SpotIndexItem = ({ spot }) => (
    <div>
        <li>
            <Carousel>
                <img src={spot.photoUrls[0]} />
                <img src={spot.photoUrls[1]} />
                <img src={spot.photoUrls[2]} />
                <img src={spot.photoUrls[3]} />
            </Carousel>
            {spot.name}
            &nbsp;
            {spot.nearby}
        </li>
    </div>
);

export default SpotIndexItem;