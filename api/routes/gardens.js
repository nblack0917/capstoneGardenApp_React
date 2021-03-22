const express = require('express');
const gardensController = require('../controllers/gardens')
const router = express.Router();

router.get('/', gardensController.getAllGardens)
router.get('/user/:id', gardensController.getAllGardenPlantsByUserId)
router.get('/id/:id', gardensController.getGardensByUserId)
router.route('/layout/:id').get(gardensController.getGardenBedsLayoutByUserId)

module.exports = router