const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');

const getAllGardens = (req, res) => {
    pool.query('SELECT users.id, users.first_name, users.last_name, userGardens.garden_id, gardenBeds.bed_id, plantTypes.plantGroupName, plantParents.plantParent_name, plantVarieties.variety_name, plantVarieties.variety_description, plantVarieties.height, plantParents.plantParent_spacing, plantParents.plantParent_sowDepth, plantVarieties.daysToHarvest, plantParents.plantParent_sun, plantParents.plantParent_soil, plantParents.plantParent_watering FROM plantVarieties JOIN plantParents ON plantParents.plantParent_id=plantVarieties.plantParent_id JOIN plantTypes ON plantTypes.plantGroupName=plantParents.plantGroup_id JOIN gardenPlants ON plantVarieties.variety_name=gardenPlants.plant_variety JOIN gardenBeds ON gardenPlants.bed_id=gardenBeds.bed_id JOIN userGardens ON gardenBeds.garden_id=userGardens.garden_id JOIN users ON userGardens.user_id=users.id', 
        (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows)
    })
}

const getAllGardenPlantsByUserId = (req, res) => {
    sqlQuery = `SELECT users.id,
	users.first_name,
    users.last_name,
    userGardens.garden_id,
    userGardens.zone_id,
    gardenBeds.bed_id,
    plantTypes.plantGroupName,
    plantParents.plantParent_name,
    plantVarieties.variety_name,
    plantVarieties.variety_description,
    plantVarieties.height,
    plantParents.plantParent_spacing,
    plantParents.plantParent_sowDepth,
    plantVarieties.daysToHarvest,
    plantParents.plantParent_sun,
    plantParents.plantParent_soil,
    plantParents.plantParent_watering,
    zones.spring_sow_start,
    zones.spring_sow_end,
    zones.spring_transplant_start,
    zones.spring_transplant_end,
    zones.fall_sow_start,
    zones.fall_sow_end,
    zones.fall_transplant_start,
    zones.fall_transplant_end
FROM plantVarieties 
	JOIN plantParents ON plantParents.plantParent_id=plantVarieties.plantParent_id
    JOIN plantTypes ON plantTypes.plantGroupName=plantParents.plantGroup_id
	JOIN gardenPlants ON plantVarieties.variety_name=gardenPlants.plant_variety
    JOIN gardenBeds ON gardenPlants.bed_id=gardenBeds.bed_id
	JOIN userGardens ON gardenBeds.garden_id=userGardens.garden_id
	JOIN users ON userGardens.user_id=users.id
    JOIN zones ON plantParents.plantParent_id=zones.plant_id
    WHERE users.id=? AND zones.zone_id=userGardens.zone_id`;
    sqlQuery = mysql.format(sqlQuery, [req.params.id]);

    pool.query(sqlQuery, (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows);
    })
}

const getGardensByUserId = (req, res) => {
    sqlQuery = `SELECT users.id, users.first_name, users.last_name, userGardens.garden_id, gardenBeds.bed_id, plantTypes.plantGroupName, plantParents.plantParent_name, plantVarieties.variety_name, plantVarieties.variety_description, plantVarieties.height, plantParents.plantParent_spacing, plantParents.plantParent_sowDepth, plantVarieties.daysToHarvest, plantParents.plantParent_sun, plantParents.plantParent_soil, plantParents.plantParent_watering FROM plantVarieties JOIN plantParents ON plantParents.plantParent_id=plantVarieties.plantParent_id JOIN plantTypes ON plantTypes.plantGroupName=plantParents.plantGroup_id JOIN gardenPlants ON plantVarieties.variety_name=gardenPlants.plant_variety JOIN gardenBeds ON gardenPlants.bed_id=gardenBeds.bed_id JOIN userGardens ON gardenBeds.garden_id=userGardens.garden_id JOIN users ON userGardens.user_id=users.id WHERE users.id=?`;
    sqlQuery = mysql.format(sqlQuery, [req.params.id]);

    pool.query(sqlQuery, (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows);
    })
}

module.exports = {
    getAllGardens,
    getAllGardenPlantsByUserId,
    getGardensByUserId
}