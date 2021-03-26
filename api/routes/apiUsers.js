// const express = require('express');
const usersController = require('../controllers/users')

var ApiBuilder = require('claudia-api-builder'),
	api = new ApiBuilder();
module.exports = api;

api.get('/', usersController.getAllUsers)
api.get('/:id', usersController.getUserInfoByUserName)
api.get('/gardens/:id', usersController.getUserGardenInfo)
api.post('/gardens/create', (request) => {
    
    return usersController.addNewGarden
})
// api.route('/gardens/create/beds').post(usersController.addGardenBeds)
// api.route('/gardens/create/layout').post(usersController.addGardenLayout)
// api.put('/gardens/update/:id/:zone/:width/:length', usersController.updateGarden)
// api.delete('/gardens/remove/:id', usersController.removeGarden)
api.post('/create/users', (request) => {
    
    return usersController.addNewUser
})
// api.route('/create/contact').post(usersController.addNewUserContact)
// api.route('/create/address').post(usersController.addNewUserAddress)
// api.route('/create/credentials').post(usersController.addNewUserCreditials)

// module.exports = router