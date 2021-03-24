const express = require('express');
const lastUserController = require('../controllers/lastUser')
const router = express.Router();

router.get('/', lastUserController.getLastUserId)

module.exports = router