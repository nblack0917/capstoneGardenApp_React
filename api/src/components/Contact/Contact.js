import React, { useState , useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import 'fontsource-roboto';

const useStyles = makeStyles((theme) => ({
    paper: {
    margin: theme.spacing(1),
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
    }
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
    )
}

export default Contact
