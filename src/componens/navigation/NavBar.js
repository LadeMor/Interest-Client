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
import AdminPage from "../admin/AdminPage";
import UserPageItem from "../admin/user-page-item/UserPageItem";

function NavBar(){

    let {postId} = useParams();

    const exitFromAccount = () => {
        let userSure = window.confirm("Are you sure you want to log out of your account?");
        if(userSure){
            localStorage.setItem('isUserLogin', "false");
            localStorage.setItem('UserId', '');
            localStorage.setItem('Username', '');
            localStorage.setItem('UserPassword', '');
            localStorage.setItem('UserEmail', '');
            localStorage.setItem('UserDescription', '');
            localStorage.setItem('UserRoleId', '');
            window.location.reload()
        }

    };

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
                            {+localStorage.getItem('UserRoleId') === 1?
                                <li>
                                    <Link to="/admin">Admin Page</Link>
                                </li>
                                :
                                ''
                            }
                            {localStorage.getItem('isUserLogin') === 'true' ?
                                <li>
                                    <button className="exit-button" onClick={exitFromAccount}>Exit</button>
                                </li>
                                :
                                ''
                            }
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/user" element={<UserPage/>}/>
                    <Route path="/registration" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/post/:postId" element={<PostPage/>}/>
                    <Route path="/user/post/:postId" element={<PostPage/>}/>
                    <Route path="/post_create" element={<PostCreate/>}/>
                    <Route path="/admin" element={<AdminPage/>}/>
                    <Route path="/admin/userpage/:userId" element={<UserPageItem/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default NavBar;