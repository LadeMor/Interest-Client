import React, {useEffect, useState, useRef} from 'react';

import './PostCreate.css';

import preview from '../../../icons/photo-image-picture.svg'

function PostCreate(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [imgFile, setImgFile] = useState('');
    const [isSuccess, setSuccess] = useState(false);
    const [isFailed, setFailed] = useState(false);
    const [previewPhoto, setPreviewPhoto] = useState('');

    const fileInputRef = useRef("");

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

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            title: title,
            image: image,
            post_Description: description
        };

        fetch("https://localhost:5001/api/Post", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(() => {
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 2000);
        }).catch(() => {
            setFailed(true);
            setTimeout(() => {
                setFailed(false);
                }, 2000);
        }).finally(() => {
            setTitle('');
            setDescription('');
            setImage('');
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
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <label>Description</label>
                    <textarea name="description"
                              maxLength="200"
                              placeholder="Enter post description..."
                                value={description}
                    onChange={e => setDescription(e.target.value)}>

                    </textarea>
                    <label>Image</label>
                    <div className='image-preview'>
                        <img src={previewPhoto}/>
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
            <div className={`successful-create ${isSuccess ? "" : "hide"}`}>
                <h1>Post successfully created</h1>
            </div>
            <div className={`failed-create hide ${isFailed ? "" : "hide"}`}>
                <h1>Something went wrong</h1>
            </div>
        </div>
    );
}

export default PostCreate;