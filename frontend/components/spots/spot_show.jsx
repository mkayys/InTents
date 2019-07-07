import React from 'react';
import { Link } from 'react-router-dom';

class SpotShow extends React.Component {

    componentDidMount() {
        this.props.fetchSpot(this.props.match.params.spotId);
    }

    render() {
        return (
            <div>
                {this.props.spot.name}
                {this.props.spot.nearby}
                {this.props.spot.about}
            </div>
        );
    }
}

export default SpotShow;
