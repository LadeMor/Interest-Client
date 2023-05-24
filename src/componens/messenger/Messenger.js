import React, {useState} from "react";
import {
    Container,
    Grid, Box,
    List, ListItem,
    ListItemAvatar, Avatar,
    ListItemText, Typography,
    Divider, TextField
} from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';



const ChatList = () => {

    const [selectedChat, setSelectedChat] = useState(null);

    const [chatList, setChatList] = useState([
        {
            id:1,
            companionName: 'John',
            companionPhoto: 'https://i.pinimg.com/474x/78/b0/c7/78b0c7d1f98ddd4d307eecc2c09f3f4b.jpg',
            lastMessage: 'Hello, INTEREST!'
        }
    ])

    const handleChatClick = (chat) => {
        setSelectedChat(chat);
    };

    const UserMessage = ({text}) => {
        return (
            <Box sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'end'
            }}>
                <Box sx={{
                    border:'1px solid grey',
                    padding:'5px',
                    display:'flex',
                    flexDirection:'row',
                    borderRadius:'5px',
                    maxWidth:'350px',
                    marginBottom:'10px',
                    backgroundColor:'#6666FF',
                    color:'white'}}>
                    <Typography variant="subtitle1" gutterBottom>
                        {text}
                    </Typography>
                </Box>
            </Box>
        );
    }

    const CompanionMessage = ({text}) => {
        return (
            <Box sx={{
                display:'flex',
                flexDirection:'row'
            }}>
                <Box sx={{
                    border:'1px solid grey',
                    padding:'5px',
                    display:'flex',
                    flexDirection:'row',
                    borderRadius:'5px',
                    maxWidth:'350px',
                    marginBottom:'10px',}}>
                    <Typography variant="subtitle1" gutterBottom>
                        {text}
                    </Typography>
                </Box>
            </Box>
        );
    }

    return (
        <Container maxWidth="md" sx={{ height: '700px',
            boxShadow: '0px 0px 8px 2px rgba(0,0,0,0.44)'}}>
            <Grid container sx={{ height: '100%' }}>
                <Grid item xs={4} sx={{
                    height: '100%',
                    borderRight: '1px solid #ccc'
                }}>
                    <List sx={{ height: '100%', overflow: 'auto' }}>
                        {chatList.map(item => (
                            <ListItem key={item.id}>
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={item.companionPhoto} />
                                </ListItemAvatar>
                                <ListItemText primary={item.companionName} secondary={item.lastMessage}/>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={8} sx={{
                    height: '100%',
                    padding: '20px',
                    display:'flex',
                    flexDirection: 'column'}}>
                    <Box sx={{
                        border:'1px solid grey',
                        height:'100%',
                        borderBottom:'none',
                        display:'flex',
                        flexDirection:'column',
                        overflow:'auto',
                        borderRadius:'5px',
                        padding:'10px',
                        justifyContent:'end'}}>
                        <UserMessage text={'Hello, how are you?'}/>
                        <CompanionMessage text={"Hello, i'm fine, you?"}/>
                    </Box>

                    <TextField id="outlined-basic"  />
                </Grid>
            </Grid>
        </Container>
    );
};

export default ChatList;