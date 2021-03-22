const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');


const getLastGardenId = (req,res) => {
    pool.query(`SELECT garden_id FROM userGardens
	ORDER BY garden_id DESC
    LIMIT 1;`,
    (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows[0].garden_id);
    })
}

module.exports = {
    getLastGardenId,
}