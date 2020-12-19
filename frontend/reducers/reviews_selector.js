export const mostRecentFirst = (reviews) => {
    let orderedReviews = Object.values(reviews).reverse();
    if(orderedReviews.length === 0) return [];
    return orderedReviews.map((review) => {
        review.posted = parseReviewDate(review.posted);
        return review;
    });
    // return orderedReviews;
}

const months = {
    "1": "January",
    "2": "February",
    "3": "March",
    "4": "April",
    "5": "May",
    "6": "June",
    "7": "July",
    "8": "August",
    "9": "September",
    "10": "October",
    "11": "November",
    "12": "December"
};

const parseReviewDate = (postDate) => {
    if (!postDate.includes("-")) return postDate;
    let dateArr = postDate.split("-");
    // ["2020", "12", "17"]
    let newDateStr = "";
    let month = months[dateArr[1]];
    let date = dateArr[2];
    if (dateArr[2][0] === "0") {
        date = dateArr[2][1];
    }
    return `${month} ${date}, ${dateArr[0]}`
}