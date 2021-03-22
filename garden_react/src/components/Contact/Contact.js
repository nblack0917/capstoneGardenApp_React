import React, { useState , useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
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

function Contact(props) {
    // const [success, setSuccess] = useState(false);
    const classes = useStyles();
    console.log(props.userInfo)

    // useEffect(() => {
    //     if ( window.location.search.includes('success=true') ) {
    //       setSuccess(true);
    //     }
    //   }, []);

    return (
        <div className="userHomeBody">
            <Paper className={classes.paper}>
                <div className={classes.formContainer}>
                    <Typography variant="h5">Please feel free to send feedback.</Typography>
                    {success && (
                        <p style={{ color: "green" }}>Thanks for your message! </p>
                    )}
                    <form
                        name='contact'
                        method='POST'
                        data-netlify="true"
                        action="/"
                        className={classes.form}
                    >
                        <TextField
                            className={classes.TextField}
                            required
                            id="outlined-required"
                            label="Name"
                            defaultValue=""
                            variant="outlined"
                        />
                        <TextField
                            className={classes.TextField}
                            required
                            id="outlined-required"
                            label="email"
                            type="email"
                            defaultValue=""
                            variant="outlined"
                        />
                        <TextField
                            className={classes.textarea}
                            id="outlined-multiline-static"
                            multiline
                            rows={8}
                            label="Please let me know what you think of my app or any plant varieties you'd like to see in the future."
                            defaultValue=""
                            variant="outlined"
                        />
                        <Button type="submit">Submit</Button>

                    </form>
                </div>
            </Paper>
        </div>
    )
}

export default Contact
