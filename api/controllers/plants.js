const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');

const getAllPlants = (req, res) => {
    pool.query('SELECT * FROM plantVarieties', (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows)
    })
}

const getAllPlantyByType = (req, res) => {
    pool.query(`SELECT 
	plantParents.plantParent_id,
	plantTypes.plantGroupName,
    plantParents.plantParent_name,
    plantVarieties.id AS variety_id,
    plantVarieties.variety_name,
    plantVarieties.variety_description
FROM plantTypes
JOIN plantParents ON plantParents.plantGroup_id=plantTypes.plantGroupName
JOIN plantVarieties ON plantVarieties.plantParent_id=plantParents.plantParent_id`,
    (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows)
    })
}

const getPlantById = (req, res) => {
    sqlQuery = `SELECT * FROM ?? WHERE ??=?`;
    sqlQuery = mysql.format(sqlQuery, ['plantVarieties', 'id', req.params.id]);

    pool.query(sqlQuery, (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows);
    })
}

module.exports = {
    getAllPlants,
    getPlantById,
    getAllPlantyByType
}