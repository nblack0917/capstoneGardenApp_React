const jwt = require('jsonwebtoken')

const logger = (req, res, next) => {
    console.log(`${req.path} ${new Date().toISOString()}`)
    next()
}

module.exports = {
    logger
}