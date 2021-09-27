import { Divider, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import {deepPurple } from '@mui/material/colors';
import React from 'react';
import SideDrawer from "./SideDrawer";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';


const useStyle = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    tagline: {
        fontSize: 12,
        textTransform: "uppercase",
        fontWeight: 600,
        padding: "6px 20px",
    },
    profile: {
        display: "flex",
        msFlexDirection: "column",
    }
}))

function Header() {
    const classes = useStyle()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Toolbar >
                <SideDrawer>
                    <IconButton color="inherit" >
                        <MenuIcon />
                    </IconButton>
                </SideDrawer>
                <Typography variant="h5" color="primary" className={classes.title} >E-talim</Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="primary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                <Link
                underline="none"
                        color="text.primary"
                        href="/profile"
                        aria-current="page"
                    >
                       <Avatar  href="/profile" sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                    </Link>
                        
                </IconButton>
            </Toolbar>

            <Divider />
            {/* code of path */}
            <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/quiz"
                    >
                        quiz
                    </Link>
                    <Link
                        underline="hover"
                        color="text.primary"
                        href="/profile"
                        aria-current="page"
                    >
                        Profile
                    </Link>
                </Breadcrumbs>
            </div>

        </div>
    )
}

export default Header
