/*
Antes de ejecutar los scripts en este repositorio debe de ejecutar el siguiente script
*/
INSERT INTO usuarios (nombre, correo, password_hash, fecha_nacimiento)
  SELECT 
    CONCAT('Usuario ', n) AS nombre,
    CONCAT('usuario', n, '@ejemplo.com') AS correo,
    SHA2(CONCAT('Password!', n), 256) AS password_hash,
    DATE_ADD('1980-01-01', INTERVAL (FLOOR(1 + (RAND() * 8000))) DAY) AS fecha_nacimiento
  FROM (
    SELECT @row := @row + 1 AS n
    FROM information_schema.tables t1, information_schema.tables t2, (SELECT @row:=0) init
    LIMIT 100
  ) x;


  /*
  Despues de ejecutar el script anterior ya puede ejecutar los 4 script que se encuentran en el repositorio
  */