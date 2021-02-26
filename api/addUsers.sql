INSERT INTO users
	(first_name, last_name)
VALUES 
    ("Nick", "Black"),
    ("Jenny", "Black"),
    ("Cindy", "Aneweer"),
    ("Tom", "Aneweer"),
    ("Shaun", "Funk");

INSERT INTO usersContact
    (user_id, phone1, phone2, email)
VALUES
    (1, "813-391-1123", "", "nickablack@gmail.com"),
    (2, "512-945-3354", "", "jenniferblack0917@gmail.com"),
    (3, "512-555-6666", "512-555-7778", "cindy@gmail.com"),
    (4, "512-555-6666", "512-555-7779", "tom@gmail.com"),
    (5, "973-625-6427", "973-454-5631", "skunkfunk@gmail.com");

INSERT INTO usersAddress
    (user_id, address, city, county, state, zip)
VALUES
    (1, "15267 Dashwood Creek Dr", "Pflugerville", "Travis", "Texas", "78460"),
    (2, "15267 Dashwood Creek Dr", "Pflugerville", "Travis", "Texas", "78460"),
    (3, "333 Woodcrest Dr", "Georgetown", "Williamson", "Texas", "78652"),
    (4, "333 Woodcrest Dr", "Georgetown", "Williamson", "Texas", "78652"),
    (5, "23453 Dripping St. Apt 22134", "Gonzales", "Dallas", "Texas", "76793");

INSERT INTO usersCredentials
    (user_id, username, password)
VALUES
    (1, "nlack123", "Password123!"),
    (2, "jennyZam", "PassGo34"),
    (3, "CindyWeer", "Word123!"),
    (4, "tommyBoy", "Password6234!!"),
    (5, "funktheskunk", "skunkworks.");

INSERT INTO userGardens
    (user_id, zone_id, garden_width, garden_length)
VALUES
    (1, 8, 300, 300),
    (2, 8, 24, 48),
    (3, 8, 100, 100),
    (4, 8, 48, 48),
    (5, 6, 400, 400);

INSERT INTO gardenBeds
    (garden_id, bed_type, bed_width, bed_length)
VALUES
    (1, 0, 48, 72),
    (1, 0, 48, 48),
    (4, 1, 12, 12),
    (5, 0, 48, 72),
    (5, 0, 48, 48),
	(2, 1, 12, 12),
    (5, 1, 12, 12);

