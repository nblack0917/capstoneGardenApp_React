const express = require('express');
const bedsController = require('../controllers/beds')
const router = express.Router();

router.get('/', bedsController.getAllBeds)
router.get('/id/:id', bedsController.getBedsById)
router.route('/create/gardenPlants').post(bedsController.addGardenPlants)

module.exports = router