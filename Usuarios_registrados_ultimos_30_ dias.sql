select * from usuarios
where  DATE(fecha_registro) between DATE_SUB(CURDATE(), INTERVAL 30 DAY) and CURDATE();