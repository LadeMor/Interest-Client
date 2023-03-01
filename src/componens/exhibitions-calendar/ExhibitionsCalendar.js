import React, {useState} from "react";
import {Container, Box, Grid} from "@mui/material";
import Calendar from 'react-calendar';
import {useStyles} from './CalendarStyles';
import 'react-calendar/dist/Calendar.css';


function ExhibitionsCalendar(){

    const classes = useStyles();
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
        console.log(date);
    }

    return(
        <>
            <Container maxWidth="lg">
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                backgroundColor: "primary.main",
                                borderRadius: "12px",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
                                p: 3,
                                textAlign: "center",
                            }}
                        >
                            <Box sx={{ fontSize: 28, mb: 2, fontWeight: "bold", color: "#fff" }}>
                                Exhibitions
                            </Box>
                            <Box sx={{ fontSize: 48, fontWeight: "bold", color: "#fff" }}>
                                {date.toLocaleDateString()}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                backgroundColor: "#fff",
                                borderRadius: "12px",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
                                p: 3,
                                textAlign: "center",
                            }}
                        >
                            <Calendar onChange={onChange}
                                      value={date}
                                      />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ExhibitionsCalendar;