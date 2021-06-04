<?php
/*modelo de datos MVC (Modelo Vista Controlador)
Modelo = .php
Vista = .html
Controlador = .js

CRUD = create, read, update, delete
*/

include("conexion.php");

if(isset($_POST['accion']))
    $accion=$_POST['accion'];
if(isset($_GET['accion']))
    $accion=$_GET['accion'];

switch ($accion) {
    case 'Create':
        # code...
        accionCreatePHP($conexion);
        break;
    case 'Read':
        # code...
        accionReadPHP($conexion);
        break;
    case 'Delete':
        # code...
        accionDeletePHP($conexion);
        break;
    case 'Update':
        # code...
        accionUpdatePHP($conexion);
        break;
    default:
        # code...
        break;
}

    function accionCreatePHP($conexion){
    # code...
    $eje_tematico=$_POST['eje_tematico'];
    $modalidad=$_POST['modalidad'];
    $descripcion=$_POST['descripcion'];
    $factor=$_POST['factor'];
    $ejemplos=$_POST['ejemplos'];
    //$accion=$_POST['accion'];

    $Query="INSERT INTO denominacion (id, eje_tematico, modalidad, descripcion, factor, ejemplos) VALUES (NULL, '".$eje_tematico."', '".$modalidad."', '".$descripcion."', ".$factor.", '".$ejemplos."')";
    // crea el registro n la base de datos
    $Resultado=mysqli_query($conexion,$Query);

    $Respuesta=array();

    if($Resultado>=1){
        //todo esta bien
        $Respuesta["estado"]=1;//Respuesta para el programador
        $Respuesta["mensaje"]="La informacion se gurdo correctamente";//Respuesta para alumnos o encargado de electivas
        $Respuesta["id"]=mysqli_insert_id($conexion);//Respuesta para el programador
        echo json_encode($Respuesta);
    }else{
        //no todo ok 
        $Respuesta["estado"]=0;//Respuesta para el programador
        $Respuesta["mensaje"]="Ocurrio un error desconocido";//Respuesta para alumnos o encargado de electivas
        $Respuesta["id"]=-1;//Respuesta para el programador
        echo json_encode($Respuesta);
    }
    mysqli_close($conexion);
}
function accionReadPHP($conexion)
{
    $Respuesta=array();

    if (isset($_GET['id'])) {
        $id=$_GET["id"];
        $Query="SELECT * FROM denominacion WHERE id=".$id;
        $Resultado=mysqli_query($conexion,$Query);
        $numeroRegistros=mysqli_num_rows($Resultado);

        if($numeroRegistros>=1){
            $Registro=mysqli_fetch_array($Resultado);
            $Respuesta["estado"]=1;
            $Respuesta["mensaje"]="Si hay registros para mostrar";

            $Respuesta["id"]           =$Registro["id"];
            $Respuesta["eje_tematico"] =$Registro["eje_tematico"];
            $Respuesta["modalidad"]    =$Registro["modalidad"];
            $Respuesta["descripcion"]  =$Registro["descripcion"];
            $Respuesta["factor"]       =$Registro["factor"];
            $Respuesta["ejemplos"]     =$Registro["ejemplos"];
        }else{
            $Respuesta["estado"]=0;
            $Respuesta["mensaje"]="NO hay registros para mostrar";
        }
    }else{
        $Query="SELECT * FROM denominacion";
        $Resultado=mysqli_query($conexion,$Query);
        $numeroRegistros=mysqli_num_rows($Resultado);
        
        if($numeroRegistros>=1){
            $Respuesta["estado"]=1;
            $Respuesta["mensaje"]="Si hay registros para mostrar";
            $Respuesta["denominaciones"]=array();

            while ($Registro=mysqli_fetch_array($Resultado)) {
                $objetoDenominacion=array();
                $objetoDenominacion["id"]           =$Registro["id"];
                $objetoDenominacion["eje_tematico"] =$Registro["eje_tematico"];
                $objetoDenominacion["modalidad"]    =$Registro["modalidad"];
                $objetoDenominacion["descripcion"]  =$Registro["descripcion"];
                $objetoDenominacion["factor"]       =$Registro["factor"];
                $objetoDenominacion["ejemplos"]     =$Registro["ejemplos"];

                array_push($Respuesta["denominaciones"],$objetoDenominacion);
            }
            
        }else{
            $Respuesta["estado"]=0;
            $Respuesta["mensaje"]="NO hay registros para mostrar";
            
        }
        
    }
    echo json_encode($Respuesta);
    mysqli_close($conexion);
}
function accionDeletePHP($conexion)
{
    $Respuesta=array();
    $id=$_POST["id"];
    $Query="DELETE FROM denominacion WHERE denominacion.id = ".$id;    
    $Resultado=mysqli_query($conexion,$Query);
    $numeroRegistros=mysqli_affected_rows($conexion);

    if($numeroRegistros>=1){
        $Respuesta["estado"]=1;
        $Respuesta["mensaje"]="El registro se elimino correctamente";
    }else{
        $Respuesta["estado"]=0;
        $Respuesta["mensaje"]="Ocurrio un error desconocido";
    }
    
    echo json_encode($Respuesta);
    mysqli_close($conexion);
}
function accionUpdatePHP($conexion)
{
    $Respuesta=array();
    $id=$_POST["id"];
    $eje_tematico=$_POST['eje_tematico'];
    $modalidad=$_POST['modalidad'];
    $descripcion=$_POST['descripcion'];
    $factor=$_POST['factor'];
    $ejemplos=$_POST['ejemplos'];

    $Query="UPDATE denominacion SET eje_tematico = '".$eje_tematico."', modalidad = '".$modalidad."', descripcion = '".$descripcion."', factor = ".$factor.", ejemplos = '".$ejemplos."' WHERE denominacion.id = ".$id;
    mysqli_query($conexion,$Query);
    $numeroRegistros=mysqli_affected_rows($conexion);


    if($numeroRegistros>=1){
        $Respuesta["estado"]=1;
        $Respuesta["mensaje"]="El registro se actualizó correctamente";
    }else{
        $Respuesta["estado"]=0;
        $Respuesta["mensaje"]="Ocurrio un error desconocido";
    }
    echo json_encode($Respuesta);
    mysqli_close($conexion);
}
?>