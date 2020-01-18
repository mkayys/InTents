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
        this.handleReviewFormState = this.handleReviewFormState.bind(this);
        this.updateBody = this.updateBody.bind(this);
    }

    componentDidMount() {
        // this.props.fetchReviews();
        this.props.fetchReviewsForSpot(this.props.spot.id)
    }

    handleReviewFormState(review) {
        this.setState({ body: review.body})
        // console.log(this.state)
        debugger
        // return (e) => {
        //     e.preventDefault();
        //     this.setState({
        //         body: review.body
        //     })

        //     console.log(this.state)
            
        // }
    }

    updateBody(e) {
        this.setState({ body: e.target.value })
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
                    spot={this.props.spot}
                    updateBody={this.updateBody} />
                <ul className='reviews-index-list'>
                    {reviews}
                </ul>
            </div>
        );
    }
}

export default ReviewIndex;