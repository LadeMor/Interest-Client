import React from "react";

export const userLogin = () => {
    localStorage.setItem('isUserLogin', "true");
}

export const userLogout = () => {
    localStorage.setItem('isUserLogin', "false");
}

export const setUserId = (userId) => {
    localStorage.setItem('UserId', userId);
}

export const setUserName = (userName) => {
    localStorage.setItem('Username', userName);
}

export const setUserPassword = (userPassword) => {
    localStorage.setItem('UserPassword', userPassword);
}

export const setUserEmail = (userEmail) => {
    localStorage.setItem('UserEmail', userEmail);
}

export const setUserDescription = (userDescription) => {
    localStorage.setItem('UserDescription', userDescription);
}

export const setUserRoleId = (userRoleId) => {
    localStorage.setItem('UserRoleId', userRoleId);
}

export const setUserProfilePhoto = (userProfilePhoto) => {
    localStorage.setItem('UserProfilePhoto', userProfilePhoto);
}

export const getIsUserLogin = () => {
    return localStorage.getItem('isUserLogin');
}

export const getUserId = () => {
    return localStorage.getItem('UserId');
}

export const getUserName = () =>{
    return localStorage.getItem('Username');
}

export const getUserPassword = () => {
    return localStorage.getItem('UserPassword');
}

export const getUserEmail = () => {
    return localStorage.getItem('UserEmail');
}

export const getUserDescription = () => {
    return localStorage.getItem('UserDescription');
}

export const getUserRoleId = () => {
    return localStorage.getItem('UserRoleId');
}

export const getUserProfilePhoto = () => {
    return localStorage.getItem('UserProfilePhoto');
}

export const userExitFromAccount = () => {
    userLogout();
    setUserId('');
    setUserName('');
    setUserPassword('');
    setUserEmail('');
    setUserDescription('');
    setUserRoleId('');
    setUserProfilePhoto('');
}

export const addDataToStorage = (data) => {
    userLogin();
    setUserId(data.id);
    setUserName(data.username);
    setUserPassword(data.password);
    setUserEmail(data.email);
    setUserDescription(data.description);
    setUserRoleId(data.roleId);
    setUserProfilePhoto(data.profile_Photo);
}