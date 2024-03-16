WITH SubdivisionHierarchy AS (
    SELECT id, parent_id, name, 1 AS subdivision_nesting_level
    FROM subdivisions
    WHERE id = (SELECT subdivision_id FROM collaborators WHERE id = 710253)
    UNION ALL
    SELECT s.id, s.parent_id, s.name, sh.subdivision_nesting_level + 1
    FROM subdivisions s
    INNER JOIN SubdivisionHierarchy sh ON s.parent_id = sh.id
    WHERE s.id NOT IN (100055, 100059)
),
EmployeeList AS (
    SELECT c.id, c.name, s.name AS subdivision_name, s.id AS subdivision_id, sh.subdivision_nesting_level, COUNT(*) OVER (PARTITION BY s.id) AS total_employees
    FROM collaborators c
    JOIN SubdivisionHierarchy sh ON c.subdivision_id = sh.id
    JOIN subdivisions s ON c.subdivision_id = s.id
    WHERE c.age < 40
)
SELECT id, name, subdivision_name, subdivision_id, subdivision_nesting_level, total_employees
FROM EmployeeList
ORDER BY subdivision_nesting_level;
