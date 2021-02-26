const express = require('express');
const plantsController = require('../controllers/plants')
const router = express.Router();

router.get('/', plantsController.getAllPlants)
router.get('/id/:id', plantsController.getPlantById)
router.get('/plantTypes', plantsController.getAllPlantyByType)

module.exports = router