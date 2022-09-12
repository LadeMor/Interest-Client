import React, {useEffect, useState} from "react";
import InterestService from "../../interest-service/InterestService";

import "./Register.css";


function Register(){

    const interestService = new InterestService();
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');

    async function validateUserData(userDb){

        let usernameIsCorrect = false;
        let emailIsCorrect = false;
        let passwordIsCorrect = false;

        if(userDb.username.trim() !== ''){
            await interestService.isUserExistUsername(userDb.username).then(res => {
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
            await interestService.isUserExistEmail(userDb.email).then(res => {
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

        const userData = {
            username: username,
            password: password,
            email: email,
            description: description,
            roleId:2
        };

        validateUserData(userData).then(function(result){
            if(result){
               interestService.addUser(userData)
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
                        onChange={e => setUsername(e.target.value)}
                    />
                    <label>Description</label>
                    <textarea name="description"
                              maxLength="200"
                              onChange={e => setDescription(e.target.value)}>

                    </textarea>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label>Profile photo</label>
                    <input
                        type="text"
                        name="profilpic"
                        onChange={e => setProfilePhoto(e.target.value)}
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