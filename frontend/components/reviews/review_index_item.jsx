import React from 'react';
import { Link } from 'react-router-dom';

//testing
import ReviewFormContainer from '../review_form/review_form_container';

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }


    // handle


    render() {
        const { review, user, currentUserId, deleteReview, handleReviewFormState } = this.props;

        // const editReview  = (
        //     <ReviewFormContainer
        //         type={this.type}
        //         spot={this.state}
        //         updateBody={this.updateBody}
        //         handleSubmit={this.handleSubmit} />
        // )

        return (
            <li key={review.id} className='all-reviews'>
                <div className='review-list-and-cancel'>
                    <div className='review-info'>
                        <div>{user.firstName} {user.lastName[0]}. says: </div> 
                        <div>{review.body}</div>
                    </div>
                    <div className='edit-options'>
                        {/* <div>{review.createdAt}</div> */}
                        {review.guestId === currentUserId ? 
                        <div>
                                <i onClick={() => handleReviewFormState(review)} className="far fa-edit"></i>
                                {/* <i onClick={} className="far fa-edit"></i> */}
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
