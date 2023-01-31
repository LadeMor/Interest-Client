import {useState} from "react";
import {isUserExistEmail, getUserByEmail} from "../../../services/user-service/UserService";
import {
    Container,
    Box,
    Typography,
    Grid,
    TextField,
    Button} from "@mui/material";
import {addDataToStorage} from "../../functions/LocalStorageManager";

function Login(){

    const [formData, setFormData] = useState({
        email: '',
        password:''
    });
    const [emailErrorMsg, setEmailErrorMag] = useState(false);
    const [passwordErrorMsg, setPasswordErrorMsg] = useState(false);
    const [emptyValues, setEmptyValues] = useState(false);

    async function validateLoginData(){

        if(formData.email.trim() !== '' && formData.password.trim() !== ''){

            let res;
            let userDataObj;

            await isUserExistEmail(formData.email)
                .then(actualData => {
                     res = actualData;
                });

            if(res){
                await getUserByEmail(formData.email)
                    .then(userData => userDataObj = userData[0]);
            }else{
                setEmailErrorMag(true);
                setTimeout(() => setEmailErrorMag(false), 2000);
            }

            if(userDataObj.password === formData.password){
                return userDataObj;
            }else{
                setPasswordErrorMsg(true);
                setTimeout(() => setPasswordErrorMsg(false), 2000);
                return false;
            }

        }else{
           setEmptyValues(true);
           setTimeout(() => setEmptyValues(false), 2000);
        }

    }

    function handleSubmit(e){
        e.preventDefault();

        validateLoginData().then(res => {
            if(res){
                addDataToStorage(res);
                window.location.reload()
            }

        })
    }

    return(
        <div>
            <Container>
                <Box
                    sx={
                        {width: '100%',
                            boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
                            marginBottom: 3,
                            marginTop: 3,
                            borderRadius:1,
                            p:1}}>
                    <Typography variant="h3" component="h3" sx={{marginBottom:2}}>
                        Login
                    </Typography>
                    <Box onSubmit={handleSubmit} component="form">
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{marginBottom:2}}>
                            <Grid item xs={3}>
                                <TextField id="outlined-basic"
                                           label="Email"
                                           variant="outlined"
                                           type="email"
                                           name="email"
                                           onChange={e => setFormData({
                                               ...formData,
                                               email: e.target.value
                                           })}
                                           sx={{width: 250}}/>
                            </Grid>
                            <Grid item xs={3}>
                                <TextField id="outlined-basic"
                                           label="Password"
                                           variant="outlined"
                                           type="password"
                                           name="password"
                                           onChange={e => setFormData({
                                               ...formData,
                                               password: e.target.value
                                           })}
                                           sx={{width: 250}}/>
                            </Grid>
                        </Grid>
                        <Button type="submit" variant="contained">
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default Login;