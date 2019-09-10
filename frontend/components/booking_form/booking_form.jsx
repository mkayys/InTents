import React from 'react';
import DatePicker from 'react-datepicker';
import { withRouter } from 'react-router-dom';

import 'react-datepicker/dist/react-datepicker.css';

class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spot_id: this.props.spot.id,
            check_in: 0,
            check_out: 0,
            num_guests: 1
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckIn = this.handleCheckIn.bind(this);
        this.handleCheckOut = this.handleCheckOut.bind(this);
    }

    componentWillMount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: parseInt(e.currentTarget.value)
        });
    }

    handleCheckIn(date) {
        this.setState({
            check_in: date
        });
    }

    handleCheckOut(date) {
        this.setState({
            check_out: date
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.loggedIn) {
            
            const booking = Object.assign({}, this.state);
            this.props.processForm(booking).then(() => this.props.history.push('/profile'));
            
        } else {
            this.props.requireLogin();
        }
    }


    // renderErrors() {
    //     return (
    //         <div>
    //             <ul className='login-errors'>
    //                 { console.log(this.props.errors) }
    //                 {this.props.errors.map((error, i) => (
    //                     <li key={`error-${i}`}>
    //                         {error}
    //                     </li>
    //                 ))}
    //             </ul>
    //         </div>
    //     );
    // }

    renderCheckInError() {
        let { errors } = this.props;
        return (
            <div>
                <ul className='login-errors'>
                    {errors.includes("Check in can't be blank") ? <li>{errors[errors.indexOf("Check in can't be blank")]}</li> : ""}
                </ul>
            </div>
        );
    }

    renderCheckOutError() {
        let { errors } = this.props;
        return (
            <div>
                <ul className='login-errors'>
                    {errors.includes("Check out can't be blank") ? <li>{errors[errors.indexOf("Check out can't be blank")]}</li> : ""}
                </ul>
            </div>
        );
    }


    render() {
        return (
            <div className="booking-form-container">
                <form className="booking-form-box">
                    <div className='booking-inputs'>
                        {/* {this.renderErrors()} */}

                        <div className="booking-check-in">
                            <div className='checkin-title'>Check in</div>
                            <DatePicker 
                                className='checkin-input booking-input'
                                placeholderText="Select date"
                                openToDate={new Date()}
                                selected={this.state.check_in}
                                onChange={this.handleCheckIn} />
                            
                            {this.renderCheckInError()}

                        </div>

                        <div className="booking-check-out">
                            <div className='checkout-title'>Check out</div>
                            <DatePicker
                                className='checkout-input booking-input'
                                placeholderText="Select date"
                                selected={this.state.check_out}
                                onChange={this.handleCheckOut} />

                            {this.renderCheckOutError()}

                        </div>

                        <div className="booking-num-guests">
                            <div className='guests-title'>Guests</div>
                            <input
                                className="num-guests booking-input"
                                id="guest-number"
                                value={this.state.num_guests}
                                type="number"
                                onChange={this.update('num_guests')}
                            />
                        </div>
                    </div>

                    <div className='booking-button-box'>
                        <input
                            className='booking-button'
                            type="submit"
                            value="Request to book"
                            onClick={this.handleSubmit}
                        />
                    </div>
                
                </form>
            </div>
        );

    }
}

export default withRouter(BookingForm);