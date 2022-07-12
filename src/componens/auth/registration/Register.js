import React from "react";

import "./Register.css";


function Register(){
    return(
        <div className="main-block">
            <div className="form-block-register">
                <h1>Registration</h1>
                <form>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                    />
                    <label>Description</label>
                    <textarea name="description"
                              maxlength="200">

                    </textarea>
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
                    <label>Profile photo</label>
                    <input
                        type="text"
                        name="profilpic"
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