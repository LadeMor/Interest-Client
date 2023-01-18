import React, {useEffect, useState} from "react";
import {isUserExistUsername, isUserExistEmail, addUser} from "../../../services/user-service/UserService";
import {pictureChange, onPreviewChange} from "../../functions/Functions";
import {
    Container,
    Box,
    Typography,
    Grid,
    TextField,
    Button} from "@mui/material";



function Register(){

    const [userData, setUserData] = useState({
        username: '',
        description: '',
        email: '',
        password: '',
        image: '',
        previewPhoto: ''
    });

    const onChangePicture = (e) => {
        const file = e.target.files[0];
        pictureChange(file, setUserData, userData);
    }

    useEffect(() => {
        onPreviewChange(setUserData, userData, userData.imgFile);
    }, [userData.imgFile]);

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
            roleId:2,
            profile_Photo: userData.image
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
        <div>
            <Container>
                <Box sx={
                    {width: '100%',
                        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2)," +
                            "0px 1px 1px 0px rgba(0,0,0,0.14)," +
                            "0px 1px 3px 0px rgba(0,0,0,0.12)",
                        marginBottom: 3,
                        marginTop: 3,
                        borderRadius:1,
                        p:1}}>
                    <Typography variant="h3" component="h3" sx={{marginBottom:2}}>
                        Registration
                    </Typography>
                    <Box component="form"
                         onSubmit={handleSubmit}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{marginBottom:2}}>
                            <Grid item xs={5}>
                                <TextField
                                    id="outlined-basic"
                                    label="Username"
                                    variant="outlined"
                                    type="text"
                                    name="username"
                                    onChange={e => setUserData({
                                        ...userData,
                                        username: e.target.value
                                    })}
                                    sx={{width: 450}}/>
                            </Grid>
                            <Grid item xs={5}>
                                <TextField
                                    id="outlined-basic"
                                    label="Description"
                                    variant="outlined"
                                    onChange={e => setUserData({
                                                  ...userData,
                                                  description: e.target.value
                                              })}
                                    sx={{width: 450}}/>
                            </Grid>
                            <Grid item xs={5}>
                                <TextField
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                    name="email"
                                    onChange={e => setUserData({
                                        ...userData,
                                        email: e.target.value
                                    })}
                                    sx={{width: 450}}/>
                            </Grid>
                            <Grid item xs={5}>
                                <TextField
                                    id="outlined-basic"
                                    type="password"
                                    label="Password"
                                    variant="outlined"
                                    name="password"
                                    onChange={e => setUserData({
                                        ...userData,
                                        password: e.target.value
                                    })}
                                    sx={{width: 450}}/>
                            </Grid>
                        </Grid>
                        <Typography variant="h6" component="h6">
                            Profile photo
                        </Typography>
                        <div className='image-preview'>
                            <img src={userData.previewPhoto}/>
                        </div>
                        <input
                            type="file"
                            name="profilpic"
                            accept="image/*"
                            onChange={onChangePicture}
                            style={{marginBottom:"10px"}}
                        />
                        <br/>
                        <Button type="submit" variant="contained">
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default Register;