import React from "react";

import './UserListItem.css';
import {Link} from "react-router-dom";

function UserListItem({user}){
    return(
        <div className='user-list-item'>
            <Link to={`userpage/${user.id}`}>
                <li key={user.id}>
                    <span className='user-name'>{user.username}</span>
                    <span className='user-email'>{user.email}</span>
                </li>
            </Link>
        </div>
    );
}

export default UserListItem;