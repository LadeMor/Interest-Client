import React, {useEffect, useState} from "react";

import './UserList.css';
import UserListItem from "../user-list-item/UserListItem";

function UserList({userList}){

    const [users, setUsers] = useState([]);
    const [searchData, setSearchData] = useState('');
    const [toggleBtns, setToggleBtns] = useState(
        [
                {
                    name:'Username',
                    active:true
                },
                {
                    name:'Email',
                    active:false
                }
        ]
    );
    const [filterData, setFilterData] = useState('Username');

    const handleChange = e => {
        setSearchData(e.target.value.toLowerCase());
    }

    const handleSubmit = e => {
        e.preventDefault();
        switch (filterData){
            case 'Username':
                if(searchData.trim() === ''){
                    setUsers(userList);
                }else if(userList.filter(user => user.username.toLowerCase().includes(searchData)) === ''){
                } else{
                    setUsers(userList
                        .filter(user => user
                            .username
                            .toLowerCase()
                            .includes(searchData)));
                }
                break;
            case 'Email':
                if(searchData.trim() === ''){
                    setUsers(userList);
                }else if(userList.filter(user => user.email.toLowerCase().includes(searchData)) === ''){
                } else{
                    setUsers(userList
                        .filter(user => user
                            .email
                            .toLowerCase()
                            .includes(searchData)));
                }
                break;
        }

    }

    useEffect(() => {
        if(!searchData){
            setUsers(userList)
        }
    }, [userList])

    const handleClick = (e) => {
        e.preventDefault();
        toggleBtns.map(item => {
            item.active = false;
            if(item.name === e.target.value){
                item.active = true;
                setFilterData(e.target.value);
            }
        });
    }

    const buttons = toggleBtns.map(item => {
        const clazz = item.active ? 'active' : "";
        return (
            <button key={item.name} className={`toggle-button ${clazz}`} onClick={handleClick} value={item.name}>
                {item.name}
            </button>)
    });

    return(
        <div>
            <div className='user-list'>
                <h1>Users</h1>
                <div className='toggle-buttons'>
                    <h3>Search by:</h3>
                    {buttons}
                </div>
                <form onSubmit={handleSubmit}>
                    <input type='text' onChange={handleChange}/>
                    <button>Search</button>
                </form>
                <ul>
                    {users &&
                        users.map(user => (
                            <UserListItem id={user.id} username={user.username} email={user.email}/>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default UserList;