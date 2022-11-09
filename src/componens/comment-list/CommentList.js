import React, {useEffect, useState} from "react";
import {createComment} from "../../services/comment-service/CommentService";
import CommentListItem from "../comment-list-item/CommentListItem";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";




function CommentList({comments, postData}) {

    const [commentText, setCommentText] = useState(null);

    const handleChange = (e) => {
        setCommentText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(commentText){
            const data = {
                post_Comment_Id: postData.postId,
                user_Comment_Id: +localStorage.getItem("UserId"),
                author: localStorage.getItem("Username"),
                text: commentText
            }

            createComment(data)
                .then(() =>  window.location.reload())
                .catch((res) => console.log(res));
        }
    }

    return(
        <Container>
            <Box sx={
                {width: '100%',
                    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
                marginBottom: 3,
                marginTop: 3,
                borderRadius:1,
                p:1}}>
            <Typography variant="h3" gutterBottom>
                Comments
            </Typography>
            { localStorage.getItem("isUserLogin") === 'true' ? <form onSubmit={handleSubmit}>
                <Box
                    sx={{
                        '& .MuiTextField-root': { marginRight: 1, marginBottom: 1, marginLeft: 1,height: '5ch',width: '60ch' },
                        '& .MuiButton-root': { width: '10ch', marginBottom: 1, height:'7ch' }
                    }}>
                    <TextField placeholder="comment..." type="text" onChange={handleChange}/>
                    <Button variant="contained" type="submit">Submit</Button>
                </Box>
            </form> : null}
            {comments ? <CommentListItem data={comments}/> : null}
            </Box>
        </Container>
    );
}

export default CommentList;