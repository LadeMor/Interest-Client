import React, {useState} from "react";
import {
    Container,
    Grid, Box,
    List, ListItem,
    ListItemAvatar, Avatar,
    ListItemText, Typography,
    TextField,
    InputAdornment, IconButton
} from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import SendIcon from '@mui/icons-material/Send';



const ChatList = () => {

    const [selectedChat, setSelectedChat] = useState(null);

    const [chatList, setChatList] = useState([
        {
            id:1,
            companionName: 'John',
            companionPhoto: 'https://i.pinimg.com/474x/78/b0/c7/78b0c7d1f98ddd4d307eecc2c09f3f4b.jpg',
            conversationData:[
                {
                    id:1,
                    personType:'user',
                    content:'Hello, how are you?'
                },
                {
                    id:2,
                    personType:'companion',
                    content:'Hello, how are you?'
                },
            ]
        },{
            id:2,
            companionName: 'Clare',
            companionPhoto: 'https://i.pinimg.com/474x/58/2a/4d/582a4d03dbb70b9ea227c5f3850991f2.jpg',
            conversationData:[
                {
                    id:1,
                    personType:'user',
                    content:'Hello, how are you?'
                },
                {
                    id:2,
                    personType:'companion',
                    content:'Hello, how are you?'
                },
            ]
        },{
            id:3,
            companionName: 'DePixel',
            companionPhoto: 'https://i.pinimg.com/564x/21/db/3c/21db3c92c35b5bab41dc20c2308a61e9.jpg',
            conversationData:[
                {
                    id:1,
                    personType:'user',
                    content:'Hello, how are you?'
                },
                {
                    id:2,
                    personType:'companion',
                    content:'Hello, how are you?'
                },
            ]
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
                    paddingTop:'5px',
                    paddingX:'5px',
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
                    paddingTop:'5px',
                    paddingX:'5px',
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
                            <ListItem key={item.id} sx={{cursor:'pointer'}}>
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={item.companionPhoto} />
                                </ListItemAvatar>
                                <ListItemText primary={item.companionName} secondary={item.conversationData[0].content}/>
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

                    <TextField id="outlined-basic"
                               InputProps={{
                                   startAdornment: (
                                       <InputAdornment position="start">
                                           <IconButton>
                                               <SendIcon />
                                           </IconButton>
                                       </InputAdornment>
                                   ),
                               }}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ChatList;