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
    Typography,
    Select,
    FormControl,
    InputLabel,
    MenuItem
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

    const [age, setAge] = React.useState('');

    const selectChange = (event) => {
        setAge(event.target.value);
    };

    return(
        <div>
            <Container>
                <Typography variant="h3">
                    Users
                </Typography>
                <Typography variant="h5" sx={{marginBottom:2}}>
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
                <Typography variant="h5" sx={{marginBottom:2}}>
                    Sort by:
                </Typography>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={selectChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <Box
                component="form"
                onSubmit={handleSubmit}>
                    <TextField id="outlined-basic" label="Search" variant="outlined" type='text' onChange={selectChange} sx={{marginRight:1}}/>
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