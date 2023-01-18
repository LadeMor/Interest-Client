import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, useParams
} from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GlobalStyles from '@mui/material/GlobalStyles';

import "./NavBar.css";

import Main from "../main/Main";
import UserPage from "../user/user-page/UserPage";
import Register from "../auth/registration/Register";
import Login from "../auth/login/Login";
import PostPage from "../post/post page/PostPage";
import PostCreate from "../post/post create/PostCreate";
import AdminPage from "../admin/AdminPage";
import UserPageItem from "../admin/user-page-item/UserPageItem";
import UserEdit from "../user/user-edit/UserEdit";

function NavBar(){

    const [tabs, setTabs] = useState([
        {
            id: 1,
            label: "Interest",
            value: "/",
            path: "/"
        },
        {
            id: 2,
            label: "Registration",
            value: "/registration",
            path: "/registration"
        },
        {
            id: 3,
            label: "Login",
            value: "/login",
            path: "/login"
        }
    ]);

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
            window.location.replace("/");
        }
    };

    return(
        <Box>
            <Router>
                <header>
                    <Tabs
                        indicatorColor="secondary"
                        textColor="inherit">
                        {tabs && tabs.map(item => (
                            <Tab
                                key={item.id}
                                value={item.value}
                                to={item.path}
                                label={item.label}
                                component={Link}
                                sx={{padding: 3, fontSize:20}}/>
                        ))}
                        {localStorage.getItem("isUserLogin") === "true"
                            ? <Tab value="/user" to="/user" label="My page"
                                   component={Link} sx={{padding: 3, fontSize:20}}/>
                            : null}
                        {+localStorage.getItem('UserRoleId') === 1 ?
                            <Tab value="/admin" to="/admin"  label="Admin page"
                                 component={Link} sx={{padding: 3, fontSize:20}}/>
                            : null}
                        {localStorage.getItem('isUserLogin') === 'true' ?
                            <Tab label="Exit" sx={{padding: 3, fontSize:20}} onClick={exitFromAccount}/>
                            : null}
                    </Tabs>
                </header>
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
                </Routes>
            </Router>
        </Box>
    );
}

export default NavBar;