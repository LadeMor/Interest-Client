import React, {useEffect} from "react";

import './PostPreview.css';

function PostPreview({postData}){

    const url = `https://localhost:5001/api/Post/${postData.id}`;

    const deleteItem = (e) => {
        e.preventDefault();

        let confimDelete = window.confirm("Are you sure you want to delete this post?");
        if(confimDelete){
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                window.location.replace('/');
            })
        }

    }

    return(
        <div className='post-preview'>
            <h1>{postData.title}</h1>
            <img src={`${postData.image}`}/>
            <p>{postData.post_Description}</p>
            {+localStorage.getItem('UserId') === postData.user_Id || +localStorage.getItem('UserRoleId') === 1?
                <div className='post-page-buttons'>
                    <button className='post-page-edit-button'>Edit</button>
                    <button className='post-page-delete-button' onClick={deleteItem}>Delete</button>
                </div> :
                ''
            }
        </div>
    );
}

export default PostPreview;