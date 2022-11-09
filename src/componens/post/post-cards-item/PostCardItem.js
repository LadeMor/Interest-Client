import React from "react";

import './PostCardItem.css'
import {Link} from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';


function PostCardItem({id, title, image, post_Description, author, date}){
    return(
        <Link to={`post/${id}`}>
            <Card key={id} sx={{ maxWidth: 345 , margin: 1}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">

                        </IconButton>
                    }
                    title={title}
                    subheader={date}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {post_Description}
                    </Typography>
                </CardContent>
                {/*<h1>{title}</h1>*/}
                {/*<img src={`${image}`}/>*/}
                {/*<p>{post_Description}</p>*/}
                {/*<h3>{author}</h3>*/}
            </Card>
        </Link>
    );
}

export default PostCardItem;