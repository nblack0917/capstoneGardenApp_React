const express = require('express');
const usersController = require('../controllers/users')
const router = express.Router();

router.get('/', usersController.getAllUsers)
router.get('/:id', usersController.getUserInfoByUserName)
router.get('/gardens/:id', usersController.getUserGardenInfo)
router.route('/gardens/create').post(usersController.addNewGarden)
router.route('/gardens/create/beds').post(usersController.addGardenBeds)
router.route('/gardens/create/layout').post(usersController.addGardenLayout)
// router.post('/gardens/create/', usersController.addNewGarden)
router.put('/gardens/update/:id/:zone/:width/:length', usersController.updateGarden)
router.delete('/gardens/remove/:id', usersController.removeGarden)

module.exports = router