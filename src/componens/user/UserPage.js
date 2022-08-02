import React from "react";

import "./UserPage.css";
import {Link} from "react-router-dom";

function UserPage(){

    return(
        <div className = "main-user">
            {(localStorage.getItem('isUserLogin') === 'true' ?
                <div className = "user-info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="Avatar"/>
                    <h1>{(localStorage.getItem('Username'))}</h1>
                    <div className="user-info-desc">
                        <p>
                            {localStorage.getItem('UserDescription')}
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