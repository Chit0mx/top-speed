<?php 

    $Categoria = $_POST  ['Categoria'];
    $Marca = $_POST  ['Marca'];
    $Modelo = $_POST  ['Modelo'];
    $Anio = $_POST  ['Año'];
    $Motor = $_POST  ['Motor'];
    $HP = $_POST  ['HP'];
    $Vel = $_POST  ['Vel'];
    $Transmision = $_POST  ['Transmision'];
    $IMG = $_POST ['archivo'];

if(isset($_FILES["archivo"])){
    echo "subido".$_FILES["archivo"]["name"];
    $destino = "IMG/".$_FILES["archivo"]["name"];
    $guardar = "../IMG/".$_FILES["archivo"]["name"];
    $ruta =$_FILES["archivo"]["tmp_name"];
    copy($ruta,$guardar);

}else{
    echo 'no subido';
}
    $datos = array(
        
        'IMG' => $destino,
        'Categoria' => $Categoria,
        'Marca' => $Marca,
        'Modelo' => $Modelo,
        'Anio' => $Anio,
        'Motor' => $Motor,
        'HP' => $HP,
        'Velocidad' => $Vel,
        'Transmision' => $Transmision
    );

    $json_string = json_encode($datos);
    $file = "../JSON/autos.json";
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
    header('location: ../autos.html');
?>