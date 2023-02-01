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
    const [sortOption, setSortOption] = useState(0);

    const handleChange = e => {
        setSearchData(e.target.value.toLowerCase());
    }

    const buttonsChange = (event, newAlignment) => {
        setAlignment(newAlignment);
        setFilterData(newAlignment);
    };

    const handleSubmit = e => {
        e.preventDefault();

        let filteredUsers = userList.filter(user => {
            const value = filterData === 'Username' ? user.username : user.email;
            return value.toLowerCase().includes(searchData.trim().toLowerCase());
        });

        switch(sortOption){
            case 2:
                filteredUsers = filteredUsers.sort((a, b) => a.username.localeCompare(b.username));
                break;
            case 3:
                filteredUsers = filteredUsers.sort((a, b) => a.email.localeCompare(b.email));
                break;
            default:
                filteredUsers = filteredUsers.sort((a, b) => a.id - b.id);
        }

        setUsers(searchData.trim() === '' ? userList : filteredUsers);
    };

    useEffect(() => {
        setUsers(userList);
    }, [userList])

    const optionChange = (e) => {
        e.preventDefault();
        setSortOption(e.target.value);
    }

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
                    <InputLabel id="demo-simple-select-label">Options</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sortOption}
                        label="Age"
                        onChange={optionChange}
                        sx={{marginBottom:2}}
                    >
                        <MenuItem value={1}>Id</MenuItem>
                        <MenuItem value={2}>Username</MenuItem>
                        <MenuItem value={3}>User Email</MenuItem>
                    </Select>
                </FormControl>
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