import React from 'react';
import SpotIndexItem from './spot_index_item';
import { Link } from 'react-router-dom';

//loading:
import LoadingIcon from '../loading/loading_icon';

class SpotIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchSpots();
    }

    handleSearch() {

    }

    render() {
        const spots = this.props.spots.map(spot => (
            <SpotIndexItem
                key={spot.id}
                spot={spot} />
        ));

        // if (this.props.loading) {
        //     return <LoadingIcon />
        // }
        
        return (
            <div className="">
                <div className="test-container">
                    <span className='test-1'>Find yourself in a tent among the stars.</span>
                    <br />
                    <span className="test-2">
                        Book adventures where your tent leads.
                    </span>
                    {/* <div className="search-bar"> 
                        <input type="search" placeholder="Try Yosemite"/>
                        <div className="search-button">
                            <i className="fas fa-search" ></i>
                        </div> 
                    </div> */}
                </div>  
                <ul className='spots-index-list'>
                   {spots}
                   {this.props.loading ? <LoadingIcon /> : spots}
                </ul>

                <div className='site-additional-info'>
                    <img src='https://in-tents-seed.s3-us-west-1.amazonaws.com/main_images/tent-arms.svg' className='main-image' />

                    <img src='https://in-tents-seed.s3-us-west-1.amazonaws.com/main_images/bill-sun.svg' className='main-image' />
                    <img src='https://in-tents-seed.s3-us-west-1.amazonaws.com/main_images/palm-eye.svg' className='main-image' />
                </div>
            </div>
        );
    }
}

export default SpotIndex;