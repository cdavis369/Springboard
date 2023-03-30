SELECT * FROM owners LEFT JOIN vehicles ON owners.id = owner_id;

SELECT first_name, last_name, COUNT(owned_vehicles.id) AS cars
FROM (
  SELECT first_name, last_name, owners.id
  FROM owners 
  JOIN vehicles ON owners.id = owner_id
) as owned_vehicles
GROUP BY first_name, last_name 
ORDER BY COUNT(owned_vehicles.id) DESC;

SELECT first_name, last_name, 
  Cast(AVG(owned_vehicles.price) as Int) as average_price,
  COUNT(owned_vehicles.id) AS cars
FROM (
  SELECT first_name, last_name, owners.id, price
  FROM owners 
  JOIN vehicles ON owners.id = owner_id
) as owned_vehicles
GROUP BY first_name, last_name 
ORDER BY Cast(AVG(owned_vehicles.price) as Int) DESC;