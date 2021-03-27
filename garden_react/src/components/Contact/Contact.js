import React, { useState , useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import PortraitImg from './portrait.png'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import 'fontsource-roboto';
import './Contact.css'

const useStyles = makeStyles((theme) => ({
    paper: {
    margin: theme.spacing(8),
    width: theme.spacing(70),
    height: theme.spacing(80),
    },
    formContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        marginTop: 20,
        width: '100%',
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextField: {
        margin: '10px 0',
        width: '60%',
    },
    textarea: {
        width: '80%',
        marginTop: 40,
    },
    linkStyle: {
        color: "#009344",
        fontWeight: 400,
        fontSize: 18,
        marginLeft: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '&:hover': {
            background: "#8CC63E",
            color: "white"
        }
    },
  }));

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

function Contact(props) {
    const [success, setSuccess] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const classes = useStyles();
    // console.log(props.userInfo)

    const handleSubmit = e => {
        // let dataPack = { "name": name, "email": email, "message": message }
        // console.log("dataPack", dataPack)
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", "name": name, "email": email, "message": message })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));

          setSuccess(true)
  
        e.preventDefault();
      };
      
    const handleNameChange = (e) => {
        setName(e.target.value)
        console.log("name",e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        console.log("email",e.target.value)
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value)
        console.log("message",e.target.value)
    }
    
    const SuccessText = () => {
        if (success) {
            return (
                <Typography style={{ color: "green" }} variant="h6">Thanks for your message!</Typography>
            )
        } else {
            return (
                <Typography style={{ color: "green" }} variant="h5">Please feel free to send feedback.</Typography>
            )
        }
    }

    useEffect(() => {
        setSuccess(false)
      }, []);

    return (
        <div className="userHomeBody">
            <div className="contactContainer">
                <Paper className={classes.paper}>
                    <div className="aboutContainer">
                        <Typography variant="h4">About the developer</Typography>
                        <img src={PortraitImg} alt="portrait of the developer" />
                        <Typography variant="p">This site was developed by Nick Black. I am a recent graduate of Austin Coding Academy with a Full Stack Web Developer Certificate. If you have any questions or would like to reach out to me, please feel free to use the contact form or find me through the following links.</Typography>
                        <div className="linkIcons">
                            <Link to="/git" style={{textDecoration: 'none'}}>
                                <div className="icons" className={classes.linkStyle}>
                                        <GitHubIcon fontSize="large" />
                                        <h5>Github</h5>
                                </div>
                            </Link>
                            <Link to="/linkedin" style={{textDecoration: 'none'}}>
                                <div  className={classes.linkStyle}>
                                    <LinkedInIcon fontSize="large" />
                                    <h5>LinkedIn</h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Paper>
                <Paper className={classes.paper}>
                    <div className={classes.formContainer}>
                        <SuccessText />
                        <form
                            name='contact'
                            method='POST'
                            // data-netlify="true"
                            action="/"
                            className={classes.form}
                            onSubmit={handleSubmit}
                        >
                            {/* <input type="hidden" name="form-name" value="contact" /> */}
                            <TextField
                                className={classes.TextField}
                                required
                                id="outlined-required"
                                label="name"
                                value={name}
                                variant="outlined"
                                onChange={handleNameChange}
                            />
                            <TextField
                                className={classes.TextField}
                                required
                                id="outlined-required"
                                label="email"
                                type="email"
                                value={email}
                                variant="outlined"
                                onChange={handleEmailChange}
                            />
                            <TextField
                                className={classes.textarea}
                                id="outlined-multiline-static"
                                multiline
                                rows={8}
                                label="Please let me know what you think of my app or any plant varieties you'd like to see in the future."
                                value={message}
                                variant="outlined"
                                onChange={handleMessageChange}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </div>
                </Paper>
            </div>
        </div>
    )
}

export default Contact
