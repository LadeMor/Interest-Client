import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getExhibitionById} from "../../services/exhibition-sevices/ExhibitionService";
import {Container,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Divider,
    Avatar,
    Box,
    Grid,
    ListItemButton,
    ImageList,
    ImageListItem,
    ListSubheader,
    ImageListItemBar,
    Card,
    CardContent,
    CardActions
} from "@mui/material";

const ExhibitionPage = () => {
    const {exhibitionId} = useParams();
    const [exhibitionData, setExhibitionData] = useState(null);

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

    const [imageList, setImageList] = useState([
        {
            img: 'https://i.pinimg.com/474x/3c/6d/df/3c6ddff1a21ef317ae7f1f7ea26ac8da.jpg',
            title: 'Rock',
            author: 'LadeMor',
            rows: 2,
            cols: 2
        },
        {
            img: 'https://i.pinimg.com/474x/8e/52/86/8e52866875dcd3d2d19831505b4b02ad.jpg',
            title: 'Nature',
            author: 'Swinson',
            rows: 2,
            cols: 2
        },
        {
            img: 'https://i.pinimg.com/474x/16/07/8d/16078d3aabc508ee84bf147d16e4d8a6.jpg',
            title: 'Painting',
            author: 'Gaib',
            rows: 2,
            cols: 2
        },
        {
            img: 'https://blog.tubikstudio.com/wp-content/uploads/2020/04/Rhaetian-Alps-illustration-tubikarts.jpg',
            title: 'Sus',
            author: 'John',
        },
        {
            img: 'https://wallpaperaccess.com/full/176937.jpg',
            title: 'Sky',
            author: 'Clare',
            rows: 2,
            cols: 2
        },
        {
            img: 'https://c4.wallpaperflare.com/wallpaper/151/453/274/digital-art-digital-painting-fantasy-art-fantasy-landscape-wallpaper-preview.jpg',
            title: 'View',
            author: 'LadeMor',
        },
        {
            img: 'https://i.pinimg.com/474x/ca/c3/ef/cac3efae0a1c056aa375f4f2faddc496.jpg',
            title: 'Cos des',
            author: 'Anna',
            rows: 2,
            cols: 2
        },
    ]);

    useEffect(() => {
        getExhibitionById(exhibitionId)
            .then(res => setExhibitionData(res));
    }, [])

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
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="menu"
                                        sx={{ mr: 2 }}
                                    >
                                    </IconButton>
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
                                    <ListSubheader component="div">Landscapes</ListSubheader>
                                </ImageListItem>
                                {imageList.map((item) => (
                                    <ImageListItem key={item.img}>
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