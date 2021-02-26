const express = require('express');
const gardensController = require('../controllers/beds')
const router = express.Router();

router.get('/', gardensController.getAllBeds)
router.get('/id/:id', gardensController.getBedsById)

module.exports = router