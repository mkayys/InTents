import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { review, user, currentUserId, deleteReview } = this.props;
   

        return (
            <li key={review.id} className='all-reviews'>
                <div className='review-list-and-cancel'>
                    <div>Review written by: {user.firstName} {user.lastName}</div>
                    <div>{review.body}</div>
                    <div>
                        {review.guestId === currentUserId ? 
                        <div>
                            <i onClick={() => deleteReview(review.id)} className="fas fa-trash-alt"></i>
                            {/* <button onClick={() => deleteReview(review.id)}>Remove Review</button> */}
                        </div> : <div></div> }
                    </div>
                </div>
            </li>


        );

    };

};

export default ReviewIndexItem;
