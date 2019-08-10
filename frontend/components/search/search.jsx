import React from 'react';
import ReactDOM from 'react-dom';
import SpotMap from '../spots/spot_map';
import SpotIndex from '../spots/spot_index';

class Search extends React.Component {
    
    render() {
        return (
            <div className='index-and-map-page'>
                <h1>Your next adventure awaits</h1>
                <div className='index-page'>
                    {/* <div className='spots-listed'> 
                        <SpotIndex
                            spots={this.props.spots}
                            fetchSpots={this.props.fetchSpots} />
                    </div> */}
                    <div className='spots-map'>
                        <SpotMap
                            spots={this.props.spots}
                            fetchSpots={this.props.fetchSpots}
                            updateBounds={this.props.updateBounds} />

                    </div>
                </div>
            </div>
        )
    };
};


export default Search;