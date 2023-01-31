import React, {useState} from "react";
import {Container} from "@mui/material";

/*
Types of notifications

* Comment
* Exhibition will be very soon
* Exhibition have started already
*
*/

function NotificationList(){

    const [notificationList, setNotificationList] = useState([
        {
            id:1,
            type: "comment",
            date: "2023-01-04T00:00:00",
            content: "This is really cool post",
            author: "Gaibo",
        }
    ]);

    return (
        <>
            <Container>
                <h1>Notification List</h1>
            </Container>
        </>
    )
}

export default NotificationList;