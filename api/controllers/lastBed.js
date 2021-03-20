const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');


const getLastGardenBedId = (req,res) => {
    pool.query(`SELECT bed_id FROM gardenBeds
        ORDER BY bed_id DESC
        LIMIT 1`,
    (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows[0].bed_id);
    })
}

module.exports = {
    getLastGardenBedId,
}