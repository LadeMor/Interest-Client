import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getExhibitionById} from "../../services/exhibition-sevices/ExhibitionService";
import {getFormatDate} from "../functions/DateFunctions";
import {Container,
    AppBar, Toolbar,
    IconButton, Typography,
    Button, List,
    ListItem, ListItemAvatar,
    ListItemText, Divider,
    Avatar, Box,
    Grid, ListItemButton,
    ImageList, ImageListItem,
    ListSubheader, ImageListItemBar,
    Card, CardContent,
    CardActions, Modal
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import {imageListData} from "./Data";

const ExhibitionPage = () => {
    const {exhibitionId} = useParams();
    const [exhibitionData, setExhibitionData] = useState(null);
    const [exhibitionEndDate, setExhibitionEndDate] = useState(null);


    const [participantsList, setParticipantsList] = useState([
        {
            id: 1,
            username: 'LadeMor',
            profilePicture: 'https://i.pinimg.com/564x/96/07/2f/96072fe688a6d10a55e0f46588b6bc1d.jpg',
        },
        {
            id: 2,
            username: 'Swinson',
            profilePicture: 'https://i.pinimg.com/474x/58/2a/4d/582a4d03dbb70b9ea227c5f3850991f2.jpg',
        },
        {
            id: 3,
            username: 'Gaib',
            profilePicture: 'https://i.pinimg.com/474x/64/a9/ab/64a9abb76deb193f61cca46fc762d47d.jpg',
        },
        {
            id: 4,
            username: 'John',
            profilePicture: 'https://i.pinimg.com/474x/b1/08/dc/b108dcf4d44220bf3d98b20231ef3ad6.jpg',
        },
        {
            id: 5,
            username: 'Clare',
            profilePicture: 'https://i.pinimg.com/474x/2f/53/7d/2f537d6a7c8fedd0234343c4327bc4be.jpg',
        },
        {
            id: 6,
            username: 'Anna',
            profilePicture: 'https://i.pinimg.com/474x/f9/71/4e/f9714e2886c61456e604a89cd4dd2b72.jpg',
        },
    ])
    const [imageList, setImageList] = useState(imageListData);



    const [daysToEnd, setDaysToEnd] = useState(null);
    const [hoursToEnd, setHoursToEnd] = useState(null);
    const [minutesToEnd, setMinutesToEnd] = useState(null);
    const [secondsToEnd, setSecondsToEnd] = useState(null);

    useEffect(() => {
        getExhibitionById(exhibitionId)
            .then(res => {
                setExhibitionData(res)
                setExhibitionEndDate(res.date_Of_Ending);
            });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {

            const { days, hours, minutes, seconds } = calculateTimeToExhibitionEnd(exhibitionEndDate);
            setDaysToEnd(days < 10 ? `0${days}` : days.toString());
            setHoursToEnd(hours < 10 ? `0${hours}` : hours.toString());
            setMinutesToEnd(minutes < 10 ? `0${minutes}` : minutes.toString());
            setSecondsToEnd(seconds < 10 ? `0${seconds}` : seconds.toString());
        },1000)

        return () => clearInterval(interval);
    }, [exhibitionEndDate])

    const calculateTimeToExhibitionEnd = (date) => {
        let currentDate = new Date();
        let dateOfEnding = new Date(date);
        let intervalInMilliseconds = dateOfEnding - currentDate;

        const days = Math.floor(intervalInMilliseconds / (1000 * 60 * 60 * 24));
        const hours = Math.floor((intervalInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((intervalInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((intervalInMilliseconds % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds
        }
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <React.Fragment>
            <Box sx={{ flexGrow: 1, marginX:2 }}>
                <Grid container spacing={0}>
                    <Grid item xs={3}>
                        <Box>
                            <AppBar position="static" sx={{width: '100%',
                                maxWidth: 360}}>
                                <Toolbar>
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="menu"
                                        sx={{ mr: 2 }}
                                    >
                                    </IconButton>
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                        Information
                                    </Typography>
                                </Toolbar>
                            </AppBar>
                            <Card sx={{ width: '100%', maxWidth: 360}}>
                                <CardContent>
                                    <Typography variant="h4" sx={{fontSize:'20px'}} gutterBottom>
                                        <strong>Author</strong>
                                    </Typography>
                                    <Typography variant="h5" sx={{fontSize:'18px'}} gutterBottom>
                                        Username: LadeMor
                                    </Typography>
                                    <Typography variant="h5" sx={{fontSize:'18px'}} gutterBottom>
                                        Name: Serhii Piatko
                                    </Typography>
                                    <Typography variant="body1"  gutterBottom>
                                        This exhibition showcases a collection of stunning digital artworks that focus on landscapes.
                                        From rolling hills to towering mountains, the exhibition features a variety of landscapes that have been brought to life through the use of digital art techniques.
                                        Each piece is a unique and captivating portrayal of natural beauty, presented through the lens of modern technology.
                                        Whether you are a lover of traditional art or a tech enthusiast, this exhibition is sure to inspire and captivate you.
                                    </Typography>
                                </CardContent>
                            </Card>
                            <AppBar position="static" sx={{width: '100%',
                                maxWidth: 360, marginTop: '10px'}}>
                                <Toolbar>
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="menu"
                                        sx={{ mr: 2 }}
                                    >
                                    </IconButton>
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                        Participants
                                    </Typography>
                                    <Button color="inherit">Search</Button>
                                </Toolbar>
                            </AppBar>
                            <List dense sx={{
                                width: '100%',
                                maxWidth: 360,
                                bgcolor: 'background.paper',
                                height: '300px',
                                overflow:'auto',
                                boxShadow:'-webkit-box-shadow: 2px 2px 6px 0px rgba(128,128,128,1);\n' +
                                    '-moz-box-shadow: 2px 2px 6px 0px rgba(128,128,128,1);\n' +
                                    'box-shadow: 2px 2px 6px 0px rgba(128,128,128,1);'}}>
                                {participantsList.map(item => (
                                    <ListItem
                                        key={item.id}
                                        disablePadding
                                    >
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar
                                                    sx={{width:'50px', height:'50px'}}
                                                    alt={`${item.username}'s avatar`}
                                                    src={item.profilePicture}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText
                                                sx={{marginLeft:2}}
                                                primaryTypographyProps={{ sx: { fontSize: 16 } }}
                                                primary={item.username} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Grid>
                    <Grid item xs={9}>
                        <Box>
                            <AppBar
                                position="static"
                            >
                                <Toolbar
                                    style={{paddingRight:0}}>
                                    <Link to="/">
                                        <ArrowBackIcon
                                            sx={{ fontSize: 40, marginRight:3, textDecoration:'none' }}>
                                        </ArrowBackIcon>
                                    </Link>
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                        {exhibitionData ? exhibitionData.title : 'Loading...'}
                                    </Typography>
                                    <img
                                        alt={exhibitionData ? `${exhibitionData.title} image` : 'Loading..'}
                                        src={exhibitionData ? exhibitionData.image : 'Loading..'}
                                        style={{ objectFit: "cover", height:'150px', width: '600px'}}/>
                                </Toolbar>
                            </AppBar>
                            <ImageList sx={{ height: 950 }}>
                                <ImageListItem key="Subheader" cols={2}>
                                    <ListSubheader component="div">
                                        <Typography variant="h5" sx={{paddingY:2}}>
                                            <strong>{daysToEnd && hoursToEnd && minutesToEnd && secondsToEnd ? `Ends in
                                            ${daysToEnd}d 
                                            : ${hoursToEnd}h 
                                            : ${minutesToEnd}m 
                                            : ${secondsToEnd}s` : 'Loading...'}</strong>
                                        </Typography>
                                    </ListSubheader>
                                </ImageListItem>
                                {imageList.map((item) => (
                                    <>
                                        <Link to={`exhibition_image/${item.id}`}>
                                            <ImageListItem key={item.id} >
                                                <img
                                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                    alt={item.title}
                                                    loading="lazy"
                                                    style={{height:"500px"}}
                                                />
                                                <ImageListItemBar
                                                    title={item.title}
                                                    subtitle={item.author}
                                                    actionIcon={
                                                        <IconButton
                                                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                            aria-label={`info about ${item.title}`}
                                                        >
                                                        </IconButton>
                                                    }
                                                />
                                            </ImageListItem>
                                        </Link>
                                    </>
                                ))}
                            </ImageList>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
}

export default ExhibitionPage;