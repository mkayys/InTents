import React from 'react';
import ReviewIndexItem from './review_index_item';
import { Link } from 'react-router-dom';

import ReviewFormContainer from '../review_form/review_form_container';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spot_id: this.props.spot.id,
            body: ""
        }

        this.type = 'create';
        this.handleReviewFormState = this.handleReviewFormState.bind(this);
        this.updateBody = this.updateBody.bind(this);
        // this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // this.props.fetchReviews();
        this.props.fetchReviewsForSpot(this.props.spot.id)
    }

    handleReviewFormState(review) {
        // debugger
        // this.reviewId = review.id;
        this.setState({ body: review.body, id: review.id })
        // console.log(this.state)
        // debugger
        // return (e) => {
        //     e.preventDefault();
        //     this.setState({
        //         body: review.body
        //     })

        //     console.log(this.state)
            
        // }
        this.type = 'update';
    }

    updateBody(e) {
        this.setState({ body: e.target.value })
    }

    // handleUpdateSubmit(e) {
    //     e.preventDefault();
    //     const review = Object.assign({}, this.state);
    //     this.props.updateReview(review);
    // }

    handleSubmit(e) {
        e.preventDefault();
        if (this.type === 'create') {
            if (this.props.loggedIn) {
                // if (this.state.num_guests > this.props.maxGuests){
                //     console.log('TOOLTIP');
                // } else {
                let review = Object.assign({}, this.state);
                this.props.createReview(review)
                    .then(() => {
                        this.setState({ body: '', id: null })
                    });
                // this.props.processForm(booking).then(() => this.props.history.push('/profile'));
                // }    
            } else {
                this.props.requireLogin();
            }
        } else {
            const review = Object.assign({}, this.state);
            this.props.updateReview(review)
                .then(() => {
                    this.type = 'create'
                    this.setState({ body: '', id: null })
                });
        }
    }

    render() {
        const reviews = this.props.reviews.map(review => {
            let user = undefined;
            this.props.users.forEach(potentialUser => {
                if (review.guestId === potentialUser.id) {
                    user = potentialUser;
                }
            })
            return (
                <ReviewIndexItem
                    key={review.id}
                    review={review}
                    user={user}
                    deleteReview={this.props.deleteReview}
                    currentUserId={this.props.currentUserId}
                    handleReviewFormState={this.handleReviewFormState} />
            )
        });

        return (
            <div>
                <ReviewFormContainer
                    type={this.type}
                    spot={this.state}
                    updateBody={this.updateBody}
                    handleSubmit={this.handleSubmit} />
                <ul className='reviews-index-list'>
                    {reviews}
                </ul>
            </div>
        );
    }
}

export default ReviewIndex;