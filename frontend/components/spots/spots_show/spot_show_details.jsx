import React from 'react';

class SpotShowDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.spot === undefined) return null;
        return (
            <div className='show-details-info'>
                <div className='details-title'>Details</div>

                <strong>Check in:</strong> {this.props.spot.checkIn}
                <strong>Check out:</strong> {this.props.spot.checkOut}
                <strong>Cancellation policy:</strong> {this.props.spot.cancellation}

                <strong>On arrival:</strong> {this.props.spot.onArrival}
                <strong>Minimum nights:</strong > {this.props.spot.minNights} night(s)

            </div>
        );
    }
}

export default SpotShowDetails;