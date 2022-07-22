import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

import PostPreview from "../post preview/PostPreview";

import "./PostPage.css";

import arrow_back from '../../../icons/arrow-back.svg';


function PostPage(){

    const {postId} = useParams();

    const [postArr, setPostArr] = useState({
        title: '',
        image: '',
        description: '',
        author: ''
    });
    const url = `https://localhost:5001/api/Post/${postId}`;

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setPostArr(data)
            })
            .catch(() => console.error('Something goes wrong'));
    }, []);

    return(
        <div>
            <Link to="/">
                <div className='back_arrow_block'>
                    <img src={arrow_back}/>
                </div>
            </Link>
            <div className='preview-content'>
                {(typeof(postArr[0]) === 'undefined' ?
                        "Loading" :
                        <PostPreview postData={postArr[0]}/>
                )}
            </div>
        </div>
    );
}

export default PostPage;