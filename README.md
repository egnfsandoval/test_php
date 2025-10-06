# Prueba Landing
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

9) Descargar o clonar el codigo del siguiente repositorio: https://github.com/egnfsandoval/test_php.git
10) Al finalizar la descarga o clonar el repositorio debe de copiar las carpetas(marcado en amarillo) al directorio C:\xampp\htdocs.
    <img width="1226" height="273" alt="image" src="https://github.com/user-attachments/assets/01777c80-aff9-4726-88c5-f9591b56ad5e" />
11) Despues de pegar las carpetas: api, includes y landing al directorio C:\xampp\htdocs, se debe de ingresar a la siguiente url: http://localhost/landing/ y poder visualizar la pagina.
    <img width="1917" height="997" alt="image" src="https://github.com/user-attachments/assets/9fd9db17-43ad-4d11-a1b8-ffc76d0ad701" />
12) Se deben de ingresar los datos correctos segun las validaciones indicadas en el documento y registrar al usuario.
    <img width="1671" height="629" alt="image" src="https://github.com/user-attachments/assets/c394e07d-1d0d-4c49-8aab-3394e4229c6f" />
    Si los datos son correctos se habilita el boton para guardar y se muestra el siguiente mensaje.
    <img width="1618" height="475" alt="image" src="https://github.com/user-attachments/assets/6d84d6c7-d1bc-475d-a886-4f87a9925e39" />
    Se revisa en base de datos si se almaceno el usuario correctamente.
    <img width="1187" height="136" alt="image" src="https://github.com/user-attachments/assets/9107399d-9c6f-4643-aadc-46e0da8b6948" />

# Seccion 3 SQL.
Leer el arcivo Instrucciones.sql o seguir los pasos que se describen a continuacion.

1) Seleccionar base de datos con el siguiente comando use test; en dbeaver.
2) En dbeaver ejecutar el siguiente script:

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
 3) Paraa las consultas que se solicitan en el documento se debe de ejecutar los scripts que estan en el repositorio.
    
       3.1) Usuarios registrados últimos 30 días.
    
               Ejecutar el script en el archivo con nombre: Usuarios_registrados_ultimos_30_ dias.sql
    
       3.2) Contar usuarios con correo @gmail.com.
    
           Ejecutar el script en el archivo con nombre: Contar_usuarios_con_correo_@gmailcom.sql
    
       3.3) Actualizar nombre de usuario con id=10.
    
           Ejecutar el script en el archivo con nombre: Actualizar_nombre_de_usuario_con_id_10.sql
    
       3.4) Eliminar usuario con id=15.
    
           Ejecutar el script en el archivo con nombre: Eliminar_usuario_con_id_15.sql

# Seccion 4 Python.
1) Descargar Python desde la siguiente url: https://www.python.org/downloads/ y descargar la siguiente version(marcado en amarillo).
    <img width="1362" height="630" alt="image" src="https://github.com/user-attachments/assets/ccce2d8b-5ef8-44a7-a9f2-d2e736e46b99" />

2) Intalar Python y revisar la version:
   <img width="856" height="734" alt="image" src="https://github.com/user-attachments/assets/1821d328-c36c-407d-a134-f9ccf2521cdc" />
3) Instalar plugin de Python en Visual studio code.
   
    <img width="315" height="698" alt="image" src="https://github.com/user-attachments/assets/477d79ee-df81-4b79-9cf7-02bb24bc0b17" />
    
5) Abrir archivo test.py en Visual Studio Code.
   <img width="1909" height="675" alt="image" src="https://github.com/user-attachments/assets/0f3cfc82-5e8c-4c8c-9c36-daf11da7117e" />
6) Ejecutar codigo en boton(marcado en amarillo).
   <img width="1875" height="486" alt="image" src="https://github.com/user-attachments/assets/453fc376-d69d-4815-81ae-2081a9d115e1" />
7) En la consola se mostrara los siguientes resultados.
   <img width="1901" height="987" alt="image" src="https://github.com/user-attachments/assets/1abc9981-22aa-4414-9d3d-a788bf9d6191" />







      
    
    
          




