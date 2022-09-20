import React, {useEffect, useState} from "react";
import InterestService from "../../services/interest-service/InterestService";

import "./AdminPage.css";
import UserList from "./user-list/UserList";


function AdminPage(){

    const interestService = new InterestService();
    const [userList, setUserList] = useState('');

    useEffect(() => {
        interestService.getAllUsers()
            .then(data => setUserList(data))
    });

    return(
        <div className='admin-page'>
            <UserList userList={userList}/>
        </div>
    );
}

export default AdminPage;