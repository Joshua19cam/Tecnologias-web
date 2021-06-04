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
    $actividad=$_POST['actividad'];
    //$fecha_inicio=$_POST['fecha_inicio'];
    //$fecha_fin=$_POST['fecha_fin'];
    $horas=$_POST['horas'];
    $archivo=$_POST['archivo'];
    $observaciones=$_POST['observaciones'];
    //$accion=$_POST['accion'];

    $Query="INSERT INTO constancia (id, actividad, /*fecha_inicio, fecha_fin,*/horas, archivo, observaciones) VALUES (NULL, '".$actividad."', '".$fecha_inicio."', '".$fecha_fin."', ".$horas.", '".$archivo."' '".$observaciones."')";
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
        $Query="SELECT * FROM constancia WHERE id=".$id;
        $Resultado=mysqli_query($conexion,$Query);
        $numeroRegistros=mysqli_num_rows($Resultado);

        if($numeroRegistros>=1){
            $Registro=mysqli_fetch_array($Resultado);
            $Respuesta["estado"]=1;
            $Respuesta["mensaje"]="Si hay registros para mostrar";

            $Respuesta["id"]                =$Registro["id"];
            $Respuesta["actividad"]         =$Registro["actividad"];
            $Respuesta["fecha_inicio"]      =$Registro["fecha_inicio"];
            $Respuesta["fecha_fin"]         =$Registro["fecha_fin"];
            $Respuesta["horas"]             =$Registro["horas"];
            //$Respuesta["archivos"]          =$Registro["archivos"];
            $Respuesta["observaciones"]     =$Registro["observaciones"];
        }else{
            $Respuesta["estado"]=0;
            $Respuesta["mensaje"]="NO hay registros para mostrar";
        }
    }else{
        $Query="SELECT * FROM constancia";
        $Resultado=mysqli_query($conexion,$Query);
        $numeroRegistros=mysqli_num_rows($Resultado);
        
        if($numeroRegistros>=1){
            $Respuesta["estado"]=1;
            $Respuesta["mensaje"]="Si hay registros para mostrar";
            $Respuesta["constancias"]=array();

            while ($Registro=mysqli_fetch_array($Resultado)) {
                $objetoConstancia=array();
                $objetoConstancia["id"]           =$Registro["id"];
                $objetoConstancia["actividad"]    =$Registro["actividad"];
                $objetoConstancia["fecha_inicio"] =$Registro["fecha_inicio"];
                $objetoConstancia["fecha_fin"]    =$Registro["fecha_fin"];
                $objetoConstancia["horas"]        =$Registro["horas"];
                //$objetoConstancia["archivos"]     =$Registro["archivos"];
                $objetoConstancia["observaciones"]=$Registro["observaciones"];

                array_push($Respuesta["constancias"],$objetoConstancia);
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
    $Query="DELETE FROM constancia WHERE constancia.id = ".$id;    
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
    $actividad=$_POST['actividad'];
    $fecha_inicio=$_POST['fecha_inicio'];
    $fecha_fin=$_POST['fecha_fin'];
    $horas=$_POST['horas'];
    $archivo=$_POST['archivo'];
    $observaciones=$_POST['observaciones'];

    $Query="UPDATE constancia SET actividad = '".$actividad."', fecha_inicio = '".$fecha_inicio."', fecha_fin = '".$fecha_fin."', horas = ".$horas.", archivo = '".$archivo."', observaciones = '".$observaciones."' WHERE constancia.id = ".$id;
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