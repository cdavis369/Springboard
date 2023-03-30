-- SELECT * FROM analytics WHERE id = 1880;

-- SELECT id, app_name FROM analytics WHERE last_updated = '2018-08-01';

-- SELECT COUNT(*) from analytics GROUP BY category;

-- SELECT app_name, reviews FROM analytics ORDER BY reviews DESC LIMIT 5;

-- SELECT * FROM analytics WHERE rating >= 4.8 ORDER BY reviews DESC LIMIT 1;

-- SELECT category, AVG(rating) FROM analytics GROUP BY category ORDER BY AVG(rating) DESC;

-- SELECT app_name, price, rating FROM analytics WHERE rating < 3 ORDER BY price DESC LIMIT 1; 

-- SELECT * FROM analytics WHERE rating IS NOT NULL and min_installs <= 50 ORDER BY ratings DESC;

-- SELECT app_name FROM analytics WHERE rating < 3 AND reviews >= 10000;

-- SELECT * FROM analytics WHERE price >= 0.10 and price <= 1 ORDER BY reviews DESC LIMIT 10;

-- SELECT * FROM analytics WHERE category = 'DATING' AND price = ( SELECT MAX(price) FROM analytics WHERE category = 'DATING' );

-- SELECT * FROM analytics WHERE price = ( SELECT MAX(price) FROM analytics );

-- SELECT SUM(reviews) AS all_reviews FROM analytics;

-- SELECT * FROM (
--   SELECT category, COUNT(app_name) as apps
--   FROM analytics
--   GROUP BY category
-- ) AS categories 

-- WHERE categories.apps > 300;
-- SELECT app_name, reviews, min_installs, min_installs/reviews as proportion
-- FROM ( SELECT * FROM analytics WHERE min_installs >= 100000 ) as prop
-- ORDER BY proportion DESC
-- LIMIT 1;