$(document).ready(function(){

  listar();
  guardar();
  eliminar();
  editar();
});

$.fn.DataTable.ext.pager.numbers_length = 5;

var listar = function(){
  var t = $('#publicaciones').DataTable({
      "responsive": true,
      "dom": '<"newtoolbar">frtip',

      "destroy":true,
      "ajax":{
        "method":"POST",
        "url": "../php/updateResource/showDataPublicaciones.php"
      },

      "columns":[
        {"data":"descripcionPublicacion"},
        {"data":"estadoPublicacion"},
        {"data":"linkAcceso"},
        {"data":"nombre"},
        {"defaultContent": "<button type='button' class='detalle btn btn-success'><i class='fa fa-file'></i></button> <button type='button' class='editar btn btn-primary' data-toggle='modal' data-target='#myModalEditar'><i class='fa fa-pencil-square-o'></i></button>	<button type='button' class='eliminar btn btn-danger' data-toggle='modal' data-target='#modalEliminar' ><i class='fa fa-trash-o'></i></button>"}
      ]
  });
  $('#demo-custom-toolbar2').appendTo($("div.newtoolbar"));

  obtener_id_eliminar("#publicaciones tbody", t);
  obtener_id_detalle("#publicaciones tbody", t);
  obtener_id_editar("#publicaciones tbody", t);
}

var obtener_id_editar = function(tbody, table){
  $(tbody).on("click", "button.editar", function(){
    var data = table.row( $(this).parents("tr") ).data();
    var idpublication = $("#editarPublication #idpublication").val(data.idpublicacion);
    var desc = $("#editarPublication #desc").val(data.descripcionPublicacion);
    var link = $("#editarPublication #link").val(data.linkAcceso);

  });
}

var obtener_id_detalle = function(tbody, table){
  $(tbody).on("click", "button.detalle", function(){
    var data = table.row( $(this).parents("tr") ).data();
    var idmember =data.linkAcceso;
    location.href = idmember;
  });
}
var obtener_id_eliminar = function(tbody, table){
  $(tbody).on("click", "button.eliminar", function(){
    var data = table.row( $(this).parents("tr") ).data();
    var idpublication = $("#frmEliminar #idpublication").val(data.idpublicacion);
  });
}

var guardar = function(){
  $("#agregar").on("click", function(){

    var desc = $("#agregarPublicacion #desc").val();
    var link = $("#agregarPublicacion #link").val();
    var status = $("#agregarPublicacion #status").val();
    var autor = $("#agregarPublicacion #autor").val();

    $.ajax({
      method: "POST",
      url: "../php/updateResource/addPublication.php",
      data: {
          "desc": desc,
          "link": link,
          "status": status,
          "autor": autor
        }
    }).done( function( info ){

      var json_info = JSON.parse( info );
      location.reload(true);
    });
  });
}

var eliminar = function(){
  $("#eliminar-publicacion").on("click", function(){
    var idpublication = $("#frmEliminar #idpublication").val();
    $.ajax({
      method:"POST",
      url: "../php/updateResource/removePublicacion.php",
      data: {
          "idpublication": idpublication
          }
    }).done( function( info ){
      var json_info = JSON.parse( info );
      location.reload(true);
    });
  });
}

var editar = function(){
  $("#editar").on("click", function(){

    var idpublication = $("#editarPublication #idpublication").val();
    var desc = $("#editarPublication #desc").val();
    var link = $("#editarPublication #link").val();
    var status = $("#editarPublication #status").val();
    var autor = $("#editarPublication #autor").val();

    $.ajax({
      method: "POST",
      url: "../php/updateResource/editPublication.php",
      data: {
          "idpublication": idpublication,
          "desc": desc,
          "link": link,
          "status": status,
          "autor": autor
        }
    }).done( function( info ){

      var json_info = JSON.parse( info );
      location.reload(true);
    });
  });
}
