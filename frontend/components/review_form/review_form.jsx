import React from 'react';


class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spot_id: this.props.spot.id,
            body: ""
        }
        // spot_id is coming from prop threading in the spot show page
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    componentWillMount() {
        // this.props.clearErrors();
        // need to create a review clear errors action
    }


    handleSubmit(e) {
        e.preventDefault();
        if (this.props.loggedIn) {
            // if (this.state.num_guests > this.props.maxGuests){
            //     console.log('TOOLTIP');
            // } else {
            const review = Object.assign({}, this.state);
            this.props.createReview(review);
            // this.props.processForm(booking).then(() => this.props.history.push('/profile'));
            // }    
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


    render() {
        return (
            <div className="review-form-container">
                <form className="review-form-box">
                    <div className='review-inputs'>
                        {/* {this.renderErrors()} */}

                        <div className='review-button-box'>
                            <input
                                className='review-button'
                                type="submit"
                                value="Request to book"
                                onClick={this.handleSubmit}
                            />
                        </div>
                    </div>
                </form>
            </div>
        );

    }
}

export default ReviewForm;