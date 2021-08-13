<?php 
if(isset($_POST['Nombre']) || isset($_POST['Correo']) || isset($_POST['Comentario']) ){

    $nombre = $_POST  ['Nombre'];
    $correo = $_POST  ['Correo'];
    $comentario = $_POST  ['Comentario'];

}

    $datos = array(

        'Nombre' => $nombre,
        'Correo' => $correo,
        'Comentario' => $comentario

    );

    $json_string = json_encode($datos);
    $file = "../JSON/comentarios.json";
    $actual = file_get_contents($file);

    $open = fopen($file, "w+");
    if(empty($actual)){
        $actual = "[\n";
        $actual .= $json_string . "]";
    }else{
        $actual = str_replace("]","",$actual);
        $actual .= ",\n" . $json_string . "]";
    }
    fwrite($open, $actual);
    fclose($open);
    header('location: ../contacto.html');
?>