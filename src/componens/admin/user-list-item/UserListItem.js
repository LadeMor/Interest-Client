import React from "react";


import {Link} from "react-router-dom";
import {TableRow, TableCell} from "@mui/material";

function UserListItem({user}){
    return(
        <div>
            <Link to={`userpage/${user.id}`}>
                <TableRow
                    key={user.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {user.id}
                    </TableCell>
                    <TableCell align="right">{user.username}</TableCell>
                    <TableCell align="right">{user.email}</TableCell>
                </TableRow>
            </Link>
        </div>
    );
}

export default UserListItem;