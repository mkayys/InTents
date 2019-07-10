import React from 'react';

class SpotShowEssentials extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.spot === undefined) return null;
        return (
            <div className='show-essentials-details'>
                <div className='essentials-title'>Essentials</div>

                <div className='campfire'>
                    {this.props.spot.campfire ? <i className="fas fa-dragon"><span className='next-to-icon-text'> Campfires allowed</span></i> : <i className="fas fa-slash"><span className='next-to-icon-not-available-text'> No campfires</span></i>}
                </div>

                <div className='toilets'>
                    {this.props.spot.toilets ? <i className="fas fa-toilet-paper"><span className='next-to-icon-text'> Toilet available</span></i> : <i className="fas fa-slash"><span className='next-to-icon-not-available-text'> No toilet</span></i>}
                </div>

                <div className='pets'>
                    {this.props.spot.pets ? <i className="fas fa-dog"><span className='next-to-icon-text'> Pets allowed</span></i> : <i className="fas fa-slash"><span className='next-to-icon-not-available-text'> No pets</span></i>}
                </div>

                <div className='pull-through'>
                    {this.props.spot.pullThrough ? <i className="fas fa-arrows-alt-h"><span className='next-to-icon-text'> Pull-through site</span></i> : <i className="fas fa-slash"><span className='next-to-icon-not-available-text'> No pull-through</span></i>}
                </div>

                <div className='hookups'>
                    {this.props.spot.hookups ? <i className="fas fa-exchange-alt"> <span className='next-to-icon-text'> Hookups available </span></i> : <i className="fas fa-slash"><span className='next-to-icon-not-available-text'> No hookups</span></i>}
                </div>

            </div>
        );
    }
}

export default SpotShowEssentials;