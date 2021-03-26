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
        WHERE usersContact.email = ?`
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
    // console.log(req.body)
    const newGarden = {
        id: req.body.id,
        zone_id: req.body.zone,
        garden_width: req.body.width,
        garden_length: req.body.length,
    }
    console.log("newGarden before", newGarden)

    sqlQuery=`INSERT INTO userGardens (user_id, zone_id, garden_width, garden_length) VALUES (?, ?, ?, ?);`
        sqlQuery = mysql.format(sqlQuery, [newGarden.id, newGarden.zone_id, newGarden.garden_width, newGarden.garden_length]);

    pool.query(sqlQuery, (err, result, fields) => {
        if (err) return handleSQLError(res, err);
        console.log("Number of Rows Affected: ", result.affectedRows)
        return result
    })
    res.end()
}



const addGardenBeds = (req, res, next) => {
    let newBed = [];
    const gardenInfo = req.body
    // console.log("gardenInfo", gardenInfo)
    let nextGardenId = parseInt(gardenInfo.lastGardenId) + 1;
    const gardenArray = gardenInfo.gardenInfo;
    // let gardenId = gardenArray.garden_id
    for (let item of gardenArray.layout) {
        let isPlanter;
        if (item.isPlanter === true) {
            isPlanter = 1;
        } else {
            isPlanter = 0;
        }
        let width = item.w * 3;
        let length = item.h * 3
        let newBedItem = [nextGardenId, isPlanter, width, length]
        newBed.push(newBedItem)
    }
    newBed.pop();
    // console.log(newBed)

    sqlQuery=`INSERT INTO gardenBeds (garden_id, bed_type, bed_width, bed_length) VALUES ?;`
        sqlQuery = mysql.format(sqlQuery);

    pool.query(sqlQuery, [newBed], (err, result, fields) => {
        if (err) return handleSQLError(res, err);
        console.log("Number of Rows Affected: ", result.affectedRows)
        return result
    })
    res.end()
}

const addGardenLayout = (req, res, next) => {
    let newLayout = [];
    const layoutArray = req.body;
    // console.log("layoutArray", layoutArray)
    let nextBedId = parseInt(layoutArray.lastBedId) + 1;
    let nextGardenId = parseInt(layoutArray.lastGardenId) + 1;
    const gardenArray = layoutArray.gardenInfo;
    let gardenId = gardenArray.garden_id
    
    for (let item of gardenArray.layout) {
        let isPlanter;
        if (item.isPlanter === true) {
            isPlanter = 1;
        } else {
            isPlanter = 0;
        }
        let i = item.i.toString();
        let width = item.w * 3;
        let length = item.h * 3
        let newItem = [nextBedId, nextGardenId, i, item.x, item.y, width, length, 1, 0, isPlanter]
        newLayout.push(newItem)
        nextBedId = nextBedId + 1
    }
    newLayout.pop();
    // console.log("newLayout", newLayout)

    sqlQuery=`INSERT INTO gardenLayout (bed_id, garden_id, i, x, y, w, h, isDraggable, isResizable, isPlanter) VALUES ?;`

    pool.query(sqlQuery, [newLayout], (err, result, fields) => {
        if (err) return handleSQLError(res, err);
        console.log("Number of Rows Affected: ", result.affectedRows)
        return result
    })
    res.end()
}

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

const addNewUser = (req, res, next) => {
    console.log(req.body)
    const newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
    }

    sqlQuery=`INSERT INTO users (first_name, last_name) VALUES (?, ?);`
        sqlQuery = mysql.format(sqlQuery, [newUser.first_name, newUser.last_name]);

    pool.query(sqlQuery, (err, result, fields) => {
        if (err) return handleSQLError(res, err);
        console.log("Number of Rows Affected: ", result.affectedRows)
        return result
    })
    res.end()
}

const addNewUserContact = (req, res, next) => {
    // console.log(req.body)
    const newUserContact = {
        user_id: req.body.nextUserId,
        phone1: req.body.phone1,
        phone2: req.body.phone2,
        email: req.body.email,
    }

    sqlQuery=`INSERT INTO usersContact (user_id, phone1, phone2, email) VALUES (?, ?, ?, ?);`
        sqlQuery = mysql.format(sqlQuery, [newUserContact.user_id, newUserContact.phone1, newUserContact.phone2, newUserContact.email]);

    pool.query(sqlQuery, (err, result, fields) => {
        if (err) return handleSQLError(res, err);
        console.log("Number of Rows Affected: ", result.affectedRows)
        return result
    })
    res.end()
}

const addNewUserAddress = (req, res, next) => {
    // console.log(req.body)
    const newUserAddress = {
        user_id: req.body.nextUserId,
        address: req.body.address,
        city: req.body.city,
        county: req.body.county,
        state: req.body.state,
        zip: req.body.zip,
    }

    sqlQuery=`INSERT INTO usersAddress (user_id, address, city, county, state, zip) VALUES (?, ?, ?, ?, ? ,?);`
        sqlQuery = mysql.format(sqlQuery, [newUserAddress.user_id, newUserAddress.address, newUserAddress.city, newUserAddress.county, newUserAddress.state, newUserAddress.zip]);

    pool.query(sqlQuery, (err, result, fields) => {
        if (err) return handleSQLError(res, err);
        console.log("Number of Rows Affected: ", result.affectedRows)
    })
    res.end()
}

const addNewUserCreditials = (req, res, next) => {
    // console.log(req.body)
    const newUserCredentials = {
        user_id: req.body.nextUserId,
        username: req.body.username,
    }

    sqlQuery=`INSERT INTO usersCredentials (user_id, username) VALUES (?, ?);`
        sqlQuery = mysql.format(sqlQuery, [newUserCredentials.user_id, newUserCredentials.username]);

    pool.query(sqlQuery, (err, result, fields) => {
        if (err) return handleSQLError(res, err);
        console.log("Number of Rows Affected: ", result.affectedRows)
    })
    res.end()
}


module.exports = {
    getAllUsers,
    getUserInfoByUserName,
    getUserGardenInfo,
    addNewGarden,
    updateGarden,
    removeGarden,
    addGardenBeds,
    addGardenLayout,
    addNewUser,
    addNewUserContact,
    addNewUserAddress,
    addNewUserCreditials,
}