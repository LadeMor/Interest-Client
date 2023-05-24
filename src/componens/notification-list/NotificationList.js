import React, {useEffect, useState} from "react";
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


const NotificationList = () => {
    const [notificationList, setNotifiactionList] = useState([
        {
            id:1,
            isDisplay: false,
            type: 'exhibition',
            image: 'https://i.pinimg.com/474x/3c/6d/df/3c6ddff1a21ef317ae7f1f7ea26ac8da.jpg',
            title:'Exhibition will be very soon',
            author: 'Dareck',
            message:[
                {
                    id:1,
                    type:'text',
                    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis maximus quam, et elementum mauris posuere eu. Proin vel dolor justo. Sed volutpat semper urna nec gravida. Proin in ligula finibus, fringilla est quis, convallis dui. Etiam quis ligula urna. Aliquam enim sem, aliquet eu aliquam eget, vulputate eu magna. In pellentesque consectetur quam a aliquet. Vivamus vel cursus mi. Etiam in felis ut orci pulvinar volutpat a vitae nisi. Duis sed enim mi. Proin gravida pretium ante, eget ultricies lectus facilisis ac. Donec et volutpat risus. Ut dictum purus nec enim malesuada, vel varius ligula commodo. Aliquam erat volutpat. Vestibulum mollis vestibulum justo id porta. Nam vehicula augue et metus imperdiet bibendum. Quisque ut ante lorem. Sed varius dapibus venenatis. Suspendisse potenti. In cursus risus et fermentum maximus. Nam at velit vitae nulla consectetur egestas vitae nec erat. Nullam in ipsum id felis molestie lacinia sit amet sed sapien. Duis ut erat congue, tincidunt ex at, consectetur nisi. Praesent ipsum eros, ornare in odio non, pellentesque gravida justo. Mauris vitae facilisis ligula, nec elementum ex. Fusce varius faucibus enim, vitae rhoncus ipsum gravida nec. Vivamus tincidunt ut magna non tempor.'
                }
            ]
        },
        {
            id:2,
            isDisplay: false,
            type:'warning',
            image:null,
            title:'Your account will soon be charged $25 for an \'Author\' subscription',
            author: 'INTEREST',
            message: [
                {
                    id:1,
                    type:'text',
                    content: 'On May 23, 2023, your account **** **** **** 4444 will be charged $25 for the "Author" paid subscription'
                }
            ]
        },
        {
            id:3,
            isDisplay: false,
            type:'critical',
            image: null,
            title:'Your account has been suspended due to a user policy violation.',
            author: 'INTEREST',
            message: [
                {
                    id:1,
                    type:'text',
                    content: 'Your account has been suspended due to a user policy violation. The blocking period is 3 months. You will be limited access to:'
                },
                {
                    id:2,
                    type:'list',
                    content: [
                        'Creating posts and exhibitions',
                        'Commenting on posts and exhibitions',
                        'Chatting'
                    ]
                },
                {
                    id:3,
                    type:'text',
                    content: 'Also, you will no longer be charged for a paid subscription for the period of blocking. You can appeal your blocking by contacting the administration of the "INTEREST" platform via email@gmail.com.'
                }
            ]
        },
        {
            id:4,
            isDisplay: false,
            type:'comment',
            image: 'https://i.pinimg.com/474x/b1/08/dc/b108dcf4d44220bf3d98b20231ef3ad6.jpg',
            title: 'LadeX and 3 other people commented on your post',
            author: 'Dareck',
            message: [
                {
                    id:1,
                    type:'text',
                    content: 'Rido and 3 other people commented on your post'
                }
            ]
        }
    ])

    function setNotificationActivation (notifications) {
        const list = [];
        notifications.map(({id}) => (
            list.push({
                id: id,
                isActive: false
            })
        ));
        return list;
    }

    const [isDisplayContent, setIsDisplayContent] = useState(false);
    const [displayContentList, setDisplayContentList] = useState(setNotificationActivation(notificationList));




    const handleArrowClick = (id) => {
        const updateActives = [...displayContentList];
        const indexItem = updateActives.findIndex(item => item.id === id);

        if (indexItem !== -1) {
            const updatedItem = { ...updateActives[indexItem], isActive: !updateActives[indexItem].isActive };
            updateActives[indexItem] = updatedItem;
            setDisplayContentList(updateActives);
        }
    }

    const handleSetImage = (type, image) => {
        switch (type){
            case 'warning':
                return <PaidIcon sx={{marginTop:'7px', marginLeft:'7px'}}/>;
            case 'critical':
                return <DangerousIcon sx={{marginTop:'7px', marginLeft:'7px'}}/>;
            default:
                return <Avatar alt="Remy Sharp" src={image}/>
        }
    }

    const handleSetSubTitle = (text) => {
        if(text.length > 50){
            return `- ${text.substring(0, 50)}...`
        }else{
            return `- ${text}`;
        }
    }

    const displayContentText = (type, content) => {
        switch (type){
            case 'text':
                return (<Typography variant="body1" sx={{marginTop:2}} color='black'>
                            {content}
                        </Typography>);
            case 'list':
                return (
                    <Typography variant="body1" sx={{marginTop:2}} color='black'>
                        <ul>
                            {content.map(item => (
                                <li>{item}</li>
                            ))}
                        </ul>
                    </Typography>
                );

        }
    }

    const test = (id) => {
        console.log(id);
    }


    return (
        <Container>
            <List>
                {notificationList.map((item, index) => (
                    <ListItem key={item.id} alignItems="flex-start" sx={{
                            border: '1px solid #c2c2c2',
                            borderRight: 'none',
                            borderLeft: 'none'}}>
                            <ListItemAvatar>
                                {handleSetImage(item.type,item.image)}
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.title}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {item.author}
                                        </Typography>
                                        {handleSetSubTitle(item.message[0].content ? item.message[0].content : 'Loading...')}
                                        <Container className={`container ${displayContentList[index].isActive ? 'show' : null}`}>
                                            {item.message.map(content => (
                                                displayContentText(content.type, content.content)
                                            ))}
                                        </Container>
                                    </React.Fragment>
                                }
                            />
                            <ArrowForwardIosIcon

                                onClick={() => handleArrowClick(item.id)}
                                className={`arrow-icon ${displayContentList[index].isActive  ? 'down' : null}`}/>
                        </ListItem>
                ))}
            </List>
        </Container>

    );
};

export default NotificationList;