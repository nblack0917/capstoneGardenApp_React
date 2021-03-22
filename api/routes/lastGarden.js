const express = require('express');
const lastGardenController = require('../controllers/lastGarden')
const router = express.Router();

router.get('/', lastGardenController.getLastGardenId)

module.exports = router