import React, {useState, useEffect} from "react";
import CommentList from "../../comment-list/CommentList";
import {pictureChange, onPreviewChange} from "../../functions/Functions";
import {deletePost, updatePost} from "../../../services/post-service/PostService";
import Moment from 'react-moment';
import {getCommentsByPostId} from "../../../services/comment-service/CommentService";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function PostPreview({postData}){

    const [postPreviewData, setPostPreviewData] = useState({
        editForm: false,
        postId: postData.id,
        title: postData.title,
        description: postData.description,
        image: postData.image,
        previewPhoto: postData.image,
        imgFile: '',
        dateOfCreation: postData.date_Of_Creation,
        comments: null
    })
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

    useEffect(() => {
        if(postData){
            getCommentsByPostId(postData.id).then(res => {
                if(postPreviewData.comments === null){
                    setPostPreviewData({...postPreviewData, comments: res});

                }
            });
        }
    })

    const deleteItem = (e) => {
        e.preventDefault();
        let confimDelete = window.confirm("Are you sure you want to delete this post?");
        if(confimDelete){
            deletePost(postData.id).then(() => window.location.replace('/'));
        }

    }

    const confimUpdate = (e) => {
        e.preventDefault();
        const data = {
            id: postData.id,
            user_Id: +localStorage.getItem('UserId'),
            title: postPreviewData.title,
            image: postPreviewData.image,
            post_Description: postPreviewData.description,
            author: localStorage.getItem("Username"),
            date_Of_Creation: postData.date_Of_Creation
        }

        updatePost(data).then(() => {
                window.location.reload();
        })

    }

    const onChangePicture = (e) => {
        const file = e.target.files[0];
        pictureChange(file, setPostPreviewData, postPreviewData);
    }

    useEffect(() => {
        onPreviewChange(setPostPreviewData, postPreviewData, postPreviewData.imgFile)
    }, [postPreviewData.imgFile]);

    return(
        <>
            <Container>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Edit post
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={confimUpdate}>
                            <TextField
                                id="outlined-basic"
                                label="Title"
                                variant="outlined"
                                sx={{marginTop:1, marginBottom:1}}
                                value={postPreviewData.title}
                                onChange={(e) => setPostPreviewData(
                                    {
                                        ...postPreviewData,
                                        title: e.target.value
                                    })}
                                    />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Description"
                                multiline
                                maxRows={4}
                                sx={{marginTop:1, marginBottom:1}}
                                name="description"
                                value={postPreviewData.description}
                                onChange={(e) => setPostPreviewData(
                                    {
                                        ...postPreviewData,
                                        description: e.target.value
                                    })}
                            />
                            <input type="file" accept="image/*" name="image" onChange={onChangePicture} id="file-upload"/>
                            <img src={postPreviewData.previewPhoto} style={{maxWidth:"300px", maxHeight:"500px", marginRight:"24px", marginBottom:"10px"}}/>
                            <Button variant="contained" sx={{marginRight:2}} type="submit">Submit</Button>
                            <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
                        </Box>
                    </Box>
                </Modal>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={postData.image}
                                alt="green iguana"
                                sx={{maxWidth:500, maxHeight: 800}}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {postData.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {postData.post_Description}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Uploaded: <Moment format="YYYY-MM-DD">{postData.date_Of_Creation}</Moment>
                            </Typography>
                            {+localStorage.getItem('UserId') === postData.user_Id || +localStorage.getItem('UserRoleId') === 1?
                                <>
                                    <Button variant="contained" onClick={handleOpen} sx={{marginRight:1}}>Edit</Button>
                                    <Button variant="outlined" onClick={deleteItem}>Delete</Button>
                                </>
                                :
                                ''
                            }
                        </CardContent>
                    </Card>
                <CommentList comments={postPreviewData.comments ? postPreviewData.comments :  null} postData = {postPreviewData ? postPreviewData : null}/>
            </Container>

        </>
    );
}

export default PostPreview;