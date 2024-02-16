CREATE DATABASE homemade_bread;

USE homemade_bread;  

CREATE TABLE breadtable (
    bread_id INT NOT NULL AUTO_INCREMENT,
    bread_title VARCHAR(150),
    bread_description VARCHAR(350),
    bread_imageURL VARCHAR(300),
    PRIMARY KEY(bread_id)
);

CREATE TABLE recipestable (
    recipe_id INT NOT NULL AUTO_INCREMENT,
    recipe_ingredients VARCHAR(400),
    recipe_description VARCHAR(1000),
    recipe_nut_free BOOLEAN,
    recipe_containsEgg BOOLEAN,
    recipe_containsFruit BOOLEAN,
    PRIMARY KEY(recipe_id),
    FOREIGN KEY (bread_id) REFERENCES breadtable(bread_id)
);
USE homemade_bread;
select * from homemade_bread.breadtable;
select * from homemade_bread;
select * from homemade_bread.recipestable;

select bread_id from homemade_bread.breadtable;
select recipe_id from homemade_bread.recipestable;








