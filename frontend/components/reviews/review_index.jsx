import React from 'react';
import ReviewIndexItem from './review_index_item';
import { Link } from 'react-router-dom';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchReviews();
        this.props.fetchReviewsForSpot(this.props.spot.id)
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
                    user={user} />
            )
        });

        return (
            <div>
                <ul className='reviews-index-list'>
                    {reviews}
                </ul>
            </div>
        );
    }
}

export default ReviewIndex;