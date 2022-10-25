import {getResource, postResource} from "../interest-service/InterestService";

const _apiBaseComment = 'https://localhost:5001/api/Comment';

export const getCommentsByPostId = async (id) => {
    const res = await getResource(`${_apiBaseComment}/${id}`);
    return res;
}

export const createComment = async (data) => {
    const res = await postResource(_apiBaseComment, data);
    return res;
}