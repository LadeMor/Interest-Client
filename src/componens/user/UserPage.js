import React, {useState} from "react";

import "./UserPage.css";
import {Link} from "react-router-dom";

function UserPage(){

    const [user, setUser] = useState({
        isLogin: localStorage.getItem('isUserLogin'),
        username: localStorage.getItem('Username'),
        userDescription: localStorage.getItem('UserDescription')
    });



    return(
        <div className = "main-user">
            {(user.isLogin === 'true' ?
                <div className = "user-info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="Avatar"/>
                    <h1>{(user.username)}</h1>
                    <div className="user-info-desc">
                        <p>
                            {user.userDescription}
                        </p>
                    </div>
                    <Link to="/post_create">
                        <button>Create post +</button>
                    </Link>
                </div>
                :
                <h1>No user</h1>)}
        </div>
    );
}
export default UserPage;