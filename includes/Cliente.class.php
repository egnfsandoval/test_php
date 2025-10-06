<?php
    require_once('Database.class.php');

    class Cliente{
        public static function create_client($nombre, $correo, $password_hash, $fecha_nacimiento){
            $database = new Database();
            $conn = $database->getConnection();

            $stmt = $conn->prepare('INSERT INTO usuarios (nombre, correo, password_hash, fecha_nacimiento)
                VALUES(:nombre, :correo, :password_hash, :fecha_nacimiento)');
            $stmt->bindParam(':nombre',$nombre);
            $stmt->bindParam(':correo',$correo);
            $stmt->bindParam(':password_hash',$password_hash);
            $stmt->bindParam(':fecha_nacimiento',$fecha_nacimiento);

            return $stmt->execute();
        }

        public static function exist_mail($mail){
            $database = new Database();
            $conn = $database->getConnection();
            $stmt = $conn->prepare('SELECT * FROM usuarios where correo = :email');
            $stmt->bindParam(':email',$mail);
            if($stmt->execute()){
                $result = $stmt->fetchAll();
                return count($result);
            } else {
                return -1;
            }
        }

        
    }

?>