const express = require('express');
const lastBedController = require('../controllers/lastBed')
const router = express.Router();

router.get('/', lastBedController.getLastGardenBedId)

module.exports = router