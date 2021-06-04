function actionCreate() {
    
    var tabla=$('#example1').DataTable();
    var nombre_actividad_create=document.getElementById("nombre_actividad_create").value;
    var fecha_inicio_create=document.getElementById("fecha_inicio_create").value; //no se que poner para guardar
    var fecha_termino_create=document.getElementById("fecha_termino_create").value;
    var horas_create=document.getElementById("horas_create").value;
    var archivo_create=document.getElementById("archivo_create").value; // no se como gardar un documento
    var observaciones_create=document.getElementById("observaciones_create").value;

    //modelo
    $.ajax({
        url: "php/crud-constancias.php",
        method:'POST',
        data: {
            actividad : nombre_actividad_create,
            fecha_inicio : fecha_inicio_create,
            fecha_fin : fecha_termino_create,
            horas : horas_create,
            archivo : archivo_create,
            observaciones : observaciones_create,
            accion : 'Create'
        },
        success: function( resultado ) {
            alert(resultado);
            //resultado es una cadena String
            var objetoJSON=JSON.parse(resultado);

            if(objetoJSON.estado==1){
                var botones='<a class="btn btn-info btn-sm" data-toggle="modal" data-target="#modal-lg-actualizar" onclick="recuperarDatosUpdate('+objetoJSON.id+');" href="#"> <i class="fas fa-pencil-alt"> </i> Editar</a> <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal-default" onclick="idSeleccionEliminar('+objetoJSON.id+');" href="#"><i class="fas fa-trash"></i> Eliminar</a>'; 
                tabla.row.add([
                    nombre_actividad_create,
                    fecha_inicio_create,
                    horas_create,
                    botones
                ]).node().id='renglon_'+objetoJSON.id;
                tabla.draw(false);

                alert(objetoJSON.mensaje);
                $('#modal-lg').modal ('hide');//hide ocultar - show mostrar

            }else{
                alert(objetoJSON.mensaje);
            }
        }
      });
}
function actionRead() {
    $.ajax({
        url: "php/crud-constancias.php",
        method:'GET',
        data: {
            accion : 'Read'
        },
        success: function( resultado ) {
            var objetoJSON=JSON.parse(resultado);
            
            if(objetoJSON.estado==1){
                //mostrar registro de l a base de datos
                var tabla=$('#example1').DataTable();
                for(var constancia of objetoJSON.constancias){
                    var botones='<a class="btn btn-info btn-sm" data-toggle="modal" data-target="#modal-lg-actualizar" onclick="recuperarDatosUpdate('+constancia.id+');" href="#"> <i class="fas fa-pencil-alt"> </i> Actualizar</a> <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal-default" onclick="idSeleccionEliminar('+constancia.id+');" href="#"><i class="fas fa-trash"></i> Eliminar</a>'; 
                    tabla.row.add([
                        constancia.actividad,
                        constancia.fecha_inicio,
                        constancia.horas,
                        botones
                    ]).node().id='renglon_'+constancia.id;
                    
                    tabla.draw(false);                 
                }
            }else{
                //no nos interesa mostrar algo
            }

        }
      });

 
}
function actionUpdate() {
    var nombre_actividad_update=document.getElementById("nombre_actividad_update").value;
    var fecha_inicio_update=document.getElementById("fecha_inicio_update").value; //no se que poner para guardar
    var fecha_termino_update=document.getElementById("fecha_termino_update").value;
    var horas_update=document.getElementById("horas_update").value;
    var archivo_update=document.getElementById("archivo_update").value; // no se como gardar un documento
    var observaciones_update=document.getElementById("observaciones_update").value;

    $.ajax({
        url: "php/crud-constancias.php",
        method:'POST',
        data: {
            id:idAActualizar,
            actividad : nombre_actividad_update,
            fecha_inicio : fecha_inicio_update,
            fecha_fin : fecha_termino_update,
            horas : horas_update,
            archivo : archivo_update,
            observaciones : observaciones_update,
            accion:'Update'
        },
        success: function( resultado ) {
            var objetoJSON=JSON.parse(resultado);
            if (objetoJSON.estado==1) {
                alert(objetoJSON.mensaje);
                //debemos actualiar el renglon de la tabla
                var tabla=$('#example1').DataTable();//referencia a la tabla

                var renglon=tabla.row("#renglon_".idAActualizar).data();//temporal de los datos del renglon
                //actualizar temporal del renglon
                renglon[0]=nombre_actividad_update;
                renglon[1]=fecha_inicio_update;
                renglon[2]=horas_update;

                tabla.row("#renglon_".idAActualizar).data(renglon);
            } else {
                alert(objetoJSON.mensaje);
            }
            $('#modal-lg-actualizar').modal ('hide');//hide ocultar - show mostrar            
        }
      });
    
}
function actionDelete() {    
    $.ajax({
        url: "php/crud-constancias.php",
        method:'POST',
        data: {
          id:idAEliminar,
          accion:'Delete'
        },
        success: function( resultado ) {
            var objetoJSON=JSON.parse(resultado); 
                var tabla=$('#example1').DataTable();
            if(objetoJSON.estado==1){
                //se borrara la table el renglon que se selecciono
                
                tabla.row("#renglon_"+idAEliminar).remove().draw();
            }
          alert(objetoJSON.mensaje);
          $('#modal-default').modal ('hide');//hide ocultar - show mostrar
        }
      });
}

function recuperarDatosUpdate(id) {
    idAActualizar=id;
    $.ajax({
        url: "php/crud-constancias.php",
        method:'GET',
        data: {
          id: idAActualizar,
          accion: 'Read'
        },
        success: function( resultado ) {
            var objetoJSON=JSON.parse(resultado);
            if(objetoJSON.estado==1){
                $("#nombre_actividad_update").val(objetoJSON.actividad);
                $("#fecha_inicio_update").val(objetoJSON.fecha_inicio);
                $("#fecha_termino_update").val(objetoJSON.fecha_fin);
                $("#horas_update").val(objetoJSON.horas);
                $("#archivo_update").val(objetoJSON.archivo);
                $("#observaciones_update").val(objetoJSON.observaciones);
            }else{
                alert(objetoJSON.mensaje);
            }
        }
      });
}

function idSeleccionEliminar(id) {
    idAEliminar=id;
}