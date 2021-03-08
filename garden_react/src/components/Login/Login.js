import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import { useHistory } from 'react-router-dom'
import {
    TextField,
    Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import './Login.css'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '35ch',
        },
    },
    buttonStyle: {
        backgroundColor: "#009344",
        color: "white",
        fontWeight: 300,
        marginTop: 15,
        fontSize: 18,
        borderRadius: 20,
        "&:hover": {
            backgroundColor: "#009344",
            opacity: "0.7"
        }
    },
}));

const Login = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasName, setHasName] = useState(false)
    const [hasPass, setHasPass] = useState(false)

    // console.log(props.loggedIn)

    const login = (e) => {
        e.preventDefault()
        document.cookie = "loggedIn=true"
        props.enableLogin();
        history.push('/home')
    }

    const handleUserChange = (e) => {
        setEmail(e.target.value)
        if(hasName) {
            setHasName(!hasName)
        }
    }
    
    const handlePassChange = (e) => {
        setPassword(e.target.value)
        if(hasPass) {
            setHasPass(!hasPass)
        }
    }

    const checkLogin = () => {
        if(!email || ! password) {
            if(!email) {
                setHasName(!hasName)
            }
            if(!password) {
                setHasPass(!hasPass)
            }
        }else if(email && password) {  
            props.updateUserName(email);
            props.fetchUserbyUserName(email)
        }
    }

    

    return (
    <div className="loginBody">
        <Card className="loginCard">
        <h2 style={{textAlign: 'center', color: '#009344'}}>Please Log In</h2>
        <form className={classes.root}
        onSubmit={login}
        >
            <div>
                <TextField
                    required
                    error={hasName}
                    id="userName"
                    value={email}
                    onChange={handleUserChange}
                    name="username"
                    label="Username"
                    type="text"
                    variant="outlined"
                    className="textField"/>
            </div>
            <div>
                <TextField
                    required
                    error={hasPass}
                    id="password"
                    value={password}
                    onChange={handlePassChange}
                    name="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    className="textField"/>
            </div>
            <div>
                <Button
                    type="submit"
                    className={classes.buttonStyle}
                    variant="contained"
                    color="default"
                    onClick={checkLogin}>
                Login
                </Button>
            </div>
        </form>
        </Card>
    </div>
    );
}

export default Login;
