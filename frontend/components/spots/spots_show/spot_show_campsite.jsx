import React from 'react';

class SpotShowCampsite extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.spot === undefined) return null;
        return (
            <div className='show-campsite-details'>
                <div className='campsite-title'>Campsite Area</div>

                <div className='max-guest'>
                    <i className="fas fa-users"></i> Up to {this.props.spot.maxGuests} guests
                </div>

                <div className='parking'>
                    {this.props.spot.parking ? <i className="fas fa-parking"> <span className='park-text'>Park at spot</span></i> : <i className="fas fa-hiking"> <span className='park-text'>Walk to spot</span></i> }
                </div>
                
                <div className='ada-access'>
                    {this.props.spot.adaAccess ? <i className="fab fa-accessible-icon"><span className='ada-text'> ADA access</span></i> : <i className="fas fa-slash"> No ADA access</i> }
                </div>

            </div>
        );
    }
}

export default SpotShowCampsite;