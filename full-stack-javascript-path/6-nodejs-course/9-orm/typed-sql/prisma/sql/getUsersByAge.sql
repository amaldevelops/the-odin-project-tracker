SELECT id, name, age
FROM users
WHERE age > $1 AND age < $2