$(document).ready(function(){

  listar();
  guardar();
  eliminar();
  editar();
});

$.fn.DataTable.ext.pager.numbers_length = 5;

var listar = function(){
  var t = $('#projects').DataTable({
      "responsive": true,
      "dom": '<"newtoolbar">frtip',

      "destroy":true,
      "ajax":{
        "method":"POST",
        "url": "../php/updateResource/showDataProjects.php"
      },

      "columns":[
        {"data":"nombreProyecto"},
        {"data":"descripcionProyecto"},
        {"data":"financiamiento"},
        {"data":"nombre"},
        {"defaultContent": "<button type='button' class='detalle btn btn-success'><i class='fa fa-picture-o'></i></button> <button type='button' class='editar btn btn-primary' data-toggle='modal' data-target='#myModalEditar'><i class='fa fa-pencil-square-o'></i></button>	<button type='button' class='eliminar btn btn-danger' data-toggle='modal' data-target='#modalEliminar' ><i class='fa fa-trash-o'></i></button>"}
      ]
  });
  $('#demo-custom-toolbar2').appendTo($("div.newtoolbar"));

  obtener_id_eliminar("#projects tbody", t);
  obtener_id_editar("#projects tbody", t);
  obtener_id_detalle("#projects tbody", t);
}

var obtener_id_editar = function(tbody, table){
  $(tbody).on("click", "button.editar", function(){
    var data = table.row( $(this).parents("tr") ).data();
    var idproyecto = $("#editarProyecto #idproyecto").val(data.idproyecto);
    var name = $("#editarProyecto #name").val(data.nombreProyecto);
    var desc = $("#editarProyecto #desc").val(data.descripcionProyecto);
    var funding = $("#editarProyecto #funding").val(data.financiamiento);

  });
}

var obtener_id_detalle = function(tbody, table){
  $(tbody).on("click", "button.detalle", function(){
    var data = table.row( $(this).parents("tr") ).data();
    var idmember =data.namePictureProject;
    location.href = "../../resources/pictures/project/"+idmember;
  });
}

var obtener_id_eliminar = function(tbody, table){
  $(tbody).on("click", "button.eliminar", function(){
    var data = table.row( $(this).parents("tr") ).data();
    var idproyecto = $("#frmEliminar #idproyecto").val(data.idproyecto);
  });
}

var guardar = function(){
  $("#agregar").on("click", function(){

    var name = $("#agregarProyecto #name").val();
    var desc = $("#agregarProyecto #desc").val();
    var funding = $("#agregarProyecto #funding").val();
    var autor = $("#agregarProyecto #autor").val();

    $.ajax({
      method: "POST",
      url: "../php/updateResource/addProject.php",
      data: {
          "name": name,
          "desc": desc,
          "funding": funding,
          "autor": autor
        }
    }).done( function( info ){

      var json_info = JSON.parse( info );
      location.reload(true);
    });
  });
}

var eliminar = function(){
  $("#eliminar-proyecto").on("click", function(){
    var idproyecto = $("#frmEliminar #idproyecto").val();
    $.ajax({
      method:"POST",
      url: "../php/updateResource/removeProyecto.php",
      data: {
          "idproyecto": idproyecto
          }
    }).done( function( info ){
      var json_info = JSON.parse( info );
      location.reload(true);
    });
  });
}

var editar = function(){
  $("#editar").on("click", function(){

    var idproyecto = $("#editarProyecto #idproyecto").val();
    var name = $("#editarProyecto #name").val();
    var desc = $("#editarProyecto #desc").val();
    var funding = $("#editarProyecto #funding").val();
    var autor = $("#editarProyecto #autor").val();

    $.ajax({
      method: "POST",
      url: "../php/updateResource/editProyecto.php",
      data: {
          "idproyecto": idproyecto,
          "name": name,
          "desc": desc,
          "funding": funding,
          "autor": autor
        }
    }).done( function( info ){

      var json_info = JSON.parse( info );
      location.reload(true);
    });
  });
}
