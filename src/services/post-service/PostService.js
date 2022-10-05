import {getResource, postResource, updateResouce, deleteResource} from "../interest-service/InterestService";

const _apiBasePost = 'https://localhost:5001/api/Post';

export const getAllPosts = async () => {
    const res = await getResource(_apiBasePost);
    return res;
}

export const getPost = async (id) => {
    const res = await getResource(`${_apiBasePost}/${id}`);
    return res;
}

export const createPost = async (data) => {
    const res = await postResource(_apiBasePost, data);
    return res;
}

export const deletePost = async (id) => {
    const res = await deleteResource(`${_apiBasePost}/${id}`);
    return res;
}

export const updatePost = async (data) => {
    const res = await updateResouce(`${_apiBasePost}`, data);
    return res;
}