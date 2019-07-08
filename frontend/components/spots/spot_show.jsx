import React from 'react';
import { Link } from 'react-router-dom';

class SpotShow extends React.Component {

    componentDidMount() {
        this.props.fetchSpot(this.props.match.params.spotId);
    }

    render() {
        if (this.props.spot === undefined) return null;
        return (
            <div className='spot-show-information'>
                <div className='spot-show-description'>
                    {this.props.spot.name}
                    {this.props.spot.nearby}
                    {this.props.spot.about}
                </div>
            </div>
        );
    }
}

export default SpotShow;
