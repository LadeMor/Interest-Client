import React, {useEffect, useState} from "react";

import "./UserPage.css";
import {Link} from "react-router-dom";
import {getAllPosts} from "../../../services/post-service/PostService";
import PostCards from "../../post/post-cards/PostCards";

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
        <div className = "main-user">
            {(user.isLogin === 'true' ?
                <div className="user-info">
                    <img src={userPhoto} alt="Avatar" id="avatar"/>
                    <h1>{user.username}</h1>
                    <div className="user-info-desc">
                        <p>
                            {user.userDescription}
                        </p>
                    </div>
                    <Link to="/post_create">
                        <button>Create post</button>
                    </Link>
                    {/*<Link to="/user/useredit">*/}
                    {/*    <button>Edit profile</button>*/}
                    {/*</Link>*/}
                    <div className="user-page-cards">
                        <PostCards post={user.posts}/>
                    </div>
                </div>
                :
                <h1>No user</h1>)}
        </div>
    );
}
export default UserPage;