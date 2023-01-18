import React, {useEffect, useState} from "react";


import {Link} from "react-router-dom";
import {getAllPosts} from "../../../services/post-service/PostService";
import PostCards from "../../post/post-cards/PostCards";
import {Container,
        Avatar,
        Typography,
        Button} from "@mui/material";

function UserPage(){

    const [user, setUser] = useState({
        isLogin: localStorage.getItem('isUserLogin'),
        username: localStorage.getItem('Username'),
        userDescription: localStorage.getItem('UserDescription'),
        userProfilePhoto: localStorage.getItem('UserProfilePhoto'),
        posts: null
    });

    const userPhoto = user.userProfilePhoto ? user.userProfilePhoto : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";

    useEffect(() => {
        getAllPosts().then(res => {
            if(user.posts === null){
                setUser({...user, posts: res.filter(post => post.user_Id === +localStorage.getItem("UserId"))});
            }else{
                console.log(user.posts);
            }
        });
    },[user.posts])



    return(
        <div>
            {(user.isLogin === 'true' ?
                <div>
                    <Container>
                        <Avatar
                            alt="Remy Sharp"
                            src={userPhoto}
                            sx={{ width: 200, height: 200 }}
                        />
                        <Typography variant="h3" component="h2">
                            {user.username}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {user.userDescription}
                        </Typography>
                        <Link to="/post_create" >
                            <Button variant="contained" style={{marginBottom:"10px"}}>Create post</Button>
                        </Link>
                        <div className="user-page-cards">
                            <PostCards post={user.posts}/>
                        </div>
                    </Container>

                </div>
                :
                <h1>No user</h1>)}
        </div>
    );
}
export default UserPage;