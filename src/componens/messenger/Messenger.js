import React from "react";
import {
    Container,
    Grid, Box, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider
} from "@mui/material";


const chatList = [
    {
        id: 1,
        name: "Marko",
        avatar: "../../img/avatars/avatar_1/jpg",
        lastMessage: "Ok, lets do this tomorrow"
    },
    {
        id: 2,
        name: "Anna",
        avatar: "../../img/avatars/avatar_2/jpeg",
        lastMessage: "Photo"
    },
    {
        id: 3,
        name: "PixelDante",
        avatar: "../../img/avatars/avatar_3/jpg",
        lastMessage: "I will try this technic soon"
    },
];

const ChatList = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Box sx={{
                        border:'solid',
                        borderWidth:1,
                        borderColor:'black',
                        height:'100%'}}>
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            {chatList && chatList.map(item => (
                                <>
                                    <ListItem alignItems="flex-start" key={item.id}>
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src={item.avatar} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={item.name}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        {item.lastMessage}
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </>
                            ))}
                        </List>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{height:'100%'}}>d</Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ChatList;