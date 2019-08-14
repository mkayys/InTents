import React from 'react';
import SpotIndexItem from './spot_index_item';
import { Link } from 'react-router-dom';

//loading:
import LoadingIcon from '../loading/loading_icon';
import { isThisISOWeek } from 'date-fns/esm';

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

        if (this.props.loading) {
            return <LoadingIcon />
        }
        
        return (
            <div>
                <div className="test-container">
                    <span className='test-1'>Find yourself in a tent.</span>
                    <br />
                    <span className='test-2'>
                        Book adventures where your tent leads.
                    </span>
                    <div className="search-bar"> 
                        <input type="search" placeholder="Search..."/> 
                        <input type="submit" value="search" />
                    </div>
                </div>  
                <ul className='spots-index-list'>
                   {spots}
                </ul>

                <div className='site-additional-info'>
                    {/* <img src='https://in-tents-seed.s3-us-west-1.amazonaws.com/main_images/tent-love.gif' className='logo-gif' /> */}
                </div>
            </div>
        );
    }
}

export default SpotIndex;