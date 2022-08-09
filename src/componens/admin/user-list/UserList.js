import React from "react";

import './UserList.css';
import UserListItem from "../user-list-item/UserListItem";

function UserList({userList}){
    return(
        <div>
            <div className='user-list'>
                <h1>Users</h1>
                <ul>
                    {userList &&
                        userList.map(user => (
                            <UserListItem id={user.id} username={user.username}/>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default UserList;