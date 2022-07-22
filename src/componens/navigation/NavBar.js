import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, useParams
} from "react-router-dom";

import "./NavBar.css";

import Main from "../main/Main";
import UserPage from "../user/UserPage";
import Register from "../auth/registration/Register";
import Login from "../auth/login/Login";
import PostPage from "../post/post page/PostPage";
import PostCreate from "../post/post create/PostCreate";

function NavBar(){

    let {postId} = useParams();

    return(
        <div className="nav-block">
            <Router>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Interest</Link>
                            </li>
                            <li>
                                <Link to="/user">My page</Link>
                            </li>
                            <li>
                                <Link to="/registration">Registration</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/user" element={<UserPage/>}/>
                    <Route path="/registration" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/post/:postId" element={<PostPage/>}/>
                    <Route path="/post_create" element={<PostCreate/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default NavBar;