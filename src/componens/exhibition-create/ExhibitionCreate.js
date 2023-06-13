import React, {useState} from "react";
import "./ExhibitionsCreate.css";
import {
    Container,
    Box,
    Paper,
    Typography,
    TextField,
    AppBar,
    IconButton,
    Button,
    Toolbar,
    List,
    ListItem,
    ListItemAvatar,
    Avatar, ListItemText,
    FormGroup,
    Checkbox,
    FormControlLabel
} from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';

const ExhibitionCreate = () => {

    const [tempList, setTempList] = useState([
        {
            id:1,
            username:'LadeMor'
        },
        {
            id:2,
            username:'Jane'
        },
        {
            id:3,
            username:'Swinson'
        },
        {
            id:4,
            username:'John'
        },
        {
            id:5,
            username:'Clare'
        },
        {
            id:6,
            username:'Clare'
        },
        {
            id:7,
            username:'Clare'
        },
        {
            id:8,
            username:'Clare'
        }
    ]);

    const [tempArtList, setTempArtList] = useState([
        {
            id: 1,
            title: "Art",
            image: 'https://i.pinimg.com/474x/8e/52/86/8e52866875dcd3d2d19831505b4b02ad.jpg'
        }
    ])

    return(
        <Container>
            <Box sx={{width:'100%'}}>
                <Paper elevation={3} sx={{padding:'10px'}}>
                    <Typography variant="h4" gutterBottom>
                        Creating exhibition
                    </Typography>
                   <Box sx={{marginBottom:'15px'}}>
                       <Typography variant="h5" gutterBottom>
                           <span style={{color:'red'}}>*</span>Title
                       </Typography>
                       <TextField label="Title" variant="outlined" sx={{width:'100%'}}/>
                   </Box>
                    <Box sx={{marginBottom:'15px'}}>
                        <Typography variant="h5" gutterBottom>
                            <span style={{color:'red'}}>*</span>Description
                        </Typography>
                        <TextField
                            label="Description"
                            multiline
                            rows={6}
                            sx={{width:'100%'}}
                        />
                    </Box>
                    <Box sx={{marginBottom:'15px'}}>
                        <Typography variant="h5" gutterBottom>
                            <span style={{color:'red'}}>*</span>Preview image
                        </Typography>
                        <input type="file" id="myFile" name="myfile"/>
                        <Box sx={{
                            backgroundColor:'#CCCCCC',
                            border:'1px solid grey',
                            borderRadius:'5px',
                            width:'300px',
                            height:'300px',
                            display:'flex',
                            flexDirection:'row',
                            justifyContent:'center',
                            alignItems:'center'
                            }}>
                            <ImageIcon fontSize='large'/>
                        </Box>
                    </Box>
                    <Box sx={{marginBottom:'15px'}}>
                        <Typography variant="h5" gutterBottom>
                            <span style={{color:'red'}}>*</span>Participants
                        </Typography>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                >
                                    <AddIcon/>
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Add participant
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <List sx={{height:'300px', overflow:'auto'}}>
                            {tempList.map(item => (
                                <ListItem
                                    key={item.id}
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FolderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.username}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Box sx={{marginBottom:'15px'}}>
                        <Typography variant="h5" gutterBottom>
                            <span style={{color:'red'}}>*</span>Time period
                        </Typography>
                        <input className="date-input" type="date" /><span className='stick'>-</span><input type="date" className="date-input"/>

                    </Box>
                    <Box sx={{marginBottom:'15px'}}>
                        <Typography variant="h5" gutterBottom>
                            <span style={{color:'red'}}>*</span>Arts
                        </Typography>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                >
                                    <AddIcon/>
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Add art
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <List sx={{height:'300px', overflow:'auto'}}>
                            {tempArtList.map(item => (
                                <ListItem
                                    key={item.id}
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img src={item.image}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.title}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Box sx={{marginBottom:'15px'}}>
                        <Typography variant="h5" gutterBottom>
                            Additional
                        </Typography>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Notify users about the created exhibition" />
                            <FormControlLabel control={<Checkbox />} label="Notify users about the start of the exhibition 3 days before the start" />
                            <FormControlLabel control={<Checkbox />} label="Allow platform users to submit their work to the exhibition" />
                        </FormGroup>
                    </Box>
                    <Box sx={{marginBottom:'15px'}}>
                        <Button
                        sx={{padding:'15px', fontSize:'20px'}}
                            variant="contained">Create</Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}

export default ExhibitionCreate;