import {useState} from "react";

import "./Login.css";

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function validateLoginData(){

        if(email.trim() !== '' && password.trim() !== ''){

            const userByEmailUrl = `https://localhost:5001/api/User/${email}/userbyemail`;
            const userExistEmailUrl = `https://localhost:5001/api/User/${email}/user`;

            let res;
            let userDataObj;

            await fetch(userExistEmailUrl)
                .then((data) => data.json())
                .then(actualData => {
                     res = actualData;
                });

            if(res){
                await fetch(userByEmailUrl)
                    .then(data => data.json())
                    .then(userData => userDataObj = userData[0]);
            }else{
                console.log('User is not exist');
            }

            if(userDataObj.password === password){
                return userDataObj;
            }else{
                return false;
            }

        }else{
            console.log('Input data!!');
        }

    }

    function handleSubmit(e){
        e.preventDefault();

        validateLoginData().then(res => {
            console.log(res);
        })
    }


    return(
        <div className="main-block">
            <div className="main-block">
                <div className="form-block-login">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
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
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;