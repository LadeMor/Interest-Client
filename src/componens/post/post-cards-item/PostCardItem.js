import React, {useEffect, useState} from "react";

import './PostCardItem.css'
import {Link} from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";
import {getUserById} from "../../../services/user-service/UserService";
import {getFormatDate} from "../../functions/DateFunctions";


function PostCardItem({id, title, image, post_Description, author, date, user_Id}){

    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if(userInfo === null){
            getUserById(user_Id).then(res => setUserInfo(res));
        }
        console.log(userInfo);
    }, [userInfo])

    return(
        <Grid item xs={4}>
            <Link to={`post/${id}`}>
                <Card key={id} sx={{ maxWidth: 345 , margin: 1}}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" src={userInfo === null ? '' :  userInfo[0].profile_Photo}/>
                        }
                        action={
                            <IconButton aria-label="settings">
                            </IconButton>
                        }
                        title={author}
                        subheader={getFormatDate(date)}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={image}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {title}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    );
}

export default PostCardItem;