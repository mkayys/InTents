import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { review } = this.props;

        return (
            <li key={review.id} className='all-reviews'>
                <div className='review-list-and-cancel'>
                    {review.id}
                    {review.body}
                </div>
            </li>


        );

    };

};

export default ReviewIndexItem;
