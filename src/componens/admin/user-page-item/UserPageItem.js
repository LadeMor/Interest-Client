import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getUserById} from "../../../services/user-service/UserService";
import nouser from "../../../img/no-user-photo-placeholder.png";
import './UserPageItem.css';
import {getAllPosts} from "../../../services/post-service/PostService";
import PostCards from "../../post/post-cards/PostCards";

function UserPageItem(){

    const [userPageData, setUserPageData] = useState({
        id: null,
        username: '',
        description: '',
        email: '',
        roleId: '',
        password: '',
        profilePhoto: ''
    });
    const [userPosts, setUserPosts] = useState(null);
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

    useEffect(() => {
        getAllPosts().then(res => {
            if(userPosts === null && userPageData !== null){
                setUserPosts(res.filter(post => post.user_Id === userPageData.id));
            }
        })
    })

    const roleCheck = (roleId) => {
        switch (roleId){
            case 1:
                return "Admin";
                break;
            case 2:
                return "User";
                break;
        }
    }

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
                    <li>{roleCheck(userPageData.roleId)}</li>
                </ul>
            </>
    );

    return(
        <div className="user-page-item-block">
            {userInfoBlock}
            <PostCards post={userPosts}/>
        </div>
    )
}

export default UserPageItem;