import React, {useState, useEffect} from "react";

import './PostPreview.css';

import preview from "../../../icons/photo-image-picture.svg";

function PostPreview({postData}){

    const url = `https://localhost:5001/api/Post/${postData.id}`;
    const [editForm, setEditForm] = useState(false);

    const [title, setTitle] = useState(postData.title);
    const [description, setDescription] = useState(postData.post_Description);
    const [image, setImage] = useState(postData.image);

    const [imgFile, setImgFile] = useState('');
    const [previewPhoto, setPreviewPhoto] = useState(postData.image);

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

    const confimUpdate = (e) => {
        e.preventDefault();
        const data = {
            id: postData.id,
            user_Id: +localStorage.getItem('UserId'),
            title: title,
            image: image,
            post_Description: description,
            author: localStorage.getItem("Username")
        }

        fetch("https://localhost:5001/api/Post",
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(() => {
                window.location.reload();
        })

    }

    const editItem = (e) => {
        e.preventDefault();
        setEditForm(true);
    }

    const hideEditForm = (e) => {
        e.preventDefault();
        setEditForm(false);
    }

    const onChangePicture = (e) => {
        const file = e.target.files[0];
        if(file && file.type.substr(0,5) === "image"){
            setImgFile(file);
        }else {
            setImgFile(null);
        }
    }

    useEffect(() => {
        if(imgFile){
            const reader = new FileReader();
            reader.onloadend = () =>{
                setPreviewPhoto(reader.result);
                setImage(reader.result);
            }
            reader.readAsDataURL(imgFile);
        }else{
            setPreviewPhoto(preview);
        }
    }, [imgFile]);

    return(
        <div className='post-preview'>
            <div className={`blur ${editForm ? '' : 'hide'}`} onClick={hideEditForm}></div>
            <div className={`update-post-form ${editForm ? '' : 'hide'}`}>
                <form onSubmit={confimUpdate}>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter post title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Description</label>
                    <textarea
                        name="description"
                        maxLength="200"
                        placeholder="Enter post description..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <label>Image</label>
                    <div className='update-post-preview'>
                        <img alt='preview' src={previewPhoto}/>
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