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
        // this.updateBody = this.updateBody.bind(this);
        
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

    // updateBody(e) {
    //     this.setState({ body: e.target.value })
    // }


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
                        <input 
                            type="text" 
                            value={this.state.body}
                            onChange={this.props.updateBody}/>

                        <div className='review-button-box'>
                            <input
                                className='review-button'
                                type="submit"
                                value="Submit Review"
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