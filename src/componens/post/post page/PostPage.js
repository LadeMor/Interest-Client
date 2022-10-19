import React, {useEffect, useState} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import PostPreview from "../post preview/PostPreview";
import {getPost} from "../../../services/post-service/PostService";

import "./PostPage.css";

import arrow_back from '../../../icons/arrow-back.svg';


function PostPage(){

    const navigate = useNavigate();
    const {postId} = useParams();
    const [postArr, setPostArr] = useState({
        title: '',
        image: '',
        description: '',
        author: ''
    });

    useEffect(() => {
        getPost(postId)
            .then(data => {
                setPostArr(data)
            })
    }, []);

    return(
        <div>
            <div className='back_arrow_block' onClick={() => navigate(-1)}>
                <img src={arrow_back}/>
            </div>
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