import React, {useEffect, useState} from "react";

import './UserList.css';
import UserListItem from "../user-list-item/UserListItem";

function UserList({userList}){

    const [users, setUsers] = useState([]);
    const [searchData, setSearchData] = useState('');

    const handleChange = e => {
        setSearchData(e.target.value.toLowerCase());
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(searchData.trim() === ''){
            setUsers(userList);
            //setResExist(true);
        }else if(userList.filter(user => user.username.toLowerCase().includes(searchData)) === ''){
            //setResExist(false);
        } else{
            //setResExist(true);
            setUsers(userList
                .filter(user => user
                    .username
                    .toLowerCase()
                    .includes(searchData)));
        }
    }

    useEffect(() => {
        if(!searchData){
            setUsers(userList)
        }
    }, [userList])

    return(
        <div>
            <div className='user-list'>
                <h1>Users</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' onChange={handleChange}/>
                    <button>Search</button>
                </form>
                <ul>
                    {users &&
                        users.map(user => (
                            <UserListItem id={user.id} username={user.username}/>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default UserList;