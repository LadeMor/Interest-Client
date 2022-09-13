import React, {useState} from "react";
import CommentListItem from "../comment-list-item/CommentListItem";

import "./CommentList.css";

function CommentList() {

    const [commentsList, setCommentsList] = useState([
        {
            id: 1,
            author: 'LadeMor',
            text: 'CoolArt',
            date:'2022-08-12'
        },
        {
            id: 2,
            author: 'Swonnson',
            text: 'I dont like this',
            date:'2022-08-12'
        },
        {
            id: 3,
            author: 'Jabe',
            text: 'Wow',
            date:'2022-08-12'
        },
        {
            id: 4,
            author: 'Gaib',
            text: 'You know the artist?',
            date:'2022-08-12'
        },
        {
            id: 5,
            author: 'Flomic',
            text: 'Verrryyyy nice!!!',
            date:'2022-08-12'
        }
    ]);


    return(

        <div className="comment-list">
            <h1>Comments</h1>
            <ul>
                {commentsList.map(item => <CommentListItem data={item}/>)}
            </ul>
        </div>
    );
}

export default CommentList;