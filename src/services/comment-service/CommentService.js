import {getResource} from "../interest-service/InterestService";

const _apiBaseComment = 'https://localhost:5001/api/Comment';

export const getCommentsByPostId = async (id) => {
    const res = await getResource(`${_apiBaseComment}/${id}`);
    return res;
}