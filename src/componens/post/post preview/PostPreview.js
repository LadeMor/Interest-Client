import React from "react";

import './PostPreview.css';

function PostPreview({postData}){

    return(
        <div className='post-preview'>
            <h1>{postData.title}</h1>
            <img src={`${postData.image}`}/>
            <p>{postData.post_Description}</p>
            {+localStorage.getItem('UserId') === postData.user_Id ?
                <div className='post-page-buttons'>
                    <button className='post-page-edit-button'>Edit</button>
                    <button className='post-page-delete-button'>Delete</button>
                </div> :
                ''
            }

        </div>
    );
}

export default PostPreview;