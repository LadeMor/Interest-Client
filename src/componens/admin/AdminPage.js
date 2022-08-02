import React, {useEffect, useState} from "react";

import "./AdminPage.css";

function AdminPage(){

    const url = 'https://localhost:5001/api/User';
    const [userList, setUserList] = useState('');

    useEffect(() => {
       fetch(url)
           .then(res => res.json())
           .then(data => setUserList(data))
    });

    return(
        <div className='admin-page'>
            <div className='user-list'>
                <h1>Users</h1>
                <ul>
                    {userList &&
                        userList.map(user => (
                            <li key={user.id}>
                                <div className='user-info-row'>
                                    <span className='user-name'>{user.username}</span>
                                    <span className='user-description'>{user.description}</span>
                                    <button>Block</button>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default AdminPage;