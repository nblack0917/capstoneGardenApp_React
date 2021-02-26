import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import cookie from 'cookie'
import leafLogo from './Leaf_lg.png'

//Logout function to change cookie and redirect to login page


// function to check to see if cookie has loggedIn
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

// Styles for navbar
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    // menuButton: {
    //     marginRight: theme.spacing(3),
    // },
    title: {
        flexGrow: 1,
        fontWeight: 300,
        color: '#009344',
        textAlign: 'left',
        fontSize: 32,
    },
    appBar: {
        background: '#F7F5ED',
        zIndex: 1,
        boxShadow: 'none',
        paddingTop: 20,
    },
    // loginBar: {
    //     zIndex: 0,
    //     background: "linear-gradient(0deg, rgba(217,217,217,1) 59%, rgba(166,166,166,1) 100%)",
    //     height: 25,
    // },
    loginType: {
        fontSize: 14,
        color: '#808080',
        position: 'relative',
        top: -20,
        left: 0,
    },
    linkStyle: {
        color: "#009344",
        fontWeight: 400,
        fontSize: 18,
        marginLeft: 20,
        '&:hover': {
            background: "#8CC63E",
            color: "white"
        }
    },
    buttonStyle: {
        backgroundColor: "#009344",
        color: "white",
        fontWeight: 300,
        marginLeft: 20,
        fontSize: 18,
        borderRadius: 10,
        "&:hover": {
            backgroundColor: "#009344",
            opacity: "0.7"
        }
    },
    logoStyle: {
        height: 50,
        paddingBottom: 20,
        margin: 0,
    }
}));

// adding style a different way for the links
const linkStyle = {
    color: "#009344",
    fontWeight: 400,
    fontSize: 18,
    marginLeft: 20,
}
const buttonStyle = {
    backgroundColor: "#009344",
    color: "white",
    fontWeight: 300,
    marginLeft: 20,
    fontSize: 18,
}

// NavBar component with two versions depending on login status
const NavBar = (props) => {
    const history = useHistory();
    const [loggedIn, setLoggedIn] =  useState(false);

    const logout = () => {
        document.cookie = "null;max-age=1"
        history.push('/')
        
    }
    
    const setLogin = () => {
        props.updateUserName("")
        props.disableLogin();
        logout();
    }
    
    useEffect(() => {
        if (!props.loggedIn) {
            setLoggedIn(false)
        } else {
            setLoggedIn(true)
        }
    })
    
    const classes = useStyles();
    if(!loggedIn) {
        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <img src={leafLogo} alt="Logo" className={classes.logoStyle} />
                        </Link>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/" style={{textDecoration: 'none', color: "#009344"}}>
                                garden app
                            </Link>
                        </Typography>
                        <Link to="/plants" style={{textDecoration: 'none'}}>
                            <Button color="inherit" className={classes.linkStyle}>Plants</Button>
                        </Link>
                        <Link to="/login" style={{textDecoration: 'none'}}>
                            <Button color="inherit" className={classes.linkStyle}>Log In</Button>
                        </Link>
                        <Link to="/contact" style={{textDecoration: 'none'}}>
                            <Button color="inherit" className={classes.linkStyle}>Contact</Button>
                        </Link>
                        <Link to="/get_started" style={{textDecoration: 'none'}}>
                            <Button  variant="contained" className={classes.buttonStyle}>Get Started</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        );
    } else {
        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <Link to="/home" style={{textDecoration: 'none'}}>
                            <img src={leafLogo} alt="Logo" className={classes.logoStyle} />
                        </Link>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/home" style={{textDecoration: 'none', color: "#009344"}}>
                                garden app
                            </Link>
                        </Typography>
                        <Link to="/plants" style={{textDecoration: 'none'}}>
                            <Button color="inherit" className={classes.linkStyle}>Plants</Button>
                        </Link>
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <Button color="inherit" className={classes.linkStyle}>Calendar</Button>
                        </Link>
                        <Link to="/contact" style={{textDecoration: 'none'}}>
                            <Button color="inherit" className={classes.linkStyle}>Contact</Button>
                        </Link>
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <Button color="inherit" className={classes.linkStyle} onClick={setLogin}>Log Out</Button>
                        </Link>
                        <Link to="/my_gardens" style={{textDecoration: 'none'}}>
                            <Button  variant="contained" className={classes.buttonStyle}>My Gardens</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default NavBar;
