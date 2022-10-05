import React, {useEffect, useState} from "react";
import {getAllUsers} from "../../services/user-service/UserService";
import "./AdminPage.css";
import UserList from "./user-list/UserList";


function AdminPage(){

    const [userList, setUserList] = useState('');

    useEffect(() => {
        getAllUsers()
            .then(data => setUserList(data))
    });

    return(
        <div className='admin-page'>
            <UserList userList={userList}/>
        </div>
    );
}

export default AdminPage;