export const mostRecentFirst = (reviews) => {
    let orderedReviews = Object.values(reviews).reverse();

    return orderedReviews.map((review) => {
        return parseReviewDate(review.posted);
    })

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
}

const parseReviewDate = (date) => {
    let dateArr = date.split("-");
    // ["2020", "12", "17"]
    let newDateStr = "";
    let month = months[dateArr[1]];
    if (dateArr[2])
    return `${month} ${dateArr[2]}, ${dateArr[3]}`
}