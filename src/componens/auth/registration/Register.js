import React, {useEffect, useState} from "react";
import {isUserExistUsername, isUserExistEmail, addUser} from "../../../services/user-service/UserService";

import "./Register.css";


function Register(){

    const [userData, setUserData] = useState({
        username: '',
        description: '',
        email: '',
        password: '',
        profilePhoto: ''
    });

    async function validateUserData(userDb){

        let usernameIsCorrect = false;
        let emailIsCorrect = false;
        let passwordIsCorrect = false;

        if(userDb.username.trim() !== ''){
            await isUserExistUsername(userDb.username).then(res => {
                if(res){
                    usernameIsCorrect = false;
                    console.log('This username is exist!');
                }else{
                    usernameIsCorrect = true;
                }
            });
        }else{
            usernameIsCorrect = false;
            console.log('Enter username!');
        }

        if(userDb.email.trim() !== ''){
            await isUserExistEmail(userDb.email).then(res => {
                if(res){
                    emailIsCorrect = false;
                    console.log('This email is exist!');
                }else{
                    emailIsCorrect = true;
                }
            });
        }else{
            emailIsCorrect = false;
            console.log('Enter email!');
        }

        if(userDb.password.trim() !== ''){
            passwordIsCorrect = true;
        }else{
            passwordIsCorrect = false;
            console.log('Enter password!');
        }

        return usernameIsCorrect && emailIsCorrect && passwordIsCorrect;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            username: userData.username,
            password: userData.password,
            email: userData.email,
            description: userData.description,
            roleId:2
        };

        validateUserData(userData).then(function(result){
            if(result){
               addUser(data)
                   .then(() => console.log('Success'))
                   .catch(() => console.log('Error'))
            }
        })
    }

    return(
        <div className="main-block">
            <div className="form-block-register">
                <h1>Registration</h1>
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input
                        className = 'error-value'
                        type="text"
                        name="username"
                        onChange={e => setUserData({
                            ...userData,
                            username: e.target.value
                        })}
                    />
                    <label>Description</label>
                    <textarea name="description"
                              maxLength="200"
                              onChange={e => setUserData({
                                  ...userData,
                                  description: e.target.value
                              })}>

                    </textarea>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        onChange={e => setUserData({
                            ...userData,
                            email: e.target.value
                        })}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={e => setUserData({
                            ...userData,
                            password: e.target.value
                        })}
                    />
                    <label>Profile photo</label>
                    <input
                        type="text"
                        name="profilpic"
                        onChange={e => setUserData({
                            ...userData,
                            profilePhoto: e.target.value
                        })}
                    />
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;