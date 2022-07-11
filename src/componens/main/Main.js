import React, {useEffect, useState} from "react";

import "./Main.css";

import filter from "../../icons/filter.svg";
import sort from "../../icons/sort.svg";

import PostCard from "../post/postcard/PostCard";

function Main(){

    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [searchData, setSearchData] = useState(null);
    const [posts, setPosts] = useState(null);
    const url = 'https://localhost:5001/api/Post';

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((actualData) => {
                setPosts(actualData);
                setData(actualData);
            })
    }, []);

    const handleChange = (e) => {
        setSearchData(e.target.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(searchData.trim() === ''){
            setData(posts);
        }else if(posts.filter(post => post.title.toLowerCase().includes(searchData)) == ''){
            console.log('No result');
        } else{
            setData(posts
                .filter(post => post
                    .title
                    .toLowerCase()
                    .includes(searchData)));
        }



    };

    return(
        <div>
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
            <div className="content-block">
                <div className="search-from">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Search" onChange={handleChange}/>
                        <button type="submit">Search</button>
                    </form>
                </div>
                <PostCard posts={data}/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/>


        </div>
    );
}

export default Main;