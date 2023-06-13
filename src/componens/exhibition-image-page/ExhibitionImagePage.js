import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {imageListData} from "../exhibition-page/Data";
import {
    Container,
    Box, CardContent, Typography, CardActions, Button, Paper, IconButton
} from "@mui/material";
import { Link } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ExhibitionImagePage = () => {
    const {exhibitionId, imageId} = useParams();
    const [imageData, setImageData] = useState(null);


    useEffect(() => {
        const img = imageListData.find(item => item.id == imageId);
        setImageData(img);
    }, [imageId, imageListData])

    useEffect(() => {
        console.log(imageData);
    }, [imageData])

    return(
        <Container>
            {imageData ?
                <>
                    <Link to={`/exhibition/${exhibitionId}`}>
                        <IconButton>
                            <ArrowBackIcon fontSize='large'/>
                        </IconButton>
                    </Link>
                    <Box sx={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'center',
                    }}>
                        <img style={{maxWidth:'1000px'}} src={imageData.img}/>
                    </Box>
                    <Box sx={{marginY:'10px'}}>
                        <Paper elevation={3} >
                            <CardContent>
                                <Typography variant="h2" gutterBottom>
                                    {imageData.title}
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    Author - {imageData.author}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">View artist page</Button>
                            </CardActions>
                        </Paper>
                    </Box>
                </>
                :

            <h1>Loading...</h1>}
        </Container>
    );
}

export default ExhibitionImagePage;