import React from 'react';
import SpotIndexItem from './spot_index_item';
import { Link } from 'react-router-dom';

class SpotIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSpots();
    }

    render() {
        const spots = this.props.spots.map(spot => (
            <SpotIndexItem
                key={spot.id}
                spot={spot} />
        ));
        
        return (
            <div>
                <div className="test-container">
                    Find yourself in a tent.
                    <br />
                    <span className='test-2'>
                        Book adventures where your tent leads.
                    </span>
                </div>  
                <ul className='spots-index-list'>
                   {spots}
                </ul>

                <div className='site-additional-info'>
                    <img src='https://djqvcbmmgpti5.cloudfront.net/assets/admin/hipcamp-love-64ecf63c78497198695c5c1bb4e9e4be3ac72d4a6d51af3e1d9776089c1b8cc3.gif' className='logo-gif' />
                </div>
            </div>
        );
    }
}

export default SpotIndex;