-- Run this script to see how joins work in localhost/phpmyadmin
-- use the sql tab, run by parts

-- PART 1: CREATING AND BUILDING THE DATABASE 
CREATE database `joins_demo1`;

USE `joins_demo1`;

-- create left table structure
CREATE TABLE `left_table` (
    `id` mediumint(8) unsigned NOT NULL,
    `description` TEXT default NULL
);

-- create right table structure
CREATE TABLE `right_table` (
    `id` mediumint(8) unsigned NOT NULL,
    `description` TEXT default NULL
);

-- insert data into left_table
INSERT INTO `left_table` (`id`, `description`) VALUES (1, 'left 01');
INSERT INTO `left_table` (`id`, `description`) VALUES (2, 'left 02');
INSERT INTO `left_table` (`id`, `description`) VALUES (3, 'left 03');
INSERT INTO `left_table` (`id`, `description`) VALUES (4, 'left 04');
INSERT INTO `left_table` (`id`, `description`) VALUES (5, 'left 05');
INSERT INTO `left_table` (`id`, `description`) VALUES (6, 'left 06');
INSERT INTO `left_table` (`id`, `description`) VALUES (7, 'left 07');
INSERT INTO `left_table` (`id`, `description`) VALUES (8, 'left 08');
INSERT INTO `left_table` (`id`, `description`) VALUES (9, 'left 09');

-- insert data into right_table
INSERT INTO `right_table` (`id`, `description`) VALUES (6, 'right 06');
INSERT INTO `right_table` (`id`, `description`) VALUES (7, 'right 07');
INSERT INTO `right_table` (`id`, `description`) VALUES (8, 'right 08');
INSERT INTO `right_table` (`id`, `description`) VALUES (9, 'right 09');
INSERT INTO `right_table` (`id`, `description`) VALUES (10, 'right 10');
INSERT INTO `right_table` (`id`, `description`) VALUES (11, 'right 11');
INSERT INTO `right_table` (`id`, `description`) VALUES (12, 'right 12');
INSERT INTO `right_table` (`id`, `description`) VALUES (13, 'right 13');
INSERT INTO `right_table` (`id`, `description`) VALUES (14, 'right 14');

-- end part 1

-- PART 2: PERFORMING INNER JOIN
-- Inner joins select all rows from both tables as long as there is a match between the columns in both tables. 

SELECT left_table.description AS `left`, right_table.description AS `right` 
FROM left_tableINNER 
JOIN right_tableON left_table.id=right_table.id;

-- end part 2

-- PART 3: PERFORMING LEFT OUTER JOIN
-- A left join returns all rows from the left table with matching rows from the right table. The rows without a match return NULL. We are selecting data from both tables where the id columns match AND all data from the left table

SELECT left_table.description AS `left`, right_table.description AS `right` 
FROM left_tableLEFT 
JOIN right_tableON left_table.id=right_table.id;

-- end part 3

-- PART 4: PERFORMING RIGHT OUTER JOIN
-- A right join returns all rows from the right table with the matching rows of the left table. The result is NULL on the left side when there is no match. We are selecting data from both tables where the id columns match AND all data from the right table

SELECT left_table.description AS `left`, right_table.description AS `right` 
FROM left_tableRIGHT 
JOIN right_tableON left_table.id=right_table.id;

-- end part 4