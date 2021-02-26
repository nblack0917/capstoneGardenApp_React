const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');

const getAllBeds = (req, res) => {
    pool.query('SELECT * FROM gardenBeds', 
        (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows)
    })
}

const getBedsById = (req, res) => {
    sqlQuery = 'SELECT * FROM gardenBeds WHERE ??=?';
    sqlQuery = mysql.format(sqlQuery, ['bed_id', req.params.id]);

    pool.query(sqlQuery, (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows);
    })
}

module.exports = {
    getAllBeds,
    getBedsById
}