import React, {useEffect} from "react";
import Moment from "react-moment";
import {deleteComment} from "../../services/comment-service/CommentService";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

function CommentListItem({data}){

    const handleClick = () => {
        let confimDelete = window.confirm("Are you sure you want to delete this comment?");
        if(confimDelete){
            deleteComment(data.comment_Id).then(() => window.location.reload());
        }
    }

    return(
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {data && data.map(item => (
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.author}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        <Moment format="YYYY-MM-DD">
                                            {item.date_Of_Comment_Creation}
                                        </Moment>
                                    </Typography>
                                    <Typography>
                                        {item.text}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </>
    );
}

export default CommentListItem;