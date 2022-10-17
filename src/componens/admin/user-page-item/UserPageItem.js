import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getUserById} from "../../../services/user-service/UserService";

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

    const userInfoBlock =
            <>
                <div>
                    <h1>{userPageData.username}</h1>
                    <h1>{userPageData.description}</h1>
                    <h1>{userPageData.email}</h1>
                    <h1>{userPageData.roleId}</h1>
                    <img
                        src={`${typeof(userPageData.profilePhoto) === 'undefined' ? null : userPageData.profilePhoto }`}
                        alt={`profile photo of user: ${userPageData.username}`}
                        style={{maxWidth:"400px", maxHeight:"700px"}}/>
                </div>
            </>

    return(
        <div>
            {userInfoBlock}
        </div>
    )
}

export default UserPageItem;