import React from 'react';
import { Link } from 'react-router-dom';

const SpotIndexItem = ({ spot }) => (
    <li>
        <Link to={`/spots/${spot.id}`}>{spot.name}</Link>
    </li>
);

export default SpotIndexItem;
