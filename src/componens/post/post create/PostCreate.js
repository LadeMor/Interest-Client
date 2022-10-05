import React, {useEffect, useState, useRef} from 'react';
import {createPost} from "../../../services/post-service/PostService";
import {pictureChange, onPreviewChange} from "../../functions/Functions";
import './PostCreate.css';

function PostCreate(){

    const [postCreateData, setPostCreateData] = useState({
        title: '',
        description: '',
        image: '',
        imgFile: null,
        isSuccess: false,
        isFailed: false,
        previewPhoto: ''
    })

    const fileInputRef = useRef("");

    const onChangePicture = (e) => {
        const file = e.target.files[0];
        pictureChange(file, setPostCreateData, postCreateData);
    }


    useEffect(() => {
        onPreviewChange(setPostCreateData, postCreateData, postCreateData.imgFile);
    }, [postCreateData.imgFile]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            user_Id: +localStorage.getItem('UserId'),
            title: postCreateData.title,
            image: postCreateData.image,
            post_Description: postCreateData.description,
            author: localStorage.getItem('Username')
        };

        createPost(data).then(() => {
            setPostCreateData({...postCreateData, isSuccess: true})
            setTimeout(() => {
                setPostCreateData({...postCreateData, isSuccess: false})
            }, 2000);
        }).catch(() => {
            setPostCreateData({...postCreateData, isFailed: true})
            setTimeout(() => {
                setPostCreateData({...postCreateData, isFailed: false})
                }, 2000);
        }).finally(() => {
            setPostCreateData({
                ...postCreateData,
                title: '',
                description: '',
                image: ''
            })
        })
    }

    return(
        <div>
            <div className="form-block-create-post">
                <h1>Create post</h1>
                <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter post title"
                        value={postCreateData.title}
                        onChange={e => setPostCreateData({...postCreateData, title: e.target.value})}
                    />
                    <label>Description</label>
                    <textarea name="description"
                              maxLength="200"
                              placeholder="Enter post description..."
                                value={postCreateData.description}
                    onChange={e => setPostCreateData({...postCreateData, description: e.target.value})}>

                    </textarea>
                    <label>Image</label>
                    <div className='image-preview'>
                        <img src={postCreateData.previewPhoto}/>
                    </div>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        name="image"
                        onChange={onChangePicture}
                    />
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
            <div className={`successful-create ${postCreateData.isSuccess ? "" : "hide"}`}>
                <h1>Post successfully created</h1>
            </div>
            <div className={`failed-create hide ${postCreateData.isFailed ? "" : "hide"}`}>
                <h1>Something went wrong</h1>
            </div>
        </div>
    );
}

export default PostCreate;