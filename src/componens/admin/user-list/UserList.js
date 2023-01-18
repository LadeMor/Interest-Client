import React, {useEffect, useState} from "react";


import UserListItem from "../user-list-item/UserListItem";
import {
    Box,
    Button,
    Container, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography
} from "@mui/material";

function UserList({userList}){

    const [users, setUsers] = useState([]);
    const [searchData, setSearchData] = useState('');
    const [alignment, setAlignment] = useState('Username');
    const [filterData, setFilterData] = useState('Username');

    const handleChange = e => {
        setSearchData(e.target.value.toLowerCase());
    }

    const buttonsChange = (event, newAlignment) => {
        setAlignment(newAlignment);
        setFilterData(newAlignment);
    };

    const handleSubmit = e => {
        e.preventDefault();
        switch (filterData){
            case 'Username':
                if(searchData.trim() === ''){
                    setUsers(userList);
                }else if(userList.filter(user => user.username.toLowerCase().includes(searchData)) === ''){
                } else{
                    setUsers(userList
                        .filter(user => user
                            .username
                            .toLowerCase()
                            .includes(searchData)));
                }
                break;
            case 'Email':
                if(searchData.trim() === ''){
                    setUsers(userList);
                }else if(userList.filter(user => user.email.toLowerCase().includes(searchData)) === ''){
                } else{
                    setUsers(userList
                        .filter(user => user
                            .email
                            .toLowerCase()
                            .includes(searchData)));
                }
                break;
        }

    }

    useEffect(() => {
        setUsers(userList);
    }, [userList])

    return(
        <div>
            <Container>
                <Typography variant="h3">
                    Users
                </Typography>
                <Typography variant="h4" sx={{marginBottom:2}}>
                    Search by:
                </Typography>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={buttonsChange}
                    aria-label="Platform"
                    sx={{marginBottom:2}}>
                    <ToggleButton value="Username">Username</ToggleButton>
                    <ToggleButton value="Email">Email</ToggleButton>
                </ToggleButtonGroup>
                <Box
                component="form"
                onSubmit={handleSubmit}>
                    <TextField id="outlined-basic" label="Search" variant="outlined" type='text' onChange={handleChange} sx={{marginRight:1}}/>
                    <Button variant="contained" sx={{height:"55px"}} type="submit">Search</Button>
                </Box>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="right">Username</TableCell>
                                <TableCell align="right">Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users && users.map(user =>( <UserListItem user={user}/>))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
}

export default UserList;