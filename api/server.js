const express = require('express');
const plantsRouter = require('./routes/plants')
const gardenRouter = require('./routes/gardens')
const bedsRouter = require('./routes/beds')
const usersRouter = require('./routes/users')
const lastBedRouter = require('./routes/lastBed')
const lastGardenRouter = require('./routes/lastGarden')
const lastUserRouter = require('./routes/lastUser')
const { logger } = require('./middleware')
var cors = require("cors");

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(logger);
app.use('/plants', plantsRouter);
app.use('/gardens', gardenRouter);
app.use('/beds', bedsRouter);
app.use('/last_bed', lastBedRouter);
app.use('/last_garden', lastGardenRouter);
app.use('/last_user', lastUserRouter);
app.use('/users', usersRouter);


app.get('/', (req, res) => {
    res.send('Welcome to my Newly UPDATED Garden App!')
  })
  
  module.exports = app;