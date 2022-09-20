import React from "react";

import './UserListItem.css';

function UserListItem({user}){
    return(
        <div className='user-list-item'>
            <li key={user.id}>
                <span className='user-name'>{user.username}</span>
                <span className='user-email'>{user.email}</span>
                <button>Block</button>
            </li>
        </div>
    );
}

export default UserListItem;