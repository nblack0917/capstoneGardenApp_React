import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import veggiePlaceholder from './veggie_placeholder_wide.png'

const useStyles = makeStyles({
  root: {
    width: 325,
    marginBottom: 50,
  },
  media: {
    height: 200,
  },
  foot: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  }
});

export default function PlantCard(props) {
  const classes = useStyles();
  const thisPlant = props.plant
  let currentIndex = props.index

 const handleAddToList = (index, plantGroupName) => {
     let results = []
    //  console.log(index);
    //  console.log(plantGroupName)
    results.push(index);
    results.push(plantGroupName);
     props.handleClick(results)
 }

  if(props.loggedIn) {
    return (
      <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={veggiePlaceholder}
            title="placeholder plant"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {thisPlant.variety_name}
            </Typography>
          </CardContent>
        <CardActions className={classes.foot}>
          <Button size="small" color="primary" onClick={() => handleAddToList(currentIndex, thisPlant.plantGroupName)}>
        <ControlPointIcon color="primary" style={{cursor: "pointer"}}  />
          Add to List
          </Button>
          <Link to={`/plant/${thisPlant.variety_id}`} size="small" color="primary">
            Learn More
          </Link>
        </CardActions>
      </Card>
    );
  } else {
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={veggiePlaceholder}
            title="placeholder plant"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {thisPlant.variety_name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/plant/${thisPlant.variety_id}`} size="small" color="primary">
            Learn More
          </Link>
        </CardActions>
      </Card>
    );
  }
}
