import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import PostPreview from "../post preview/PostPreview";
import InterestService from "../../interest-service/InterestService";

import "./PostPage.css";

import arrow_back from '../../../icons/arrow-back.svg';


function PostPage(){

    const {postId} = useParams();
    const interestService = new InterestService();

    const [postArr, setPostArr] = useState({
        title: '',
        image: '',
        description: '',
        author: ''
    });

    useEffect(() => {
        interestService.getPost(postId)
            .then(data => {
                setPostArr(data)
            })
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