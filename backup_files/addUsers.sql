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
    (1, "15267 Dashwood Creek Dr", "Pflugerville", "Travis", "Texas", "78660"),
    (2, "15267 Dashwood Creek Dr", "Pflugerville", "Travis", "Texas", "78660"),
    (3, "333 Woodcrest Dr", "Georgetown", "Williamson", "Texas", "78652"),
    (4, "333 Woodcrest Dr", "Georgetown", "Williamson", "Texas", "78652"),
    (5, "23453 Dripping St. Apt 22134", "Gonzales", "Dallas", "Texas", "76793");

INSERT INTO usersCredentials
    (user_id, username, password)
VALUES
    (1, "nblack0917", "Password123!"),
    (2, "jennyZam0917", "PassGo34"),
    (3, "cindyWeer", "Word123!"),
    (4, "tommyBoy", "Password6234!!"),
    (5, "funktheskunk", "skunkworks.");

INSERT INTO userGardens
    (user_id, zone_id, garden_width, garden_length)
VALUES
    (1, 8, 120, 120),
    (1, 8, 18, 72),
    (1, 8, 48, 72),
    (2, 8, 24, 48),
    (3, 8, 100, 100),
    (4, 8, 48, 48),
    (5, 6, 400, 400);

INSERT INTO gardenBeds
    (garden_id, bed_type, bed_width, bed_length)
VALUES
    (1, 0, 48, 72),
    (1, 0, 48, 48),
    (1, 0, 24, 24),
    (1, 1, 12, 12),
    (2, 1, 12, 12),
    (2, 1, 24, 12),
    (3, 1, 6, 6),
    (3, 1, 6, 6),
    (3, 1, 6, 6),
    (4, 1, 12, 12),
    (5, 0, 48, 72),
    (5, 0, 48, 48),
	(2, 1, 12, 12),
    (5, 1, 12, 12);

INSERT INTO gardenLayout
    (bed_id, garden_id, i, x, y, w, h, isDraggable, isResizable, isPlanter)
VALUES
    (3, 1, '0', 0, 2, 24, 24, 1, 0, 0),
    (4, 1, '1', 4, 5, 12, 12, 1, 0, 1);

