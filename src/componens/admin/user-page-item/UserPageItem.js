import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getUserById} from "../../../services/user-service/UserService";
import nouser from "../../../img/no-user-photo-placeholder.png";
import './UserPageItem.css';

function UserPageItem(){

    const [userPageData, setUserPageData] = useState({
        id:null,
        username: '',
        description: '',
        email: '',
        roleId: '',
        password:'',
        profilePhoto: ''
    });
    const {userId} = useParams();

    useEffect(() => {
        getUserById(userId).then(res => {
            setUserPageData({
                id:res[0].id,
                username: res[0].username,
                description: res[0].description,
                email: res[0].email,
                roleId: res[0].roleId,
                password:res[0].password,
                profilePhoto: res[0].profile_Photo
            })
        });
    })

    const userInfoBlock =(
            <>
                <img
                    src={(userPageData.profilePhoto)}
                    alt={`profile photo of user: ${userPageData.username}`}
                    style={{maxWidth:"400px", maxHeight:"700px"}}/>
                <ul>
                    <li>{userPageData.username}</li>
                    <li>{userPageData.description}</li>
                    <li>{userPageData.email}</li>
                    <li>{userPageData.roleId}</li>
                </ul>
            </>
    );

    return(
        <div className="user-page-item-block">
            {userInfoBlock}
            <button>Ban</button>
        </div>
    )
}

export default UserPageItem;