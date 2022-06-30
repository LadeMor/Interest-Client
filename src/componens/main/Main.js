import React, {useEffect, useState} from "react";

import "./Main.css";

import filter from "../../icons/filter.svg";
import sort from "../../icons/sort.svg";

import PostCard from "../post/postcard/PostCard";

function Main(){

    const [posts, setPosts] = useState(null);
    const url = 'https://localhost:5001/api/Post';

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((actualData) => setPosts(actualData));
    }, []);

    return(
        <div>
            <div className="content-block">
                <div className="content-block-tools">
                    <ul>
                        <li>
                            <img src={filter}/>
                        </li>
                        <li>
                            <img src={sort}/>
                        </li>
                    </ul>
                </div>
                <PostCard posts={posts}/>
            </div>
        </div>
    );
}

export default Main;