import React, {useEffect, useState} from "react";

import "./Post.css";


function Post(){

    const [postArr, setPostArr] = useState({
        title: '',
        image: '',
        description: '',
        author: ''
    });
    const url = `https://localhost:5001/api/Post/1`;

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setPostArr(data))
            .catch(() => console.error('Something goes wrong'));
    });

    return(
        <div>
            <div className="post-preview-block">
                
            </div>
        </div>
    );
}

export default Post;