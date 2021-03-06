const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');

const getAllUsers = (req, res) => {
    pool.query('SELECT * FROM gardenBeds', 
        (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows)
    })
}

const getUserInfoByUserName = (req, res) => {
    sqlQuery= `SELECT users.id,
            users.first_name,
            users.last_name,
            usersContact.phone1,
            usersContact.phone2,
            usersContact.email,
            usersAddress.address,
            usersAddress.city,
            usersAddress.county,
            usersAddress.state,
            usersAddress.zip,
            usersCredentials.username,
            usersCredentials.password
        FROM users
            JOIN usersContact ON usersContact.user_id=users.id
            JOIN usersAddress ON usersAddress.user_id=users.id
            JOIN usersCredentials ON usersCredentials.user_id=users.id
        WHERE usersCredentials.username = ?`
        sqlQuery = mysql.format(sqlQuery, [req.params.id]);

        pool.query(sqlQuery, (err, rows) => {
            if (err) return handleSQLError(res, err);
            return res.json(rows);
        })
}

// const getBedsById = (req, res) => {
//     sqlQuery = 'SELECT * FROM gardenBeds WHERE ??=?';
//     sqlQuery = mysql.format(sqlQuery, ['bed_id', req.params.id]);

//     pool.query(sqlQuery, (err, rows) => {
//         if (err) return handleSQLError(res, err);
//         return res.json(rows);
//     })
// }

module.exports = {
    getAllUsers,
    getUserInfoByUserName
}