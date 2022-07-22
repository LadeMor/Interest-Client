import React from "react";

import './PostPreview.css';

function PostPreview({postData}){

    return(
        <div className='post-preview'>
            <h1>{postData.title}</h1>
            <img src={`${postData.image}`}/>
            <p>{postData.post_Description}</p>
        </div>
    );
}

export default PostPreview;