import React, {useState} from "react";

import "./Post.css";


function Post(){

    const id = 0;
    const url = `https://localhost:5001/api/Post/${id}`;

    const [post, setPost] = useState(null);

    fetch(url)
        .then((response) => response.json())
        .then((data) => setPost(data));

    return(
        <div>
            <div className="post-preview-block">
                <img/>
                <h1>Post</h1>
                <p>Description</p>
                <h2>Author</h2>
            </div>
        </div>
    );
}

export default Post;