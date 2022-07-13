import React, {useState} from 'react';

import './PostCreate.css';

function PostCreate(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

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
        }).then(() => console.log("Post created"))
            .catch(() => console.error("Error in creating"))
            .finally(() => {
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
                    <input
                        type="text"
                        name="image"
                        value={image}
                        onChange={e => setImage(e.target.value)}
                    />
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PostCreate;