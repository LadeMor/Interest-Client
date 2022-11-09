import React, {useEffect, useState} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import PostPreview from "../post preview/PostPreview";
import {getPost} from "../../../services/post-service/PostService";
import Container from '@mui/material/Container';



import arrow_back from '../../../icons/arrow-back.svg';


function PostPage(){

    const navigate = useNavigate();
    const {postId} = useParams();
    const [postArr, setPostArr] = useState(null);

    useEffect(() => {
        if(postArr === null){
            getPost(postId)
                .then(data => {
                    setPostArr(data)
                })
        }
    }, [postArr]);

    return(
        <>
            {/*<div className='back_arrow_block'>*/}
            {/*    <Link to="/">*/}
            {/*        <img src={arrow_back}/>*/}
            {/*    </Link>*/}
            {/*</div>*/}
            <Container>
                {(postArr === undefined || postArr === null || postArr === [] ?
                        "Loading" :
                        <PostPreview postData={postArr[0]}/>
                )}
            </Container>
        </>
    );
}

export default PostPage;