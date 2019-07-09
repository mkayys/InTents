import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';

class SpotShow extends React.Component {

    componentDidMount() {
        this.props.fetchSpot(this.props.match.params.spotId);
    }

    render() {
        if (this.props.spot === undefined) return null;
        return (
            <div className='spot-show-information'>
                <div className='spot-show-pictures'>
                    <Carousel>
                        <img src={this.props.spot.photoUrls[0]} className='pic-slides' />
                        <img src={this.props.spot.photoUrls[1]} className='pic-slides' />
                        <img src={this.props.spot.photoUrls[2]} className='pic-slides' />
                        <img src={this.props.spot.photoUrls[3]} className='pic-slides' />
                    </Carousel>
                </div>
                <br />
                <div className='spot-show-description'>
                    <div className='spot-show-name'>
                        {this.props.spot.name} <i className="fas fa-check-circle"></i>
                    </div>
                    <div className='spot-show-location'>
                        <strong>Nearby:</strong> {this.props.spot.nearby}
                    </div>
                    <div className='spot-show-details'>
                        <div className='spot-show-host'>
                            <i className="fas fa-user-circle"></i> {this.props.spot.hostId}
                        </div> &nbsp;
                        <div className='spot-show-about'>
                            {this.props.spot.about}
                        </div>
                        <div className='spot-show-booking'>
                            {this.props.price}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SpotShow;
