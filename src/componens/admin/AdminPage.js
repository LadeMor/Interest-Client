import React, {useEffect, useState} from "react";

import "./AdminPage.css";
import UserList from "./user-list/UserList";

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
            <UserList userList={userList}/>
        </div>
    );
}

export default AdminPage;