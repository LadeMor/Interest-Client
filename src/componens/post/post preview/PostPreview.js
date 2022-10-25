import React, {useState, useEffect} from "react";
import CommentList from "../../comment-list/CommentList";
import {pictureChange, onPreviewChange} from "../../functions/Functions";
import {deletePost, updatePost} from "../../../services/post-service/PostService";
import Moment from 'react-moment';
import './PostPreview.css';
import {getCommentsByPostId} from "../../../services/comment-service/CommentService";

function PostPreview({postData}){

    const [postPreviewData, setPostPreviewData] = useState({
        editForm: false,
        postId: postData.id,
        title: postData.title,
        description: postData.description,
        image: postData.image,
        previewPhoto: postData.image,
        imgFile: '',
        dateOfCreation: postData.date_Of_Creation,
        comments: null
    })

    useEffect(() => {
        if(postData){
            getCommentsByPostId(postData.id).then(res => {
                if(postPreviewData.comments === null){
                    setPostPreviewData({...postPreviewData, comments: res});

                }
            });
        }
    })

    const deleteItem = (e) => {
        e.preventDefault();
        let confimDelete = window.confirm("Are you sure you want to delete this post?");
        if(confimDelete){
            deletePost(postData.id).then(() => window.location.replace('/'));
        }

    }

    const confimUpdate = (e) => {
        e.preventDefault();
        const data = {
            id: postData.id,
            user_Id: +localStorage.getItem('UserId'),
            title: postPreviewData.title,
            image: postPreviewData.image,
            post_Description: postPreviewData.description,
            author: localStorage.getItem("Username"),
            date_Of_Creation: postData.date_Of_Creation
        }

        updatePost(data).then(() => {
                window.location.reload();
        })

    }

    const editItem = (e) => {
        e.preventDefault();
        setPostPreviewData({...postPreviewData, editForm: true});
    }

    const hideEditForm = (e) => {
        e.preventDefault();
        setPostPreviewData({...postPreviewData, editForm: false});
    }

    const onChangePicture = (e) => {
        const file = e.target.files[0];
        pictureChange(file, setPostPreviewData, postPreviewData);
    }

    useEffect(() => {
        onPreviewChange(setPostPreviewData, postPreviewData, postPreviewData.imgFile)
    }, [postPreviewData.imgFile]);

    return(
        <>
            <div className='post-preview'>
                <div className={`blur ${postPreviewData.editForm ? '' : 'hide'}`} onClick={hideEditForm}></div>
                <div className={`update-post-form ${postPreviewData.editForm ? '' : 'hide'}`}>
                    <form onSubmit={confimUpdate}>
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter post title"
                            value={postPreviewData.title}
                            onChange={(e) => setPostPreviewData(
                                {
                                    ...postPreviewData,
                                    title: e.target.value
                                })}
                        />
                        <label>Description</label>
                        <textarea
                            name="description"
                            maxLength="200"
                            placeholder="Enter post description..."
                            value={postPreviewData.description}
                            onChange={(e) => setPostPreviewData(
                                {
                                    ...postPreviewData,
                                    description: e.target.value
                                })}
                        />
                        <label>Image</label>
                        <div className='update-post-preview'>
                            <img alt='preview' src={postPreviewData.previewPhoto}/>
                        </div>
                        <input
                            className='file-input'
                            type="file"
                            accept="image/*"
                            name="image"
                            onChange={onChangePicture}
                        />
                        <button type="submit">Edit</button>
                        <button onClick={hideEditForm}>Cancel</button>
                    </form>
                </div>
                <h1>{postData.title}</h1>
                <img src={`${postData.image}`} alt='post'/>
                <p>{postData.post_Description}</p>
                <p>
                    Uploaded: <Moment format="YYYY-MM-DD">{postData.date_Of_Creation}</Moment>
                </p>
                {+localStorage.getItem('UserId') === postData.user_Id || +localStorage.getItem('UserRoleId') === 1?
                    <div className='post-page-buttons'>
                        <button className='post-page-edit-button' onClick={editItem}>Edit</button>
                        <button className='post-page-delete-button' onClick={deleteItem}>Delete</button>
                    </div> :
                    ''
                }
            </div>
            <CommentList comments={postPreviewData.comments ? postPreviewData.comments :  null} postData = {postPreviewData ? postPreviewData : null}/>
        </>
    );
}

export default PostPreview;