import React from 'react';

class EditReviewForm extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.state = {
            spot_id: this.props.spotId,
            // body: (this.props.review ? this.props.review.body : '')
            body: this.props.review.body
        }
        // spot_id is coming from prop threading in the spot show page
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBody = this.updateBody.bind(this);

    }


    componentDidMount() {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();

        const review = Object.assign({}, this.state);
        review.id = this.props.review.id;
        this.props.updateReview(review)
            .then(this.props.toggleEditStatus);

    }

    updateBody(e) {
        this.setState({ body: e.target.value })
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
        // debugger
        return (
            <div className="review-form-container">
                <fieldset>
                    <legend>Write a Review:</legend>
                    <div className="review-form-box">
                        <div className='review-inputs'>
                            {this.renderErrors()}
                            <input
                                className="review-body"
                                type="text"
                                value={this.state.body}
                                onChange={this.updateBody} />
                            {/* <textarea 
                                className="review-body"
                                cols="75" rows="2"
                                onChange={this.props.updateBody} >
                                {this.props.spot.body}
                            </textarea> */}

                            <div className='review-button-box'>
                                <input
                                    className='review-button'
                                    type="submit"
                                    value="Submit"
                                    onClick={this.handleSubmit} />
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
        );

    }
}

export default EditReviewForm;