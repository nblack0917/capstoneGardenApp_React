select * from gardenLayout
	JOIN gardenBeds ON gardenBeds.bed_id=gardenLayout.bed_id
    JOIN userGardens ON userGardens.garden_id=gardenBeds.garden_id
    WHERE userGardens.garden_id=1