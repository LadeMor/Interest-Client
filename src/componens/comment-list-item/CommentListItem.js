import React, {useEffect} from "react";
import "./CommentListItem.css";

function CommentListItem({data}){
    return(
        <ul>
            <li className="comment-list-item" key={data.id}>
                <h3>{data.author}</h3>
                <h6>{data.date}</h6>
                <p>{data.text}</p>
            </li>
        </ul>

    );
}

export default CommentListItem;