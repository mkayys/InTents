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

                <div className='details-info'>
                    <div className='details-info-1'>
                        <br />
                        <strong>Check in:</strong> {this.props.spot.checkIn}
                        <br />
                        <strong>Check out:</strong> {this.props.spot.checkOut}
                        <br />
                        <strong>Cancellation policy:</strong> {this.props.spot.cancellation}
                    </div>

                    <div className='details-info-2'>
                        <br />
                        <strong>On arrival:</strong> {this.props.spot.onArrival}
                        <br />
                        <strong>Minimum nights:</strong > {this.props.spot.minNights} night(s)
                    </div>
                </div>
            </div>
        );
    }
}

export default SpotShowDetails;