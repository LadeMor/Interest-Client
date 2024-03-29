import React, {useEffect, useState} from "react";
import {
    Card,
    CardMedia,
    Typography,
    CardActions,
    Button,
    CardContent,
    Box, Container
} from "@mui/material";

import landscape from "../../img/exhibition-photo-titles/exhibition_preview_1.jpg";
import imageRav from "../../img/exhibition-photo-titles/exhibition_preview_2.jpg";
import {getAllExhibitions} from "../../services/exhibition-sevices/ExhibitionService";
import './ExhibitionList.css';
import {Link} from "react-router-dom";
import {getFormatDate, getTextMonthFormatDate} from "../functions/DateFunctions";

function ExhibitionsList(){

    const [exhibitionList, setExhibitionList] = useState(null);

    useEffect(()=>{
        getAllExhibitions()
            .then(res => setExhibitionList(res))
            .catch(() => console.log("Error"))
    }, [])

    const checkExhibitionDate = (dateStart) => {
        let currentDate = new Date(dateStart);
        if (currentDate <= new Date()) {
            return true;
        } else {
            return false;
        }
    }


    return (
        <>
            {exhibitionList && exhibitionList.map(item => (
                <>
                    <Card sx={{ marginX: 10, marginY: 5 }} key={item.id}>
                            <CardMedia
                                className={checkExhibitionDate(item.date_Of_Starting) ? null : 'unable'}
                                sx={{ height: 300 }}
                                image={item.image}
                                title={item.title}
                            />

                            {checkExhibitionDate(item.date_Of_Starting) ?
                               <>
                                   <CardContent>
                                       <Typography gutterBottom variant="h4" component="div">
                                           {item.title}
                                       </Typography>
                                       <Typography variant="body2" color="text.secondary">
                                           {item.exhibition_Description}
                                       </Typography>
                                       <Typography variant="body1" color="text.secondary">
                                           By: {item.author}
                                       </Typography>
                                       {checkExhibitionDate(item.date_Of_Starting) ?
                                           <Typography variant="body1" color="text.secondary">
                                               {getTextMonthFormatDate(item.date_Of_Starting)} - {getTextMonthFormatDate(item.date_Of_Ending)}
                                           </Typography>
                                           :
                                           null
                                       }
                                   </CardContent>
                                   <CardActions>
                                       <Button size="small">Share</Button>
                                       <Link to={`exhibition/${item.id}`}>
                                           <Button size="small">Discover</Button>
                                       </Link>
                                   </CardActions>
                               </>
                            :
                                <Container sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <Box sx={{padding:6, textAlign:'center'}}>
                                        <Typography gutterBottom variant="h4" component="div">
                                            <strong>{item.title}</strong>
                                        </Typography>
                                        <Typography gutterBottom variant="h4" component="div">
                                            Opening: {getTextMonthFormatDate(item.date_Of_Starting)}
                                        </Typography>
                                    </Box>
                                </Container>
                            }

                    </Card>
                </>
                )
            )}
        </>
    )
}

export default ExhibitionsList;