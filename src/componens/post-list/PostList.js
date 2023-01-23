import React, {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import spinner from "../../icons/Rolling-1s-200px.svg";
import PostCards from "../post/post-cards/PostCards";
import {getAllPosts} from "../../services/post-service/PostService";

function PostList(){

    const [mainData, setMainData] = useState({
        resExist: true,
        data: null,
        filteredData: null,
        searchData: '',
        posts: null,
        sort: 'none'
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
    },[]);

    useEffect(() => {
        switch (mainData.sort) {
            case 'none':
                if(mainData.posts){
                    setMainData({...mainData, data: mainData.posts.sort((a, b) => {
                            if(a.date_Of_Creation > b.date_Of_Creation){
                                return 1;
                            }
                            if(a.date_Of_Creation < b.date_Of_Creation){
                                return -1;
                            }
                            return 0;
                        })});
                }
                break;
            case 'alph':
                setMainData({...mainData, data: mainData.posts.sort((a, b) => {
                        if(a.title > b.title){
                            return 1;
                        }
                        if(a.title < b.title){
                            return -1;
                        }
                        return 0;
                    })});
                break;
            case 'date':
                setMainData({...mainData, data: mainData.posts.sort((a, b) => {
                        if(a.date_Of_Creation < b.date_Of_Creation){
                            return 1;
                        }
                        if(a.date_Of_Creation > b.date_Of_Creation){
                            return -1;
                        }
                        return 0;
                    })});
                break;
        }
    }, [mainData.sort]);

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
                data: mainData.posts.filter(post => post.title.toLowerCase().includes(mainData.searchData)),
                resExist: true
            });
        }
    };

    const selectChange = (e) => {
        setMainData({...mainData, sort: e.target.value});
    }

    return(
        <>
            <Box
                onSubmit={handleSubmit}
                component="form"
                sx={{
                    '& .MuiTextField-root': { marginRight: 1, marginBottom: 1, width: '30ch' },
                    '& .MuiButton-root': { width: '10ch', marginBottom: 1, height:'7ch' }
                }}>
                <TextField type="text" placeholder="Search" onChange={handleChange}/>
                <Button variant="contained" type="submit">Submit</Button>
            </Box>
            {mainData.data === 'undefined' || mainData.data === null ? <img src={spinner} alt="spinner"/>
                : (mainData.resExist ?
                    <PostCards post={mainData.data}/> :
                    <div className="no-res-msg">
                        <h1>No Result</h1>
                    </div>)}
        </>
    );
}

export default PostList;