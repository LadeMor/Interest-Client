import React, {useEffect, useState} from "react";
import {createComment} from "../../services/comment-service/CommentService";
import CommentListItem from "../comment-list-item/CommentListItem";

import "./CommentList.css";
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
        <div className="comment-list">
            <h1>Comments</h1>
            { localStorage.getItem("isUserLogin") === 'true' ? <form onSubmit={handleSubmit}>
                <span>
                    <input placeholder="comment..." type="text" name="comment_input" onChange={handleChange}/>
                    <button type="submit">Submit</button>
                </span>
            </form> : null}
            {comments ? comments.map(item => <CommentListItem data={item}/>) : null}
        </div>
    );
}

export default CommentList;