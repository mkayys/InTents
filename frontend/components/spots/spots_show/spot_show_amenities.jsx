import React from 'react';

class SpotShowAmenities extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.spot === undefined) return null;
        return (
            <div className='show-amenities-details'>
                <div className='amenities-title'>Amenities</div>

                <div className='potable-water'>
                    {this.props.spot.potableWater ? <i className="fas fa-tint"> Potable water available</i> : <i className="fas fa-slash"> No campfires</i>}
                </div>

                <div className='showers'>
                    {this.props.spot.showers ? <i className="fas fa-bath"> Showers available</i> : <i className="fas fa-slash"> No showers</i>}
                </div>

                <div className='picnic-table'>
                    {this.props.spot.picnicTable ? <i className="fab fa-app-store-ios"> Picnic table available</i> : <i className="fas fa-slash"> No picnic tables</i>}
                </div>

                <div className='bins'>
                    {this.props.spot.bins ? <i className="far fa-trash-alt"> Bins available</i> : <i className="fas fa-slash"> Pack it up</i>}
                </div>

            </div>
        );
    }
}

export default SpotShowAmenities;