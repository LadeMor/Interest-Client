import React from "react";

import "./Login.css";

function Login(){
    return(
        <div className="main-block">
            <div className="main-block">
                <div className="form-block-login">
                    <h1>Login</h1>
                    <form>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
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