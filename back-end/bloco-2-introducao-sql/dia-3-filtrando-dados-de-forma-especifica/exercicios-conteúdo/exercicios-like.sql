-- Mostre todos os detalhes dos filmes que contêm a palavra ace no nome.
USE sakila;
SELECT * FROM film WHERE title LIKE '%ACE%';
-- Mostre todos os detalhes dos filmes cujas descrições finalizam com china
USE sakila;
SELECT * FROM film WHERE description LIKE '%china';
-- Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord.
USE sakila;
SELECT * FROM film WHERE description LIKE '%girl%' AND title LIKE '%lord';
-- Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon.
USE sakila;
SELECT * FROM film WHERE title LIKE '___gon%';
-- Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra gon e a descrição contém a palavra Documentary.
USE sakila;
SELECT * FROM film WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';
-- Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito
USE sakila;
SELECT * FROM film WHERE title LIKE '%academy' OR title LIKE 'mosquito%';
-- Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições.
USE sakila;
SELECT * FROM film WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';