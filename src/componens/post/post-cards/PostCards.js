import React from "react";
import PostCardItem from "../post-cards-item/PostCardItem";
import './PostCards.css';

function PostCards({post}){
    return(
        <div className='post-cards'>
            {post && post.map(posts => (
                <PostCardItem
                    id={posts.id}
                    title={posts.title}
                    image={posts.image}
                    post_Description={posts.post_Description}
                    author={posts.author}/>
            ))}
        </div>
    );
}

export default PostCards;