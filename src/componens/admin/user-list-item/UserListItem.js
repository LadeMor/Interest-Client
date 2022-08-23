import React from "react";

import './UserListItem.css';

function UserListItem({id, username, email}){
    return(
        <div className='user-list-item'>
            <li key={id}>
                <span className='user-name'>{username}</span>
                <span className='user-email'>{email}</span>
                <button>Block</button>
            </li>
        </div>
    );
}

export default UserListItem;