export const fetchReviews = () => {
    return $.ajax({
        method: 'get',
        url: '/api/reviews',
    });
};

//testing
export const fetchReviewsForSpot = (spotId) => {
    return $.ajax({
        method: 'get',
        url: `/api/reviews?spot_id=${spotId}`
    });
};

export const fetchReview = (id) => {
    return $.ajax({
        method: 'get',
        url: `/api/reviews/${id}`
    });
};

export const createReview = (review) => {
    return $.ajax({
        method: 'post',
        url: '/api/reviews',
        data: { review }
    });
};

export const updateReview = (review) => {
    return $.ajax({
        method: 'patch',
        url: `/api/reviews/${review.id}`,
        data: { review }
    });
};

export const deleteReview = (id) => {
    return $.ajax({
        method: 'delete',
        url: `/api/reviews/${id}`
    });
};
