import React, {useEffect, useState} from "react";
import PostCards from "../post/post-cards/PostCards";
import {Link} from "react-router-dom";
import {getAllPosts} from "../../services/post-service/PostService";

import "./Main.css";

import filter from "../../icons/filter.svg";
import sort from "../../icons/sort.svg";
import create from "../../icons/create.svg";
import spinner from "../../icons/Rolling-1s-200px.svg";

function Main(){

    const [mainData, setMainData] = useState({
        resExist: true,
        data: null,
        filteredData: null,
        searchData: '',
        posts: null
    })


    useEffect(() => {
        getAllPosts()
            .then(actualData => {
                setMainData({
                    ...mainData,
                    posts: actualData,
                    data: actualData
                })
            })
    });

    const handleChange = (e) => {
        setMainData({...mainData, searchData: e.target.value.toLowerCase()});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(mainData.searchData.trim() === ''){
            setMainData({
                ...mainData,
                data: mainData.posts,
                resExist: true
            })
        }else if(mainData.posts.filter(post => post.title.toLowerCase().includes(mainData.searchData)) === ''){
            setMainData({...mainData, resExist: false})
        } else{
            setMainData({
                ...mainData,
                data: mainData.posts
                .filter(post => post
                    .title
                    .toLowerCase()
                    .includes(mainData.searchData)),
                resExist: true
            });
        }
    };

    return(
        <div>
            <div className="content-block-tools">
                <h1>Tools</h1>
                <ul>
                    <li>
                        <img src={filter} alt='filter'/>
                    </li>
                    <li>
                        <img src={sort} alt='sort'/>
                    </li>
                </ul>
            </div>
            {localStorage.getItem('isUserLogin') === 'true' ? <Link to="/post_create">
                <div className='create-post-button'>
                    <img src={create} alt='create-post'/>
                </div>
            </Link> :
            ''}
            <div className="content-block">
                <div className="search-from">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Search" onChange={handleChange}/>
                        <button type="submit">Search</button>
                    </form>
                </div>
                {mainData.data === 'undefined' || mainData.data === null ? <img src={spinner} alt="spinner"/>
                    : (mainData.resExist ?
                    <PostCards post={mainData.data}/> :
                    <div className="no-res-msg">
                        <h1>No Result</h1>
                    </div>)}
            </div>
        </div>
    );
}

export default Main;