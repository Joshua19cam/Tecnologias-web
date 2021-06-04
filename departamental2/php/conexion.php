<?php
//CONEXION
$servidor="localhost";
$usuario="root";
$clave="";
$basedatos="electivas";

$conexion=mysqli_connect($servidor,$usuario,$clave,$basedatos);
mysqli_set_charset($conexion,"utf8")
?>