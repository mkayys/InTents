import React from 'react';
import ReactDOM from 'react-dom';
import SpotMap from '../spots/spot_map';
import SpotIndex from '../spots/spot_index';

class Search extends React.Component {
    
    render() {
        return (
            <div>
                <div>
                    <SpotMap
                        spots={this.props.spots} />
                
                </div>
                <div> 
                    <SpotIndex
                        spots={this.props.spots}
                        fetchSpots={this.props.fetchSpots} />
                </div>
            </div>
        )
    };
};


export default Search;