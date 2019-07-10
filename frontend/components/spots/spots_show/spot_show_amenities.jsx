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
                    {this.props.spot.potableWater ? <i className="fas fa-tint"><span className='next-to-icon-text'> Potable water available</span></i> : <i className="fas fa-slash"><span className='next-to-icon-not-available-text'> No potable water</span></i>}
                </div>

                <div className='showers'>
                    {this.props.spot.showers ? <i className="fas fa-bath"><span className='next-to-icon-text'> Showers available</span></i> : <i className="fas fa-slash"><span className='next-to-icon-not-available-text'> No showers</span></i>}
                </div>

                <div className='picnic-table'>
                    {this.props.spot.picnicTable ? <i className="fab fa-app-store-ios"><span className='next-to-icon-text'> Picnic table available</span></i> : <i className="fas fa-slash"><span className='next-to-icon-not-available-text'> No picnic table</span></i>}
                </div>

                <div className='bins'>
                    {this.props.spot.bins ? <i className="far fa-trash-alt"><span className='next-to-icon-text'>Bins available</span></i> : <i className="fas fa-slash"><span className='next-to-icon-not-available-text'> Pack it out</span></i>}
                </div>

            </div>
        );
    }
}

export default SpotShowAmenities;