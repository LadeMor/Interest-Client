import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getUserById} from "../../../services/user-service/UserService";
import nouser from "../../../img/no-user-photo-placeholder.png";
import './UserPageItem.css';
import {getAllPosts} from "../../../services/post-service/PostService";
import PostCards from "../../post/post-cards/PostCards";
import {Container, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";

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
            default:
                return "No role";
                break;
        }
    }

    const userInfoBlock =(
            <>
                <Avatar
                    alt="Remy Sharp"
                    src={(userPageData.profilePhoto)}
                    sx={{ width: 200, height: 200 }}
                />
                <Typography variant="h3" component="h2">
                    {userPageData.username}
                </Typography>
                <Typography variant="h5" component="h6">
                    Description: {userPageData.description}
                </Typography>
                <Typography variant="h5" component="h6">
                    Email: {userPageData.email}
                </Typography>
                <Typography variant="h5" component="h6">
                    Role: {roleCheck(userPageData.roleId)}
                </Typography>
            </>
    );

    return(
        <div className="user-page-item-block">
            <Container>
                {userInfoBlock}
                <PostCards post={userPosts}/>
            </Container>

        </div>
    )
}

export default UserPageItem;