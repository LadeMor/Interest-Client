import React from "react";
import PostCardItem from "../post-cards-item/PostCardItem";
import Grid from '@mui/material/Grid';
import './PostCards.css';

function PostCards({post}){
    return(
        <Grid container spacing={1}>
            {post && post.map(posts => (
                <PostCardItem
                    id={posts.id}
                    title={posts.title}
                    image={posts.image}
                    post_Description={posts.post_Description}
                    author={posts.author}
                    date={posts.date_Of_Creation}
                    user_Id={posts.user_Id}/>
            ))}
        </Grid>
    );
}

export default PostCards;