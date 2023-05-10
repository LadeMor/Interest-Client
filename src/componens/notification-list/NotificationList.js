import React, { useState } from "react";
import './NotificationList.css';
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

import DangerousIcon from '@mui/icons-material/Dangerous';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PaidIcon from '@mui/icons-material/Paid';


/*
Comment/Exhibition - usual color with avatar
Warning - yellow light with warning icon
Critical warning - red light with dangerous icon
* */

const NotificationList = () => {
    const [isDisplayContent, setIsDisplayContent] = useState(false);

    const handleArrowClick = () => {
        setIsDisplayContent(!isDisplayContent);
    }

    return (
        <Container>
            <List>
                <ListItem alignItems="flex-start" sx={{
                    border: '1px solid #c2c2c2',
                    borderRight: 'none',
                    borderLeft: 'none'}}>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src='https://i.pinimg.com/474x/3c/6d/df/3c6ddff1a21ef317ae7f1f7ea26ac8da.jpg'/>
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
                                <Container className={`container ${isDisplayContent ? 'show' : null}`}>
                                    <Typography variant="body1" sx={{marginTop:2}} color='black'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis maximus quam, et elementum mauris posuere eu. Proin vel dolor justo. Sed volutpat semper urna nec gravida. Proin in ligula finibus, fringilla est quis, convallis dui. Etiam quis ligula urna. Aliquam enim sem, aliquet eu aliquam eget, vulputate eu magna. In pellentesque consectetur quam a aliquet. Vivamus vel cursus mi. Etiam in felis ut orci pulvinar volutpat a vitae nisi. Duis sed enim mi. Proin gravida pretium ante, eget ultricies lectus facilisis ac. Donec et volutpat risus.

                                        Ut dictum purus nec enim malesuada, vel varius ligula commodo. Aliquam erat volutpat. Vestibulum mollis vestibulum justo id porta. Nam vehicula augue et metus imperdiet bibendum. Quisque ut ante lorem. Sed varius dapibus venenatis. Suspendisse potenti. In cursus risus et fermentum maximus. Nam at velit vitae nulla consectetur egestas vitae nec erat. Nullam in ipsum id felis molestie lacinia sit amet sed sapien. Duis ut erat congue, tincidunt ex at, consectetur nisi. Praesent ipsum eros, ornare in odio non, pellentesque gravida justo. Mauris vitae facilisis ligula, nec elementum ex. Fusce varius faucibus enim, vitae rhoncus ipsum gravida nec. Vivamus tincidunt ut magna non tempor.
                                    </Typography>
                                </Container>
                            </React.Fragment>
                        }
                    />
                    <ArrowForwardIosIcon

                        onClick={handleArrowClick}
                        className={`arrow-icon ${isDisplayContent ? 'down' : null}`}/>
                </ListItem>

                <ListItem alignItems="flex-start" sx={{
                    border: '1px solid #c2c2c2',
                    borderRight: 'none',
                    borderLeft: 'none'}}>
                    <ListItemAvatar>
                        <PaidIcon sx={{marginTop:'7px', marginLeft:'7px'}}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Your account will soon be charged $25 for an 'Author' subscription"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    INTEREST
                                </Typography>
                                {" —  On May 23, 2023, your account **** **** **** 4444..."}
                                <Container className={`container ${isDisplayContent ? 'show' : null}`}>
                                    <Typography variant="body1" sx={{marginTop:2}} color='black'>
                                        On May 23, 2023, your account **** **** **** 4444 will be charged $25 for the "Author" paid subscription
                                    </Typography>
                                </Container>
                            </React.Fragment>
                        }
                    />
                    <ArrowForwardIosIcon

                        onClick={handleArrowClick}
                        className={`arrow-icon ${isDisplayContent ? 'down' : null}`}/>
                </ListItem>

                <ListItem alignItems="flex-start" sx={{
                    border: '1px solid #c2c2c2',
                    borderRight: 'none',
                    borderLeft: 'none'}}>
                    <ListItemAvatar>
                        <DangerousIcon sx={{marginTop:'7px', marginLeft:'7px'}}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Your account has been suspended due to a user policy violation."
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    INTEREST
                                </Typography>
                                {" —  Your account has been suspended due to a..."}
                                <Container className={`container ${isDisplayContent ? 'show' : null}`}>
                                    <Typography variant="body1" sx={{marginTop:2}} color='black'>
                                        Your account has been suspended due to a user policy violation. The blocking period is 3 months. You will be limited access to:
                                        <ul>
                                            <li>
                                                Creating posts and exhibitions
                                            </li>
                                            <li>
                                                Commenting on posts and exhibitions

                                            </li>
                                            <li>
                                                Chatting
                                            </li>
                                        </ul>
                                        Also, you will no longer be charged for a paid subscription for the period of blocking.

                                        You can appeal your blocking by contacting the administration of the "INTEREST" platform via email@gmail.com.
                                    </Typography>
                                </Container>
                            </React.Fragment>
                        }
                    />
                    <ArrowForwardIosIcon

                        onClick={handleArrowClick}
                        className={`arrow-icon ${isDisplayContent ? 'down' : null}`}/>
                </ListItem>

                <ListItem alignItems="flex-start" sx={{
                    border: '1px solid #c2c2c2',
                    borderRight: 'none',
                    borderLeft: 'none'}}>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src='https://i.pinimg.com/474x/b1/08/dc/b108dcf4d44220bf3d98b20231ef3ad6.jpg'/>
                    </ListItemAvatar>
                    <ListItemText
                        primary="LadeX and 3 other people commented on your post"
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
                                {" — LadeX and 3 other people commented on your..."}
                                <Container className={`container ${isDisplayContent ? 'show' : null}`}>
                                    <Typography variant="body1" sx={{marginTop:2}} color='black'>
                                        LadeX and 3 other people commented on your post
                                    </Typography>
                                </Container>
                            </React.Fragment>
                        }
                    />
                    <ArrowForwardIosIcon

                        onClick={handleArrowClick}
                        className={`arrow-icon ${isDisplayContent ? 'down' : null}`}/>
                </ListItem>
            </List>
        </Container>

    );
};

export default NotificationList;