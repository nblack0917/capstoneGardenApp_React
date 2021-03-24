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
                    <div className="welcomeText">
                        <p>Welcome to garden plant(ter). An app made to help you build and plan your garden.</p>
                        <p>Many people find that managing a garden can be a lot more work than they expected. Problems like poorly timed plantings, overcrowding, and improper plant maintenance are some of the most common problems even experienced gardeners face. How many times have you heard (or said), "everything kill everything I try to grow."  It's time to make that phrase outdated.</p>
                        <p>Using garden plant(ter) you will be able to do various tasks to plan your garden space for the best results. First you'll define your gardens space which can be anything from your backyard to a shelf in your kitchen. Then add a list of your pots, planters, and garden beds. You can even arrange them in your garden to match what you have or try out new arrangements without having to lift heavy pots. From there, you can choose what plants you wish to grow and add them to you garden. You will even get a calendar of events to help you know when to sow, transplant or harvest your plants.</p>
                        <p>With these tools at your disposal, even a first-time gardener can manage a garden to success. Click get started at the top to build your first garden plan(ter).</p>
                        {/* <div className="welcomeButtons">
                            <Button variant="contained" className={classes.buttonStyle}>Get Started</Button>  or <Link to="/login" style={{textDecoration: 'none'}}>
                                <Button className={classes.linkStyle}>Log In</Button>
                                </Link>
                        </div> */}
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
