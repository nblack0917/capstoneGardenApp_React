const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');

const getAllUsers = (req, res) => {
    pool.query('SELECT * FROM users', 
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

const getUserGardenInfo = (req, res) => {
    sqlQuery= `SELECT users.id,
	users.first_name,
    users.last_name,
    usersContact.email,
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
	JOIN zones ON plantParents.plantParent_id=zones.plant_id
    JOIN plantTypes ON plantTypes.plantGroupName=plantParents.plantGroup_id
	JOIN gardenPlants ON plantVarieties.variety_name=gardenPlants.plant_variety
    JOIN gardenBeds ON gardenPlants.bed_id=gardenBeds.bed_id
	JOIN userGardens ON gardenBeds.garden_id=userGardens.garden_id
	JOIN users ON userGardens.user_id=users.id
    JOIN usersContact ON usersContact.user_id=users.id
    WHERE users.id=? AND zones.zone_id=userGardens.zone_id`
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

const addNewGarden = (req, res, next) => {
    console.log(req.body)
    const newGarden = {
        id: req.body.id,
        zone_id: req.body.zone,
        garden_width: req.body.width,
        garden_length: req.body.length,
    }
    console.log("newGarden before", newGarden)

        sqlQuery=`INSERT INTO userGardens (user_id, zone_id, garden_width, garden_length) VALUES (?, ?, ?, ?);`
            sqlQuery = mysql.format(sqlQuery, [newGarden.id, newGarden.zone_id, newGarden.garden_width, newGarden.garden_length]);

            pool.query(sqlQuery, (err) => {
                if (err) return handleSQLError(res, err);
                // return;
            })
            // res.send(newGarden)
            res.end()
}
// const addNewGarden = (req, res, next) => {

//         let id = req.params.id;
//         let zone_id = req.params.zone;
//         let garden_width =  req.params.width;
//         let garden_length = req.params.length;

//         const newGarden = {
//             id: id,
//             zone_id: zone_id,
//             garden_width: garden_width,
//             garden_length: garden_length
//         }

//         sqlQuery=`INSERT INTO userGardens (user_id, zone_id, garden_width, garden_length) VALUES (?, ?, ?, ?);`
//             sqlQuery = mysql.format(sqlQuery, [id, zone_id, garden_width, garden_length]);

//             pool.query(sqlQuery, (err) => {
//                 if (err) return handleSQLError(res, err);
//                 // return;
//             })
//             res.send(newGarden)
// }

const updateGarden = (req, res) => {

        let garId = req.params.id;
        let zone = req.params.zone;
        let width =  req.params.width;
        let length = req.params.length;

        const updatedGarden = {
            id: garId,
            garden_width: width,
            garden_length: length,
            zone_id: zone,
        }

        sqlQuery=`UPDATE userGardens SET garden_width = ?, garden_length = ?, zone_id = ? WHERE garden_id = ?`
            sqlQuery = mysql.format(sqlQuery, [ width, length, zone, garId]);

            pool.query(sqlQuery, (err) => {
                if (err) return handleSQLError(res, err);
                // return;
            })
            res.send(updatedGarden)
    }
    
const removeGarden = (req, res) => {
        sqlQuery=`DELETE FROM userGardens WHERE garden_id = ?`
            sqlQuery = mysql.format(sqlQuery, [req.params.id]);

            pool.query(sqlQuery, (err, res) => {
                if (err) return handleSQLError(res, err);
                console.log("Deleted Gardens: " + res.affectedRows)
            })
            res.status(200).end('Success!')

}

module.exports = {
    getAllUsers,
    getUserInfoByUserName,
    getUserGardenInfo,
    addNewGarden,
    updateGarden,
    removeGarden,
}