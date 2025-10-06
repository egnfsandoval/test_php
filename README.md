# test_php
Para comprobrar la funcionalidad de la landing seguir los siguientes pasos.
1) Descargar XAMPP de la siguiente url: https://www.apachefriends.org/es/index.html.
2) Instalar XAMPP en la siguiente version.
   <img width="510" height="140" alt="image" src="https://github.com/user-attachments/assets/7ced2841-23a8-495d-8c16-783118a8b210" />
3) Cuando ya este instalado XAMPP ingresar al XAMPP control Panel he inicializar los siguientes servicio.
   <img width="666" height="250" alt="image" src="https://github.com/user-attachments/assets/293f29f1-b67e-4590-8e53-46e144e28d71" />
4) Descargar dbeaver de la siguiente url https://dbeaver.io/download/ y descargar el instalador(marcado en amarillo)
   <img width="1659" height="561" alt="image" src="https://github.com/user-attachments/assets/c582766e-0a14-4883-bf15-8243db94fa99" />
5) Realizar la instalacion de dbeaver y configurar la conexion a la base de datos mysql que se instalao con XAMPP con los siquites datos.
   <img width="1312" height="586" alt="image" src="https://github.com/user-attachments/assets/a2de044f-e724-4d43-a804-c9856140a37e" />
   El usurio default es root y la contraseña se deja en blanco
6) Al finalizar la conexion a mysql se debe de poder ver las bases de datos creadas por default.
   <img width="575" height="345" alt="image" src="https://github.com/user-attachments/assets/fe4b407a-e7f0-475e-9e1f-ed661df6dce9" />
7) Ejecutar el los siguientes comandos sql en dbeaver para  seleccionar la base de datos por default llamado test y la creacion de la tabla usuarios
    7.1) use test;
   
      <img width="1331" height="69" alt="image" src="https://github.com/user-attachments/assets/ef9c073d-373b-4b92-a881-75d39bb112c8" />
    7.2) crear la tabla usuario.
   
       CREATE TABLE IF NOT EXISTS usuarios (
       id INT AUTO_INCREMENT PRIMARY KEY,
       nombre VARCHAR(120) NOT NULL,
       correo VARCHAR(160) NOT NULL UNIQUE,
       password_hash VARCHAR(255) NOT NULL,
       fecha_nacimiento DATE NOT NULL,
       fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
       ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



