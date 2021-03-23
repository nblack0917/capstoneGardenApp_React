import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import CardMedia from '@material-ui/core/CardMedia';
import './UserHome.css'
import garden1 from './gardenPlaceholder_1.png'
import garden2 from './gardenPlaceholder_2.png'
import leaf from './Leaf.png'
import leaf2 from './Leaf_2.png'
import calendarPlace from './calendarPlaceholder.png'
import clockPlace from './clockPlaceholder.png'
import { fetchUserGardensById } from '../../redux/actions';

function UserHome(props) {
    const history = useHistory();

    const handleMyPlantsClick = () => {
        history.push('/my_plants')
    }
    const handleMyGardensClick = () => {
        // const userID = props.userInfo.id
        // props.fetchUserGardensById(userID)
        history.push('/my_gardens')
    }
    const handleMyCalendarClick = () => {
        history.push('/my_calendar')
    }

    const getGardenLayout = async () => {
        let userID = props.userInfo.id
    
        axios.get(`http://localhost:8080/gardens/layout/${userID}`)
          .then((res) => {
            props.getAllUserGardenBeds(res.data)
          }).catch((error) => console.log(error))
      }
    
    // console.log("user info state", props.userInfo)

    useEffect(() => {
        const userID = props.userInfo.id;
        // console.log("userID", userID);
        getGardenLayout();
        props.fetchUserGardensById(userID);
    }, [])

    return (
        <div className="userHomeBody">
            <h1>Welcome {props.userName ? props.userName : "Gardener"}</h1>
            <Card className="homeCard">
            <CardActionArea onClick={handleMyPlantsClick}>
                    <CardContent className="cardContent">
                        <img src={leaf} alt="Logo" />
                        <Typography variant="h2">My Plants</Typography>
                        <img src={leaf2} alt="Logo" />
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className="homeCard">
                <CardActionArea onClick={handleMyGardensClick}>
                    <CardContent className="cardContent">
                        <img src={garden1} alt="Logo" />
                        <Typography variant="h2">My Gardens</Typography>
                        <img src={garden2} alt="Logo" />
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className="homeCard">
            <CardActionArea onClick={handleMyCalendarClick}>
                    <CardContent className="cardContent">
                        <img src={calendarPlace} alt="Logo" />
                        <Typography variant="h2">My Calendar</Typography>
                        <img src={clockPlace} alt="Logo" />
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default UserHome
