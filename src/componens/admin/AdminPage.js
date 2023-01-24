import React, {useEffect, useState} from "react";
import {getAllUsers} from "../../services/user-service/UserService";

import UserList from "./user-list/UserList";
import {Container} from "@mui/material";


function AdminPage(){

    const [userList, setUserList] = useState('');

    useEffect(() => {
        getAllUsers()
            .then(data => setUserList(data))
        console.log(1);
    },[]);

    return(
        <UserList userList={userList}/>
    );
}

export default AdminPage;