
const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
];

export const getFormatDate = (date) => {
    let postDateCreation = new Date(date);
    let postMonth = postDateCreation.getMonth()+1 < 10 ? `0${postDateCreation.getMonth()+1}` : postDateCreation.getMonth()+1;
    let postDay = postDateCreation.getDate() < 10 ? `0${postDateCreation.getDate()}` : postDateCreation.getDate();
    return `${postDateCreation.getFullYear()}-${postMonth}-${postDay}`;
}

export const getTextMonthFormatDate = (date) => {
    let postDateCreation = new Date(date);
    let postYear = postDateCreation.getFullYear();
    let postMonth = postDateCreation.getMonth()+1;
    let postDay = postDateCreation.getDate();
    return `${postDay} ${months[postMonth-1]} ${postYear}`;
}