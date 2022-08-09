import React from "react";

import './PostCardItem.css'

function PostCardItem({id, title, image, post_Description, author}){
    return(
        <div key={id} className='post-card-item'>
            <h1>{title}</h1>
            <img src={`${image}`}/>
            <p>{post_Description}</p>
        </div>
    );
}

export default PostCardItem;