import React, {useEffect, useState} from "react";
import {Container, Box, Grid} from "@mui/material";
import Calendar from 'react-calendar';
import {useStyles} from './CalendarStyles';
import 'react-calendar/dist/Calendar.css';
import {getAllExhibitions} from "../../services/exhibition-sevices/ExhibitionService";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {getTextMonthFormatDate} from "../functions/DateFunctions";
import {Link} from "react-router-dom";



function ExhibitionsCalendar(){

    const classes = useStyles();
    const [date, setDate] = useState(new Date());

    const [exhibitionList, setExhibitionList] = useState([]);
    const [currentExhibitions, setCurrentExhibitions] = useState(null);

    useEffect(() => {
        getAllExhibitions()
            .then(res => setExhibitionList(res))
    }, [])


    const checkExhibitionsTime = (currentDate) => {
        const arr = exhibitionList.filter(item => {

            let dateOfStart = new Date(item.date_Of_Starting);
            let dateOfEnd = new Date(item.date_Of_Ending);

            return dateOfStart <= currentDate && dateOfEnd >= currentDate;
        })

        console.log(arr);
        setCurrentExhibitions(arr);

    }

    const onChange = date => {
        setDate(date);
        checkExhibitionsTime(date);
    }

    return(
        <>
            <Container>
                <Box sx={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'center',
                    marginBottom:'20px'
                }}>
                    <Calendar
                        onChange={onChange}
                        value={date}
                    />
                </Box>
                <Box sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    {currentExhibitions ?
                        currentExhibitions.map(item => (
                            <Card sx={{marginBottom:'10px', width:'800px'}}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={item.image}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.exhibition_Description}
                                    </Typography>
                                </CardContent>

                                    {new Date(item.date_Of_Starting) < new Date ?
                                        <CardActions>
                                            <Link to={`/exhibition/${item.id}`}>
                                                <Button size="small">Learn More</Button>
                                            </Link>
                                        </CardActions>
                                        :
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Opening: {getTextMonthFormatDate(item.date_Of_Starting)}
                                            </Typography>
                                        </CardContent>
                                    }


                            </Card>
                        ))
                         :
                    <Typography variant="h3">
                        There are no exhibitions in this period of time
                    </Typography>}
                </Box>
            </Container>
        </>
    )
}

export default ExhibitionsCalendar;