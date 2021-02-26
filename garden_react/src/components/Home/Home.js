import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import PlantPic from './plant.png'
import './Home.css'

const useStyles = makeStyles((theme) => ({
    buttonStyle: {
        backgroundColor: "#009344",
        color: "white",
        fontWeight: 300,
        marginRight: 10,
        fontSize: 18,
        borderRadius: 20,
        "&:hover": {
            backgroundColor: "#009344",
            opacity: "0.7"
        }
    },
    linkStyle: {
        textDecoration: 'none',
        color: "#009344",
        fontWeight: 300,
        fontSize: 18,
        '&:hover': {
            background: "#8CC63E",
            color: "white"
        }
    },
}));

function Home(props) {
    const classes = useStyles();
    return (
        <div className="homeBody">
            <section className="container">
                <div className="welcome">
                    <h1>Build Your Garden And Grow It!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="welcomeButtons">
                        <Button variant="contained" className={classes.buttonStyle}>Get Started</Button>  or <Link to="/login" style={{textDecoration: 'none'}}>
                            <Button className={classes.linkStyle}>Log In</Button>
                            </Link>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="plantArt">
                    <div className="tableTop">
                        <img src={PlantPic} alt="Plant Art" className="plantPic" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
