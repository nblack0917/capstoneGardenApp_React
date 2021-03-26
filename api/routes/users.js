const express = require('express');
const usersController = require('../controllers/users')
const router = express.Router();

router.get('/', usersController.getAllUsers)
router.get('/:id', usersController.getUserInfoByUserName)
router.get('/gardens/:id', usersController.getUserGardenInfo)
router.post('/gardens/create', usersController.addNewGarden)
router.post('/gardens/create/beds', usersController.addGardenBeds)
router.post('/gardens/create/layout', usersController.addGardenLayout)
router.put('/gardens/update/:id/:zone/:width/:length', usersController.updateGarden)
router.delete('/gardens/remove/:id', usersController.removeGarden)
router.post('/create/users', usersController.addNewUser)
router.post('/create/contact', usersController.addNewUserContact)
router.post('/create/address', usersController.addNewUserAddress)
router.post('/create/credentials', usersController.addNewUserCreditials)

module.exports = router