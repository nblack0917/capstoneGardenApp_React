import React, { useState, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import netlifyIdentity from 'netlify-identity-widget';
import cookie from 'cookie';
import leafLogo from './Leaf_lg.png';

// function to check to see if cookie has loggedIn
// const checkAuth = () => {
//     const cookies = cookie.parse(document.cookie)
//     return cookies["loggedIn"] ? true : false
// }

netlifyIdentity.init()

// Styles for navbar
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
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


// NavBar component with two versions depending on login status
const NavBar = (props) => {
    const history = useHistory();
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [loggedIn, setLoggedIn] =  useState(false);
    // let currentUserInfo = [];

    let loginEmail = '';
    let createdAt = ''

    const handleLoginEmail = () => {
        setEmail(loginEmail)
    }

    const login = () => {
        let createDate = new Date(createdAt);
        let currentDate = new Date();
        let createTime = `${createDate.getUTCHours()}${createDate.getUTCMinutes()}`
        console.log(createTime)
        let currentTime = `${currentDate.getUTCHours()}${currentDate.getUTCMinutes()}`
        console.log(currentTime)
        let compareTimes = parseInt(createTime) - parseInt(currentTime)
        console.log("compareTimes", compareTimes)
        if ( compareTimes < 2 ) {
            document.cookie = "loggedIn=true"
            props.enableLogin();
            props.updateUserName(loginEmail);
            props.updateEmail(loginEmail);
            history.push('/get_started')
        } else {
            document.cookie = "loggedIn=true"
            props.enableLogin();
            props.updateUserName(loginEmail);
            props.fetchUserbyUserName(loginEmail)
            history.push('/home')
        }
    }

    const setLogOut = () => {
        props.updateUserName("")
        props.disableLogin();
        // props.resetUserInfo();
        logout();
    }
    
    const logout = () => {
        document.cookie = "loggedIn=false;max-age=1"
        console.log(document.cookie)
        history.push('/') 
    }

    const handleClick = () => {
        netlifyIdentity.open()
        netlifyIdentity.on("login", user => {
            console.log(user)
            console.log("email: ", user.email)
            console.log("created At", user.created_at)
            createdAt= user.created_at;
            // console.log("name: ", user.user_metadata.full_name)
            loginEmail = user.email
            handleLoginEmail()
            login();
        })
        netlifyIdentity.on("logout", user => {
            console.log(user)
            // console.log("email: ", user.email)
            // console.log("name: ", user.user_metadata.full_name)
            // loginEmail = user.email
            props.resetUserInfo();
            setLogOut()
        })
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
                                garden plan(ter)
                            </Link>
                        </Typography>
                        <Link to="/plants" style={{textDecoration: 'none'}}>
                            <Button color="inherit" className={classes.linkStyle}>Plants</Button>
                        </Link>
                            <Button color="inherit" className={classes.linkStyle} onClick={handleClick} >Log In</Button>

                        {/* <Link to="/login" style={{textDecoration: 'none'}}>
                            <Button color="inherit" className={classes.linkStyle}>Log In</Button>
                        </Link> */}
                        <Link to="/contact" style={{textDecoration: 'none'}}>
                            <Button color="inherit" className={classes.linkStyle}>Contact</Button>
                        </Link>
                            <Button onClick={handleClick} variant="contained" className={classes.buttonStyle}>Get Started</Button>
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
                        <Link to="/home" style={{textDecoration: 'none'}}>
                            <Button color="inherit" className={classes.linkStyle}>Dashboard</Button>
                        </Link>
                        <Link to="/user_plants" style={{textDecoration: 'none'}}>
                            <Button color="inherit" className={classes.linkStyle}>Plants</Button>
                        </Link>
                        <Link to="/my_calendar" style={{textDecoration: 'none'}}>
                            <Button color="inherit" className={classes.linkStyle}>Calendar</Button>
                        </Link>
                        <Link to="/contact" style={{textDecoration: 'none'}}>
                            <Button color="inherit" className={classes.linkStyle}>Contact</Button>
                        </Link>
                            {/* <Button color="inherit" className={classes.linkStyle} onClick={ () => logOutAuth() }>Log Out</Button> */}
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <Button color="inherit" className={classes.linkStyle} onClick={handleClick}>Log Out</Button>
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
