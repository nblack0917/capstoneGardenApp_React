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

const addGardenPlants = (req, res) => {
    let newPlants = [];
    const plantsArray = req.body;
    console.log("plantsArray", plantsArray)
    for (let bedId in plantsArray) {
        console.log("key", bedId)
        for (let plants of plantsArray[bedId]) {
            console.log("plants", plants)
            let bedId = parseInt(plants.bed_id);
            let varName = plants.variety_name
            let newPlant = [bedId, varName]
            newPlants.push(newPlant)
        }
    }

    sqlQuery=`INSERT INTO gardenPlants (bed_id, plant_variety) VALUES ?;`

    pool.query(sqlQuery, [newPlants], (err, result, fields) => {
        if (err) return handleSQLError(res, err);
        console.log("Number of Rows Affected: ", result.affectedRows)
    })
    res.end()
}

module.exports = {
    getAllBeds,
    getBedsById,
    addGardenPlants,
}