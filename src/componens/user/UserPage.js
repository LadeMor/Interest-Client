import React from "react";

import "./UserPage.css";
import {Link} from "react-router-dom";

function UserPage(){
    return(
        <div className = "main-user">
            <div className = "user-info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="Avatar"/>
                <h1>Username</h1>
                <div className="user-info-desc">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a
                    </p>
                </div>
                <Link to="/post_create">
                    <button>Create post +</button>
                </Link>
            </div>
        </div>
    );
}
export default UserPage;