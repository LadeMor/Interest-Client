import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams
} from "react-router-dom";
import "./NavBar.css";
import Box from "@mui/material/Box";

import Main from "../main/Main";
import UserPage from "../user/user-page/UserPage";
import Register from "../auth/registration/Register";
import Login from "../auth/login/Login";
import PostPage from "../post/post page/PostPage";
import PostCreate from "../post/post create/PostCreate";
import AdminPage from "../admin/AdminPage";
import UserPageItem from "../admin/user-page-item/UserPageItem";
import UserEdit from "../user/user-edit/UserEdit";
import AppPanel from "../app-bar/AppPanel";
import NotificationList from "../notification-list/NotificationList";
import Messenger from "../messenger/Messenger";
import ExhibitionsCalendar from "../exhibitions-calendar/ExhibitionsCalendar";
import Subscriptions from "../subscriptions/Subscriptions";
import ExhibitionPage from "../exhibition-page/ExhibitionPage";


function NavBar(){

    let {postId} = useParams();

    return(
        <Box>
            <Router>
                <AppPanel/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/user" element={<UserPage/>}/>
                    <Route path="/registration" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/post/:postId" element={<PostPage/>}/>
                    <Route path="/user/post/:postId" element={<PostPage/>}/>
                    <Route path="admin/userpage/:userId/post/:postId" element={<PostPage/>}/>
                    <Route path="/post_create" element={<PostCreate/>}/>
                    <Route path="/admin" element={<AdminPage/>}/>
                    <Route path="/admin/userpage/:userId" element={<UserPageItem/>}/>
                    <Route path="/user/useredit" element={<UserEdit/>}/>
                    <Route path="/notifications" element={<NotificationList/>}/>
                    <Route path="/messenger" element={<Messenger/>}/>
                    <Route path="/calendar" element={<ExhibitionsCalendar/>}/>
                    <Route path="/subscriptions" element={<Subscriptions/>}/>
                    <Route path="/exhibition/:exhibitionId" element={<ExhibitionPage/>}/>
                </Routes>
            </Router>
        </Box>
    );
}

export default NavBar;