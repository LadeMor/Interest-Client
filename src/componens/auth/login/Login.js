import {useState} from "react";
import InterestService from "../../interest-service/InterestService";
import "./Login.css";

function Login(){

    const interestService = new InterestService();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailErrorMsg, setEmailErrorMag] = useState(false);
    const [passwordErrorMsg, setPasswordErrorMsg] = useState(false);
    const [emptyValues, setEmptyValues] = useState(false);

    function addDataToStorage(data){
        localStorage.setItem('isUserLogin', true);
        localStorage.setItem('UserId', data.id);
        localStorage.setItem('Username', data.username);
        localStorage.setItem('UserPassword', data.password);
        localStorage.setItem('UserEmail', data.email);
        localStorage.setItem('UserDescription', data.description);
        localStorage.setItem('UserRoleId', data.roleId);
    }

    async function validateLoginData(){

        if(email.trim() !== '' && password.trim() !== ''){

            let res;
            let userDataObj;

            await interestService.isUserExistEmail(email)
                .then(actualData => {
                     res = actualData;
                });

            if(res){
                await interestService.getUserByEmail(email)
                    .then(userData => userDataObj = userData[0]);
            }else{
                setEmailErrorMag(true);
                setTimeout(() => setEmailErrorMag(false), 2000);
            }

            if(userDataObj.password === password){
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
        <div className="main-block">
            <div className="main-block">
                <div className="form-block-login">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input
                            className={`email-input ${emailErrorMsg ? 'wrong-data' : ''}`}
                            type="email"
                            name="email"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <h5 className={`error-validation-msg ${emailErrorMsg ? 'show' : 'hide'}`}>User is not exist</h5>
                        <h5 className={`empty-values ${emptyValues ? 'show' : 'hide'}`}>Input data!</h5>
                        <label>Password</label>
                        <input
                            className={`password-input ${passwordErrorMsg ? 'wrong-data' : ''}`}
                            type="password"
                            name="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <h5 className={`error-validation-msg ${passwordErrorMsg ? 'show' : 'hide'}`}>Wrong password</h5>
                        <h5 className={`empty-values ${emptyValues ? 'show' : 'hide'}`}>Input data!</h5>
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