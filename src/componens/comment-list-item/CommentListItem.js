import React, {useEffect} from "react";
import Moment from "react-moment";
import "./CommentListItem.css";
import {deleteComment} from "../../services/comment-service/CommentService";

import trashicon from "../../icons/trash-bin.png";

function CommentListItem({data}){

    const handleClick = () => {
        let confimDelete = window.confirm("Are you sure you want to delete this comment?");
        if(confimDelete){
            deleteComment(data.comment_Id).then(() => window.location.reload());
        }
    }

    return(
        <ul>
            <li className="comment-list-item" key={data.id}>
                <h3>{data.author}</h3>
                <Moment format="YYYY-MM-DD">
                    <h6>{data.date_Of_Comment_Creation}</h6>
                </Moment>
                <p>{data.text}</p>
                { data.user_Comment_Id === +localStorage.getItem("UserId") || +localStorage.getItem("UserRoleId") === 1 ? <img src={trashicon} width="40px" height="40px" onClick={handleClick}/> : null}
            </li>
        </ul>

    );
}

export default CommentListItem;