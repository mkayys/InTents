import React from 'react';

//testing
import EditReviewFormContainer from '../review_form/edit_review_form_container';

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            editing: false
        }

        this.toggleEditStatus = this.toggleEditStatus.bind(this);
        this.showEditForm = this.showEditForm.bind(this);
    }

    toggleEditStatus() {
        // e.preventDefault();
        this.setState(prevState => ({
            editing: !prevState.editing
        }))
    }

    showEditForm() {
        const { review, user, currentUserId, deleteReview } = this.props;

        if (this.state.editing) {
            return (
                <div>
                    <EditReviewFormContainer
                        spotId={review.spotId}
                        review={review}
                        toggleEditStatus={this.toggleEditStatus}
                        />
                    
                </div>
            )
        } else {
            return (
                <div className='review-list-and-cancel'>
                    <div className='review-info'>
                        <div>{user.firstName} {user.lastName[0]}. says: </div>
                        <div>{review.body}</div>
                    </div>
                    <div className='edit-options'>
                        {/* <div>{review.createdAt}</div> */}
                        <div>{review.posted}</div>
                        {review.guestId === currentUserId ?
                            <div>
                                <i onClick={this.toggleEditStatus} className="far fa-edit"></i>
                                {/* <i onClick={} className="far fa-edit"></i> */}
                                <i onClick={() => deleteReview(review.id)} className="fas fa-trash-alt"></i>

                            </div> : <div></div>}
                    </div>
                </div>
            )
        }
    }


    render() {
        const { review } = this.props;

        return (
            <li key={review.id} className='all-reviews'>
                {this.showEditForm()}
            </li>
        )
        // return (
        //     <li key={review.id} className='all-reviews'>
        //         <div className='review-list-and-cancel'>
        //             <div className='review-info'>
        //                 <div>{user.firstName} {user.lastName[0]}. says: </div> 
        //                 <div>{review.body}</div>
        //             </div>
        //             <div className='edit-options'>
        //                 {/* <div>{review.createdAt}</div> */}
        //                 {review.guestId === currentUserId ? 
        //                 <div>
        //                         <i onClick={this.toggleEditStatus} className="far fa-edit"></i>
        //                         {/* <i onClick={} className="far fa-edit"></i> */}
        //                         <i onClick={() => deleteReview(review.id)} className="fas fa-trash-alt"></i>

        //                 </div> : <div></div> }
        //             </div>
        //         </div>
        //     </li>


        // );

    };

};

export default ReviewIndexItem;
