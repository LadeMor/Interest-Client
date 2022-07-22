import React from "react";

import "./PostCard.css";
import {BrowserRouter, Link, Route} from "react-router-dom";

import PostPage from "../post page/PostPage";

function PostCard({posts}){

    return (
        <div className="content-block-posts">
            {posts &&
                posts.map(post => (
                    <Link to={`post/${post.id}`}>
                        <div key={post.id} className="post-block">
                            <h1>{post.title}</h1>
                            <img src={post.image}/>
                            <p>{post.post_Description}</p>
                            <h2>{post.author}</h2>
                        </div>
                    </Link>
                ))}
        </div>
    );
}

export default PostCard;