const express = require('express');
const usersController = require('../controllers/users')
const router = express.Router();

router.get('/', usersController.getAllUsers)
router.get('/:id', usersController.getUserInfoByUserName)
router.get('/gardens/:id', usersController.getUserGardenInfo)
router.route('/gardens/create').post(usersController.addNewGarden)
router.route('/gardens/create/beds').post(usersController.addGardenBeds)
router.route('/gardens/create/layout').post(usersController.addGardenLayout)
router.put('/gardens/update/:id/:zone/:width/:length', usersController.updateGarden)
router.delete('/gardens/remove/:id', usersController.removeGarden)
router.route('/create/users').post(usersController.addNewUser)
router.route('/create/contact').post(usersController.addNewUserContact)
router.route('/create/address').post(usersController.addNewUserAddress)
router.route('/create/credentials').post(usersController.addNewUserCreditials)

module.exports = router