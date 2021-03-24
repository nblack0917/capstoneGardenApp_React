const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');


const getLastUserId = (req,res) => {
    pool.query(`SELECT id FROM users
	    ORDER BY id DESC
        LIMIT 1;`,
    (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows[0].id);
    })
}

module.exports = {
    getLastUserId,
}