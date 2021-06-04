/*CONTROLADOR*/ 
function actionCreate() {
    
    var tabla=$('#example1').DataTable();
    var eje_tematico_create=document.getElementById("eje_tematico_create").value;
    var modalidad_create=document.getElementById("modalidad_create").value;
    var descripcion_create=document.getElementById("descripcion_create").value;
    var factor_create=document.getElementById("factor_create").value;
    var ejemplos_create=document.getElementById("ejemplos_create").value;

    //modelo
    $.ajax({
        url: "php/crud-denominacion.php",
        method:'POST',
        data: {
            eje_tematico : eje_tematico_create,
            modalidad : modalidad_create,
            descripcion : descripcion_create,
            factor : factor_create,
            ejemplos : ejemplos_create,
            accion : 'Create'
        },
        success: function( resultado ) {
            //resultado es una cadena String
            var objetoJSON=JSON.parse(resultado);

            if(objetoJSON.estado==1){
                var botones='<a class="btn btn-info btn-sm" data-toggle="modal" data-target="#modal-lg-actualizar" onclick="recuperarDatosUpdate('+objetoJSON.id+');" href="#"> <i class="fas fa-pencil-alt"> </i> Actualizar</a> <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal-default" onclick="idSeleccionEliminar('+objetoJSON.id+');" href="#"><i class="fas fa-trash"></i> Eliminar</a>'; 
                tabla.row.add([
                    eje_tematico_create,
                    modalidad_create,
                    descripcion_create,
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
        url: "php/crud-denominacion.php",
        method:'GET',
        data: {
            accion : 'Read'
        },
        success: function( resultado ) {
            var objetoJSON=JSON.parse(resultado);
            
            if(objetoJSON.estado==1){
                //mostrar registro de l a base de datos
                var tabla=$('#example1').DataTable();
                for(var denominacion of objetoJSON.denominaciones){
                    var botones='<a class="btn btn-info btn-sm" data-toggle="modal" data-target="#modal-lg-actualizar" onclick="recuperarDatosUpdate('+denominacion.id+');" href="#"> <i class="fas fa-pencil-alt"> </i> Actualizar</a> <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal-default" onclick="idSeleccionEliminar('+denominacion.id+');" href="#"><i class="fas fa-trash"></i> Eliminar</a>'; 
                    tabla.row.add([
                        denominacion.eje_tematico,
                        denominacion.modalidad,
                        denominacion.descripcion,
                        botones
                    ]).node().id='renglon_'+denominacion.id;
                    
                    tabla.draw(false);                 
                }
            }else{
                //no nos interesa mostrar algo
            }

        }
      });

 
}
function actionUpdate() {
    var eje_tematico_update=document.getElementById("eje_tematico_update").value;
    var modalidad_update=document.getElementById("modalidad_update").value;
    var descripcion_update=document.getElementById("descripcion_update").value;
    var factor_update=document.getElementById("factor_update").value;
    var ejemplos_update=document.getElementById("ejemplos_update").value;

    $.ajax({
        url: "php/crud-denominacion.php",
        method:'POST',
        data: {
            id:idAActualizar,
            eje_tematico : eje_tematico_update,
            modalidad : modalidad_update,
            descripcion : descripcion_update,
            factor : factor_update,
            ejemplos : ejemplos_update,
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
                renglon[0]=eje_tematico_update;
                renglon[1]=modalidad_update;
                renglon[2]=descripcion_update;

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
        url: "php/crud-denominacion.php",
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
        url: "php/crud-denominacion.php",
        method:'GET',
        data: {
          id: idAActualizar,
          accion: 'Read'
        },
        success: function( resultado ) {
            var objetoJSON=JSON.parse(resultado);
            if(objetoJSON.estado==1){
                $("#eje_tematico_update").val(objetoJSON.eje_tematico);
                $("#modalidad_update").val(objetoJSON.modalidad);
                $("#descripcion_update").val(objetoJSON.descripcion);
                $("#factor_update").val(objetoJSON.factor);
                $("#ejemplos_update").val(objetoJSON.ejemplos);
            }else{
                alert(objetoJSON.mensaje);
            }
        }
      });
}

function idSeleccionEliminar(id) {
    idAEliminar=id;
}