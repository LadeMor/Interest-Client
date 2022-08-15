import React from "react";

import './PostCardItem.css'
import {Link} from "react-router-dom";

function PostCardItem({id, title, image, post_Description, author}){
    return(
        <Link to={`post/${id}`}>
            <div key={id} className='post-card-item'>
                <h1>{title}</h1>
                <img src={`${image}`}/>
                <p>{post_Description}</p>
            </div>
        </Link>
    );
}

export default PostCardItem;