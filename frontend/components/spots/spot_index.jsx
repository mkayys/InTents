import React from 'react';
import SpotIndexItem from './spot_index_item';
import { Link } from 'react-router-dom';

class SpotIndex extends React.Component {

    componentDidMount() {
        this.props.fetchSpots();
    }

    render() {

        return (
            <div>
                <ul>
                    {this.props.spots.map(spot => (
                        <SpotIndexItem
                            key={spot.id}
                            spot={spot}
                            // fetchSpot={this.props.fetchSpot} 
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default SpotIndex;