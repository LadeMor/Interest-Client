import React, {useState} from "react";
import {Link} from "react-router-dom";
import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
Menu} from '@mui/material';

function AppPanel(){

    const [tabs, setTabs] = useState([
        {
            id: 1,
            label: "Main",
            value: "/",
            path: "/"
        },
        {
            id: 2,
            label: "Registration",
            value: "/registration",
            path: "/registration"
        },
        {
            id: 3,
            label: "Login",
            value: "/login",
            path: "/login"
        }
    ]);

    const [setting, setSetting] = useState([
        {
            id: 1,
            label: "Account",
            value: "/user",
            path: "/user"
        },
        {
            id: 2,
            label: "Admin page",
            value: "/admin",
            path: "/admin"
        },
    ]);

    const exitFromAccount = () => {
        let userSure = window.confirm("Are you sure you want to log out of your account?");
        if(userSure){
            localStorage.setItem('isUserLogin', "false");
            localStorage.setItem('UserId', '');
            localStorage.setItem('Username', '');
            localStorage.setItem('UserPassword', '');
            localStorage.setItem('UserEmail', '');
            localStorage.setItem('UserDescription', '');
            localStorage.setItem('UserRoleId', '');
            window.location.replace("/");
        }
    };

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const userPhoto = localStorage.getItem("UserProfilePhoto") === '' ? '' : localStorage.getItem("UserProfilePhoto");

    return(
        <>
        <header>
            <AppBar position="static"
                      sx={{marginBottom:2}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            INTEREST
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {tabs.map((tab) => (
                                    <MenuItem key={tab.id} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{tab.label}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {tabs.map((tab) => (
                                <Button
                                    key={tab.id}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    <Link to={`${tab.path}`} style={{color: "white"}}>{tab.label}</Link>
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src={userPhoto} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {setting.map((setting) => (
                                    <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                                        <Link to={`${setting.path}`} style={{color: "black"}}>
                                            <Typography textAlign="center">{setting.label}</Typography>
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    </>);
}

export default AppPanel;