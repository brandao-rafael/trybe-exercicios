USE sakila;
SELECT title, release_year, length, rating, replacement_cost FROM film
ORDER BY length DESC, replacement_cost ASC LIMIT 20;
