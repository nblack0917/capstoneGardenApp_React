

INSERT INTO plantTypes
    (plantGroupName)
VALUES
    ("Fruit"),
    ("Vegetable"),
    ("Leafy Greens"),
    ("Gourd"),
    ("Herb"),
    ("Legume"),
    ("Flower");

INSERT INTO plantParents
    (plantGroup_id, plantParent_name, plantParent_spacing, plantParent_sowDepth, plantParent_sun, plantParent_soil, plantParent_watering)
VALUES
    ("Vegetable", "Artichoke", 30, 0.5, "Full Sun", "Loam", "Well-drained"),
    ("Vegetable", "Asparagus", 21, 8, "Full Sun/Part Shade", "Loam", "Loose soil"),
    ("Legume", "Beans", 3.5, 1.5, "Full Sun", "Loam", "Well-drained"),
    ("Vegetable", "Beets", 3.5, 0.75, "Full Sun/Part Shade", "Loam", "Well-drained"),
    ("Vegetable", "Brussels Sprouts", 18, 0.5, "Full Sun", "Loam", "Well-drained"),
    ("Leafy Greens", "Cabbage", 18, 0.5, "Full Sun", "Loam", "Well-drained"),
    ("Fruit", "Melon", 18, 1, "Full Sun", "Loam", "Well-drained"),
    ("Vegetable", "Carrots", 3, 0.5, "Full Sun", "Sandy", "Well-drained"),
    ("Vegetable", "Cauliflower", 30, 0.5, "Full Sun", "Loam", "Well-drained"),
    ("Leafy Greens", "Chard", 9, 0.75, "Full Sun/Part Shade", "High organic matter/Loam", "Well-drained"),
    ("Vegetable", "Corn", 5, 1, "Full Sun", "Loam", "Well-drained"),
    ("Fruit", "Cucumber", 12, 0.5, "Full Sun", "Loam", "Well-drained"),
    ("Fruit", "Eggplant", 21, 0.25, "Full Sun", "Sandy", "Well-drained"),
    ("Vegetable", "Garlic", 4, 2, "Full Sun", "Loam", "Well-drained"),
    ("Leafy Greens", "Kale", 15, 0.5, "Full Sun", "Loam", "Well-drained"),
    ("Vegetable", "Leek", 5, 0.5, "Full Sun/Part Shade", "Loam", "Well-drained"),
    ("Leafy Greens", "Lettuce", 8, 0.5, "Full Sun/Part Shade", "Loam", "High moisture/Well-drained"),
    ("Vegetable", "Okra", 15, 0.75, "Full Sun", "Loam", "Well-drained"),
    ("Vegetable", "Onion", 4, 0.5, "Full Sun", "Loam", "Well-drained"),
    ("Legume", "Pea", 2.5, 1.5, "Full Sun/Part Shade", "Loam", "Well-drained"),
    ("Fruit", "Pepper", 18, 0.25, "Full Sun", "Loam", "Well-drained"),
    ("Vegetable", "Potato", 10, 4, "Full Sun", "Loam", "Loose, Well-drained"),
    ("Vegetable", "Sweet Potato", 15, 0.5, "Full Sun", "Loam", "Well-drained"),
    ("Vegetable", "Radish", 2, 0.5, "Full Sun", "Clay/Loam/Sandy", "Loose, Well-drained"),
    ("Vegetable", "Shallot", 1, 0.25, "Full Sun/Part Shade", "Loam", "Well-drained"),
    ("Leafy Greens", "Spinach", 7, 0.5, "Full Sun/Part Shade", "Loam", "High moisture/Well-drained"),
    ("Fruit", "Summer Squash", 24, 0.5, "Full Sun", "Loam", "Well-drained"),
    ("Fruit", "Winter Squash", 24, 0.5, "Full Sun", "Loam", "Well-drained"),
    ("Fruit", "Tomato", 18, 0.5, "Full Sun", "Loam", "High Moisture/Well-drained"),
    ("Vegetable", "Turnip", 7, 0.5, "Full Sun/Part Shade", "Loam", "Well-drained"),
    ("Vegetable", "Celery", 8, 0.5, "Full Sun/Part Shade", "Loam", "Well-drained"),
    ("Leafy Greens", "Arugula", 6, 0.25, "Full Sun/Part Shade", "Loam", "Well-drained"),
    ("Herb", "Basil", 11, 0.5, "Full Sun", "Loam", "Well-drained"),
    ("Herb", "Dill", 12, 0.5, "Full Sun", "Loam", "Well-drained"),
    ("Herb", "Catnip", 18, 0.25, "Full Sun", "Loam", "Well-drained"),
    ("Herb", "Coriander", 12, 0.5, "Full Sun", "Loam", "Well-drained"),
    ("Herb", "Lavender", 21, 0.5, "Full Sun", "Loam", "Well-drained"),
    ("Herb", "Oregano", 8, 0.5, "Full Sun", "Loam", "Well-drained"),
    ("Herb", "Parsley", 8, 0.5, "Full Sun", "Loam", "Well-drained"),
    ("Herb", "Mint", 18, 0.5, "Full Sun", "Loam", "Well-drained"),
    ("Herb", "Rosemary", 21, 0.5, "Full Sun", "Loam", "Well-drained"),
    ("Herb", "Sage", 17, 0.5, "Full Sun", "Loam", "Well-drained"),
    ("Flower", "Sunflower", 18, 1, "Full Sun", "Loam", "High moisture/Well-drained"),
    ("Flower", "Zinnia", 12, 0.5, "Full Sun", "Loam", "Well-drained"),
    ("Flower", "Marigold", 12, 0.5, "Full Sun", "Loam", "Well-drained"),
    ("Flower", "Cosmos", 12, 0.5, "Full Sun", "Loam", "Well-drained"),
    ("Flower", "Hibiscus", 24, 0.25, "Full Sun", "Loam", "High moisture/Well-drained"),
    ("Vegetable", "Broccoli", 18, 0.5, "Full Sun", "Loam", "Well-drained");



INSERT INTO gardenPlants
    (bed_id, plant_variety)
VALUES
    (1, "Cherry"),
    (1, "Cherry"),
    (1, "Cherry"),
    (1, "Cherry"),
    (1, "Yellow"),
    (1, "Yellow"),
    (1, "Yellow"),
    (1, "Beefsteak"),
    (1, "Beefsteak"),
    (3, "Dinosaur Kale"),
    (2, "Orange Carrot"),
    (2, "Orange Carrot"),
    (5, "Orange Carrot"),
    (5, "Orange Carrot"),
    (5, "Orange Carrot"),
    (4, "Kentucky Wonder Beans"),
    (4, "Kentucky Wonder Beans"),
    (4, "Kentucky Wonder Beans"),
    (4, "Kentucky Wonder Beans"),
    (4, "Kentucky Wonder Beans"),
    (4, "Kentucky Wonder Beans"),
    (4, "Kentucky Wonder Beans"),
    (6, "Sweet Basil"),
    (7, "Dill");
    
INSERT INTO plantVarieties
    (plantParent_id, variety_name, variety_description, height, daysToHarvest)
VALUES
    (29, "Cherry", "Small sweet tomatoes", 24, 85),
    (27, "Yellow", "8 inches long. Yellow in color", 24, 85),
    (29, "Beefsteak", "Large firm tomatoes", 24, 85),
    (15, "Dinosaur Kale", "Wide leaves", 18, 65),
    (33, "Sweet Basil", "Large sweet tasing basil leaves", 18, 30),
    (34, "Dill", "Soft needle like leaves", 18, 30),
    (3, "Kentucky Wonder Beans", "6-8 inch long beans", 20, 56),
    (8, "Orange Carrot", "2 - 8 inches long", 10, 90);
    
