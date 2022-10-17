import {getResource, postResource} from "../interest-service/InterestService";

const _apiBaseUser = 'https://localhost:5001/api/User';

export const getAllUsers = async () => {
    const res = await getResource(_apiBaseUser);
    return res;
}

export const getUserById = async (id) => {
    const res = await getResource(`${_apiBaseUser}/${id}`);
    return res;
}

export const getUserByEmail = async (email) => {
    const res = await getResource(`${_apiBaseUser}/${email}/userbyemail`);
    return res;
}

export const isUserExistUsername = async (username) => {
    const res = await getResource(`${_apiBaseUser}/${username}/exist`);
    return res;
}

export const isUserExistEmail = async (email) => {
    const res = await getResource(`${_apiBaseUser}/${email}/user`);
    return res;
}

export const addUser = async (data) => {
    const res = await postResource(_apiBaseUser, data);
    return res;
}