import React from "react";
import "./CommentListItem.css";

function CommentListItem({data}){
    return(
        <li className="comment-list-item" key={data.id}>
            <h4>{data.author}</h4>
            <p>{data.text}</p>
        </li>
    );
}

export default CommentListItem;