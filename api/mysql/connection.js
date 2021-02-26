const mysql = require('mysql')
require('dotenv').config()

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql connection...')

      const config = {
        connectionLimit : 10,
        host            : process.env.DB_HOSTNAME,
        user            : process.env.DB_USERNAME,
        password        : process.env.DB_PASSWORD,
        database        : process.env.DB_DATABASENAME
      }

      // if (process.env.NODE_ENV === 'production' && process.env.CLOUD_INSTANCE) {
      //   console.log(`connect socket: ${process.env.CLOUD_INSTANCE}`)
      //   config.socketPath = `/cloudsql/${process.env.CLOUD_INSTANCE}`
      // }

      this.pool = mysql.createPool(config)

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;