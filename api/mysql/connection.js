const mysql = require('mysql')
require('dotenv').config()

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql connection...')

      const config = {
        connectionLimit     : 10,
        host                : process.env.DB_HOSTNAME || "database-1.cg3klvzeeefs.us-east-2.rds.amazonaws.com",
        user                : process.env.DB_USERNAME || "admin",
        password            : process.env.DB_PASSWORD || "Cleo16905!",
        database            : process.env.DB_DATABASENAME || "admin",
        multipleStatements  : true,
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