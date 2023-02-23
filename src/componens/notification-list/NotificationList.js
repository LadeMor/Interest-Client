import React, { useState } from "react";
import {Container,
    List,
    ListItem,
    ListItemText,
    Typography,
    ListItemButton,
    ListItemAvatar,
    Avatar,
    Divider
} from "@mui/material";

const notifications = [
    {
        id: 1,
        type: "comment",
        date: "2023-01-04T00:00:00",
        content: "This is a really cool post",
        author: "Gaibo"
    },
    {
        id: 2,
        type: "exhibitionSoon",
        date: "2023-01-07T00:00:00",
        content: "Exhibition will be very soon",
        author: "Organizer"
    },
    {
        id: 3,
        type: "exhibitionStarted",
        date: "2023-01-10T00:00:00",
        content: "Exhibition have started already",
        author: "Organizer"
    }
];

const NotificationList = () => {
    const [notifs, setNotifs] = useState(notifications);

    return (
        <Container>
            <List>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Exhibition will be very soon"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Dareck
                                </Typography>
                                {" — At 2 march will be our new winter gallery..."}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
        </Container>

    );
};

export default NotificationList;