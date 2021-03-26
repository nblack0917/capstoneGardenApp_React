SELECT users.id,
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
WHERE usersCredentials.username = "nlack0917"