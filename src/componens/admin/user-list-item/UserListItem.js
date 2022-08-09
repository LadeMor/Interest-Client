import React from "react";

import './UserListItem.css';

function UserListItem({id, username}){
    return(
        <div className='user-list-item'>
            <li key={id}>
                <span className='user-name'>{username}</span>
                <button>Block</button>
            </li>
        </div>
    );
}

export default UserListItem;