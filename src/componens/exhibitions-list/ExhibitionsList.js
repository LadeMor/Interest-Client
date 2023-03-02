import React, {useState} from "react";
import {
    Card,
    CardMedia,
    Typography,
    CardActions,
    Button,
    CardContent} from "@mui/material";

import landscape from "../../img/exhibition-photo-titles/exhibition_preview_1.jpg";
import imageRav from "../../img/exhibition-photo-titles/exhibition_preview_2.jpg";

function ExhibitionsList(){

    const [exhibitionList, setExhibitionList] = useState([
        {
            id: 1,
            image: landscape,
            title: "Landscapes",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000\n" +
                "                        species, ranging across all continents except Antarctica"
        },
        {
            id: 2,
            image: imageRav,
            title: "Arts",
            description: "There are exhibition about arts"
        }
    ]);

    return (
        <>
            {exhibitionList && exhibitionList.map(item => (
                <Card sx={{ marginX: 10, marginY: 5 }} key={item.id}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={`${item.image}`}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                )
            )}

        </>
    )
}

export default ExhibitionsList;