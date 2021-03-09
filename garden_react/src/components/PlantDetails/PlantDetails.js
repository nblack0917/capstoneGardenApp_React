import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import veggiePlaceholder from '../PlantCard/veggie_placeholder_wide.png'
import './PlantDetails.css'

const useStyles = makeStyles({
    root: {
      width: 500,
      marginBottom: 50,
    },
    media: {
      height: 400,
    },
  });
  

const PlantDetails = (props) => {
    const history = useHistory();
    const { id } = useParams();
    // console.log(id)
    const selectPlant = props.allPlantsByType.filter(plant => plant.variety_id === parseInt(id));
    const specificPlant = selectPlant[0];
    // console.log(specificPlant)
    const classes = useStyles();

    const handleClick = () => {
        history.push('/user_plants')
    }
    
    return (
        <div className="userHomeBody">
            <Card className={classes.root} onClick={handleClick}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={veggiePlaceholder}
                  title="placeholder plant"
                />
                <CardContent>
                  <Typography gutterBottom variant="h2" component="h2">
                    {specificPlant.variety_name}
                  </Typography>
                  <Typography gutterBottom variant="p" component="p">
                    {specificPlant.variety_description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </div>
      );
}

export default PlantDetails
