SELECT * FROM gardenBeds
JOIN gardenLayout ON gardenBeds.bed_id=gardenLayout.bed_id
JOIN userGardens ON gardenBeds.garden_id=userGardens.garden_id
JOIN users ON users.id=userGardens.user_id
WHERE users.id = 1
