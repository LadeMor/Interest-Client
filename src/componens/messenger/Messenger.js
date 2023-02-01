import React from "react";
import {Paper,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Divider,
    Container,
Grid,
    ListSubheader} from "@mui/material";

const messages = [
    {
        id: 1,
        sender: "John Doe",
        message: "Hi there! How are you?",
        date: "2022-12-25T10:00:00"
    },
    {
        id: 2,
        sender: "Jane Doe",
        message: "I'm good, thanks! How about you?",
        date: "2022-12-25T10:05:00"
    },
    {
        id: 3,
        sender: "John Doe",
        message: "I'm doing great. What have you been up to lately?",
        date: "2022-12-25T10:10:00"
    }
];

const ChatList = () => {
    return (
        <Container>
            <h1>Mails</h1>
        </Container>
    );
};

export default ChatList;