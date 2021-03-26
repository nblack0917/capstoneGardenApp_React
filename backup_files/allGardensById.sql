SELECT users.id,
	users.first_name,
    users.last_name,
    userGardens.garden_id,
    userGardens.garden_width,
    userGardens.garden_length,
    userGardens.zone_id,
    gardenBeds.bed_id,
    gardenBeds.bed_type,
    gardenBeds.bed_width,
    gardenBeds.bed_length,
    gardenLayout.i,
    gardenLayout.x,
    gardenLayout.y,
    gardenLayout.w,
    gardenLayout.h,
    gardenLayout.isDraggable,
    gardenLayout.isResizable,
    gardenLayout.isPlanter
FROM gardenLayout
	JOIN gardenBeds ON gardenLayout.bed_id=gardenBeds.bed_id
	JOIN userGardens ON gardenBeds.garden_id=userGardens.garden_id
	JOIN users ON userGardens.user_id=users.id
    JOIN usersContact ON usersContact.user_id=users.id
    WHERE users.id=1 