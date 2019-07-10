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
                    {this.props.spot.campfire ? <i className="fas fa-dragon"> Campfires allowed</i> : <i className="fas fa-slash"> No campfires</i>}
                </div>

                <div className='toilets'>
                    {this.props.spot.toilets ? <i className="fas fa-toilet-paper"> Toilet available</i> : <i className="fas fa-slash"> No toilet</i>}
                </div>

                <div className='pets'>
                    {this.props.spot.pets ? <i className="fas fa-dog"> Pets allowed</i> : <i className="fas fa-slash"> No pets</i>}
                </div>

                <div className='pull-through'>
                    {this.props.spot.pullThrough ? <i className="fas fa-arrows-alt-h"> Pull-through site</i> : <i className="fas fa-slash"> No pull-through</i>}
                </div>

                <div className='hookups'>
                    {this.props.spot.hookups ? <i className="fas fa-exchange-alt"> Hookups available</i> : <i className="fas fa-slash"> No hookups</i>}
                </div>

            </div>
        );
    }
}

export default SpotShowEssentials;