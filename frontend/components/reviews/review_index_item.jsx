import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { review, user, currentUserId, deleteReview, handleReviewFormState } = this.props;

        return (
            <li key={review.id} className='all-reviews'>
                <div className='review-list-and-cancel'>
                    <div className='review-info'>
                        <div>Review written by: {user.firstName} {user.lastName}</div>
                        <div>{review.body}</div>
                    </div>
                    <div className='edit-options'>
                        {review.guestId === currentUserId ? 
                        <div>
                                <i onClick={() => handleReviewFormState(review)} className="far fa-edit"></i>
                                <i onClick={() => deleteReview(review.id)} className="fas fa-trash-alt"></i>
                                {/* <i onClick={() => deleteReview(review.id)} className="fas fa-trash"></i> */}
                            {/* <i onClick={() => deleteReview(review.id)} className="fas fa-trash-alt"></i> */}
                            {/* <button onClick={() => deleteReview(review.id)}>Remove Review</button> */}
                        </div> : <div></div> }
                    </div>
                </div>
            </li>


        );

    };

};

export default ReviewIndexItem;
