DROP TABLE IF EXISTS  usersContact, usersAddress, usersCredentials, plantVarieties, zones, plantParents, gardenPlants, plantTypes, gardenBeds, gardenLayout, userGardens, users;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,

  first_name VARCHAR(50),
  last_name VARCHAR(50),
  PRIMARY KEY (id)
  );

CREATE TABLE usersContact (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  phone1 VARCHAR(50),
  phone2 VARCHAR(50),
  email VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
  REFERENCES users (id)
    ON DELETE CASCADE
);

CREATE TABLE usersAddress (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  address VARCHAR(100),
  city VARCHAR(50),
  county VARCHAR(50),
  state VARCHAR(50),
  zip VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
  REFERENCES users (id)
    ON DELETE CASCADE
);

CREATE TABLE usersCredentials (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  username VARCHAR(25),
  password VARCHAR(100),
  PRIMARY KEY (id),
  UNIQUE KEY (username),
  FOREIGN KEY (user_id)
  REFERENCES users (id)
    ON DELETE CASCADE
);

CREATE TABLE userGardens (
  garden_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  zone_id INT NOT NULL,
  garden_width INT NOT NULL,
  garden_length INT NOT NULL,
  PRIMARY KEY (garden_id),
  FOREIGN KEY (user_id)
    REFERENCES users (id)
    ON DELETE CASCADE
);

CREATE TABLE gardenBeds (
  bed_id INT NOT NULL AUTO_INCREMENT,
  garden_id INT NOT NULL,
  bed_type TINYINT NOT NULL,
  bed_width INT NOT NULL,
  bed_length INT NOT NULL,
  PRIMARY KEY (bed_id),
  FOREIGN KEY (garden_id)
    REFERENCES userGardens (garden_id)
    ON DELETE CASCADE
);

CREATE TABLE gardenLayout (
  layout_id INT NOT NULL AUTO_INCREMENT,
  bed_id INT NOT NULL,
  garden_id INT NOT NULL,
  i VARCHAR(2),
  x INT NOT NULL,
  y INT NOT NULL,
  w INT NOT NULL,
  h INT NOT NULL,
  isDraggable TINYINT NOT NULL,
  isResizable TINYINT NOT NULL,
  isPlanter TINYINT NOT NULL,
  PRIMARY KEY (layout_id),
  FOREIGN KEY (bed_id)
    REFERENCES gardenBeds (bed_id)
    ON DELETE CASCADE
);

CREATE TABLE plantTypes (
  plantGroupName VARCHAR(12),
  PRIMARY KEY (plantGroupName)
);

CREATE TABLE plantParents (
  plantParent_id INT NOT NULL AUTO_INCREMENT,
  plantGroup_id VARCHAR(12),
  plantParent_name VARCHAR(50),
  plantParent_spacing INT,
  plantParent_sowDepth INT,
  plantParent_sun VARCHAR(24),
  plantParent_soil VARCHAR(24),
  plantParent_watering VARCHAR(48),
  PRIMARY KEY (plantParent_id),
  FOREIGN KEY (plantGroup_id)
  REFERENCES plantTypes(plantGroupName)
    ON DELETE CASCADE
);



CREATE TABLE plantVarieties (
  id INT NOT NULL AUTO_INCREMENT,
  plantParent_id INT NOT NULL,
  variety_name VARCHAR(36),
  variety_description VARCHAR(1000),
  height INT,
  daysToHarvest INT,
  PRIMARY KEY (id),
  KEY (variety_name),
  FOREIGN KEY (plantParent_id)
  REFERENCES plantParents(plantParent_id)
    ON DELETE CASCADE
  -- FOREIGN KEY (variety_name)
  --   REFERENCES gardenPlants(plant_variety)
  --   ON DELETE CASCADE
);

CREATE TABLE gardenPlants (
  id INT NOT NULL AUTO_INCREMENT,
  bed_id INT NOT NULL,
  plant_variety VARCHAR(36),
  PRIMARY KEY (id),
  -- KEY (plant_variety),
  FOREIGN KEY (plant_variety)
    REFERENCES plantVarieties(variety_name)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  FOREIGN KEY (bed_id)
    REFERENCES gardenBeds(bed_id)
    ON DELETE CASCADE
);

CREATE TABLE zones (
    id INT NOT NULL AUTO_INCREMENT,
    zone_id INT NOT NULL,
    plant_id INT NOT NULL,
    spring_sow_start VARCHAR(60),
    spring_sow_end VARCHAR(60),
    spring_transplant_start VARCHAR(60),
    spring_transplant_end VARCHAR(60),
    fall_sow_start VARCHAR(60),
    fall_sow_end VARCHAR(60),
    fall_transplant_start VARCHAR(60),
    fall_transplant_end VARCHAR(60),
    PRIMARY KEY (id),
    FOREIGN KEY (plant_id)
    REFERENCES plantParents(plantParent_id)
);
