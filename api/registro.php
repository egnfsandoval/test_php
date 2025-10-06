<?php
    require_once('../includes/Cliente.class.php');
    header('Content-Type: application/json');
    $datos = json_decode(file_get_contents('php://input'));
    if($datos->token =='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6YQm_k4fF-GZY'){
        if($_SERVER['REQUEST_METHOD'] == 'POST' && $datos != null){
               
             if(Cliente::exist_mail($datos->correo)>0){
                $response = [
                    'code' => 200,
                    'mensaje' => 'El correo ya ha sido utilizado, favor de ingresar otro correo'
                ];
             }else{
               if(Cliente::create_client(htmlspecialchars(trim($datos->nombre), ENT_QUOTES, 'UTF-8'), filter_var($datos->correo, FILTER_SANITIZE_EMAIL), password_hash(filter_var($datos->password, FILTER_SANITIZE_STRING), PASSWORD_DEFAULT), $datos->fnac)){
                $response = [
                    'code' => 200,
                    'mensaje' => 'Usuario almacenado con exito'
                ];
               }else{
                $response = [
                    'code' => 300,
                    'mensaje' => 'Error al almacenar al usuario'
                ];
               }
             }
                // Envía la respuesta al cliente
                echo json_encode($response);
                header("HTTP/1.1 200 OK");
                exit();
        }

    }else{
        $response = [
            'code' => 200,
            'mensaje' => 'Petición inválida, token no válido'
        ];
        echo json_encode($response);
        header("HTTP/1.1 200 OK");
        exit();
    }

?>