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
        margin: '10px 10px',
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

function EnterUserInfo(props) {
    const [success, setSuccess] = useState(false);
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');

    const classes = useStyles();
    // console.log(props.userInfo)

    const handleSubmit = () => {
        const lastUserId = props.lastUserId
        const infoPack = {
            first_name: firstName,
            last_name: lastName,
            phone1: phone,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode,
            username: username,
            lastUserId: lastUserId,
        }
        props.handleUpdateUserInfo(infoPack)
        setSuccess(true)
      };
      
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
        // console.log("name",e.target.value)
    }
    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
        // console.log("name",e.target.value)
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
        // console.log("name",e.target.value)
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
        // console.log("email",e.target.value)
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value)
        // console.log("message",e.target.value)
    }
    const handleCityChange = (e) => {
        setCity(e.target.value)
        // console.log("message",e.target.value)
    }
    const handleStateChange = (e) => {
        setState(e.target.value)
        // console.log("message",e.target.value)
    }
    const handleZipcodeChange = (e) => {
        setZipcode(e.target.value)
        // console.log("message",e.target.value)
    }
    
    const SuccessText = () => {
        if (success) {
            return (
                <Typography style={{ color: "green" }} variant="h6">Your info is being saved!</Typography>
            )
        } else {
            return (
                <Typography style={{ color: "green" }} variant="h5">Please fill out the following form to get started.</Typography>
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
                        // name='contact'
                        // method='POST'
                        // // data-netlify="true"
                        // action="/"
                        className={classes.form}
                        onSubmit={handleSubmit}
                    >
                        {/* <input type="hidden" name="form-name" value="contact" /> */}
                        <TextField
                            className={classes.TextField}
                            required
                            id="outlined-required"
                            label="user name"
                            value={username}
                            variant="outlined"
                            onChange={handleUsernameChange}
                        />
                        <div style = {{display: 'flex'}}>
                            <TextField
                                className={classes.TextField}
                                required
                                id="outlined-required"
                                label="first name"
                                value={firstName}
                                variant="outlined"
                                onChange={handleFirstNameChange}
                            />
                            <TextField
                                className={classes.TextField}
                                required
                                id="outlined-required"
                                label="last name"
                                value={lastName}
                                variant="outlined"
                                onChange={handleLastNameChange}
                                />
                        </div>
                        <TextField
                            className={classes.TextField}
                            id="outlined-required"
                            label="phone"
                            type="tel"
                            value={phone}
                            variant="outlined"
                            onChange={handlePhoneChange}
                        />
                        <TextField
                            className={classes.TextField}
                            id="outlined-required"
                            label="address"
                            value={address}
                            variant="outlined"
                            onChange={handleAddressChange}
                        />
                        <div style = {{display: 'flex'}}>
                            <TextField
                                className={classes.TextField}
                                id="outlined-required"
                                label="city"
                                value={city}
                                variant="outlined"
                                onChange={handleCityChange}
                            />
                            <TextField
                                className={classes.TextField}
                                id="outlined-required"
                                label="state"
                                value={state}
                                variant="outlined"
                                onChange={handleStateChange}
                                />
                        </div>
                            <TextField
                                className={classes.TextField}
                                id="outlined-required"
                                required
                                label="zipcode"
                                type="address"
                                value={zipcode}
                                variant="outlined"
                                onChange={handleZipcodeChange}
                            />
                        <Button onClick={handleSubmit} >Submit</Button>

                    </form>
                </div>
            </Paper>
        </div>
    )
}

export default EnterUserInfo
