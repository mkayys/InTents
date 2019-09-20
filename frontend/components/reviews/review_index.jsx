import React from 'react';
import ReviewIndexItem from './review_index_item';
import { Link } from 'react-router-dom';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchReviews();
    }

    render() {
        const reviews = this.props.reviews.map(review => (
            <ReviewIndexItem
                key={review.id}
                review={review} />
        ));

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