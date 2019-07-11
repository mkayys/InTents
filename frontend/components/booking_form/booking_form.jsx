import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkIn: 0,
            checkOut: 0,
            numGuests: 1
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckIn = this.handleCheckIn.bind(this);
        this.handleCheckOut = this.handleCheckOut.bind(this);
    }

    // componentWillMount() {
    //     this.props.clearErrors();
    // }

    componentWillUpdate() {
        console.log(this.state);
    }

    update(field) {
        return e => this.setState({
            [field]: parseInt(e.currentTarget.value)
        });
    }

    handleCheckIn(date) {
        this.setState({
            checkIn: date
        });
    }

    handleCheckOut(date) {

        this.setState({
            checkOut: date
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const booking = Object.assign({}, this.state);
        this.props.processForm(booking);
    }


    renderErrors() {
        return (
            <div>
                <ul className='login-errors'>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }


    render() {
        return (
            <div className="booking-form-container">
                <form className="booking-form-box">

                    {this.renderErrors()}

                    <div className="booking-check-in">
                        <div className='checkin-title'>Check in</div>
                        <DatePicker 
                            placeholderText="Select date"
                            openToDate={new Date()}
                            selected={this.state.checkIn}
                            onChange={this.handleCheckIn} />

                    </div>

                    <div className="booking-check-out">
                        <div className='checkout-title'>Check out</div>
                        <DatePicker
                            placeholderText="Select date"
                            selected={this.state.checkOut}
                            onChange={this.handleCheckOut} />
                    </div>

                    <div className="booking-num-guests">
                        <div className='guests-title'>Guests</div>
                        <input
                            className="num-guests"
                            type="number"
                            onChange={this.update('numGuests')}
                        />
                    </div>

                    <div className='booking-button-box'>
                        <input
                            className='booking-button'
                            type="submit"
                            value="Instant book"
                            onClick={this.handleSubmit}
                        />
                    </div>
                
                </form>
            </div>
        );

    }
}

export default BookingForm;