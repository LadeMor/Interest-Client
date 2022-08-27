import React, {useState} from "react";

import './PostPreview.css';

function PostPreview({postData}){

    const url = `https://localhost:5001/api/Post/${postData.id}`;
    const [editForm, setEditForm] = useState(false);

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

    const editItem = (e) => {
        e.preventDefault();
        setEditForm(true);
    }

    const hideEditForm = (e) => {
        e.preventDefault();
        setEditForm(false);
    }

    return(
        <div className='post-preview'>
            <div className={`blur ${editForm ? '' : 'hide'}`} onClick={hideEditForm}></div>
            <div className={`update-post-form ${editForm ? '' : 'hide'}`}>
                <form>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter post title"
                        value={postData.title}
                    />
                    <label>Description</label>
                    <textarea
                        name="description"
                        maxLength="200"
                        placeholder="Enter post description..."
                        value={postData.post_Description}
                    />
                    <label>Image</label>
                    <div className='update-post-preview'>
                        <img alt='preview' src={postData.image}/>
                    </div>
                    <input
                        className='file-input'
                        type="file"
                        accept="image/*"
                        name="image"
                    />
                    <button>Edit</button>
                    <button onClick={hideEditForm}>Cancel</button>
                </form>
            </div>
            <h1>{postData.title}</h1>
            <img src={`${postData.image}`} alt='post'/>
            <p>{postData.post_Description}</p>
            {+localStorage.getItem('UserId') === postData.user_Id || +localStorage.getItem('UserRoleId') === 1?
                <div className='post-page-buttons'>
                    <button className='post-page-edit-button' onClick={editItem}>Edit</button>
                    <button className='post-page-delete-button' onClick={deleteItem}>Delete</button>
                </div> :
                ''
            }
        </div>
    );
}

export default PostPreview;