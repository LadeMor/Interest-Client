import React, {useEffect, useState} from "react";
import CommentListItem from "../comment-list-item/CommentListItem";

import "./CommentList.css";

function CommentList({comments}) {


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
            <form>
                <span>
                    <input placeholder="comment..." type="text"/>
                    <button type="submit">Submit</button>
                </span>

            </form>
            {comments ? comments.map(item => <CommentListItem data={item}/>) : null}
        </div>
    );
}

export default CommentList;