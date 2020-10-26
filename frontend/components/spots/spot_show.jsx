import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import SpotShowCampsite from './spots_show/spot_show_campsite';
import SpotShowEssentials from './spots_show/spot_show_essentials';
import SpotShowAmenities from './spots_show/spot_show_amenities';
import SpotShowDetails from './spots_show/spot_show_details';
import BookingFormContainer from '../booking_form/booking_form_container';

//testing

import ReviewIndexContainer from '../reviews/review_index_container';


class SpotShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSpot(this.props.match.params.spotId);
        // this.props.fetchUser(this.props.spot.hostId);
    }

    // componentDidUpdate() {
    //     this.props.fetchUser(this.props.spot.hostId);
    // }

    render() {
        if (this.props.spot === undefined) return null;
        if (this.props.host === undefined) return null;
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

                
                <div className='spot-show-parent-container'>
                    <div className='spot-show-description'>
                        <div className='spot-show-name'>
                            {this.props.spot.name} <i className="fas fa-check-circle"></i>
                        </div>
                        <div className='spot-show-location'>
                            <strong>Nearby:</strong> {this.props.spot.nearby}
                        </div>
                        <div className='spot-show-recommend'>
                            <i className="fas fa-thumbs-up"></i> &nbsp;<strong>Recommend</strong>
                        </div>
                        <br />

                        <div className='spot-show-host-about'>
                            <div className='spot-show-host'>
                                <i className="fas fa-user-circle"></i> 
                                <div className='host-name'>
                                    Hosted by
                                    <br />
                                    {this.props.host.firstName} {this.props.host.lastName[0]}.
                                </div>
                            </div> &nbsp;
                            <div className='spot-show-about'>
                                {this.props.spot.about}
                            </div>
                        </div>

                        <div className='spot-show-description-icons'>
                            <SpotShowCampsite spot={this.props.spot} />
                            <SpotShowEssentials spot={this.props.spot} />
                            <SpotShowAmenities spot={this.props.spot} />
                        </div> 

                        <div className='spot-show-details'>
                            <div className='spot-show-details-box'>
                                <SpotShowDetails spot={this.props.spot} />
                            </div>
                        </div>
                    </div>

                    <div className='booking-container'>
                        <div className='spot-show-booking-box'>
                            <div className='booking-price-per-night'>
                                <div className='booking-price'>
                                    ${this.props.spot.price}
                                    <div className='booking-per-night'>per night</div>
                                </div>
                            </div>
                            

                            <BookingFormContainer spot={this.props.spot} />
                            {/* BOOKING COMPONENT HERE */}
                            {/* <div className='booking-calendar-guest'>
                                <div className='booking-check-in'>

                                </div>

                                <div className='booking-checkout'>

                                </div>

                                <div className='booking-num-guest'>

                                </div>

                                <div className='booking-button'>

                                </div>

                            </div> */}
                        </div>
                    </div>
                </div>


                <div>
                    <h1>Reviews</h1>
                    
                    <ReviewIndexContainer spot={this.props.spot} />
                </div>

            </div>
        );
    }
}

export default SpotShow;
