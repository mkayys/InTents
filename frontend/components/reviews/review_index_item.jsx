import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { review, user } = this.props;


        return (
            <li key={review.id} className='all-reviews'>
                <div className='review-list-and-cancel'>
                    <div>Review written by: {user.firstName} {user.lastName}</div>
                    <div>{review.body}</div>
                </div>
            </li>


        );

    };

};

export default ReviewIndexItem;
