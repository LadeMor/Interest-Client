import React, {useEffect, useState} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import PostPreview from "../post preview/PostPreview";
import {getPost} from "../../../services/post-service/PostService";
import {Button, Container, IconButton} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { redirect } from "react-router-dom";

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
            <IconButton
                variant="contained"
                sx={{position:"absolute", left:200}}
                size="large"
                onClick={() => navigate(-1)}>
                <ArrowBackIcon
                    color="primary"
                    aria-label="arrow back"
                    />
            </IconButton>
            <Container>
                {(postArr === undefined || postArr === null || postArr === [] ?
                        "Loading" :
                        <PostPreview postData={postArr}/>
                )}
            </Container>
        </>
    );
}

export default PostPage;