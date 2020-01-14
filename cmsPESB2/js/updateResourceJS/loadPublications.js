$(document).ready(function(){

  loadDataJSON();
  editar();
  //eliminar();
  //agregar();

});

$.fn.DataTable.ext.pager.numbers_length = 5;

//funcion que permite cargar un archivo json...
var loadDataJSON = function(){


  var data_file = "../../resources/JSON/infoPESB2.json";
  var http_request = new XMLHttpRequest();
  try{
    // Opera 8.0+, Firefox, Chrome, Safari
    http_request = new XMLHttpRequest();
  }catch (e){
    // Internet Explorer Browsers
      try{
        http_request = new ActiveXObject("Msxml2.XMLHTTP");
    }catch (e) {
      try{
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
      }catch (e){
        // Something went wrong
        alert("Your browser broke!");
        return false;
      }
    }
  }

  http_request.onreadystatechange = function(){
    if (http_request.readyState == 4  ){
      // Javascript function JSON.parse to parse JSON data
      var jsonObj = JSON.parse(http_request.responseText);

      var publications = jsonObj.publications.publicationsData;

      var t = $('#menuBarContent').DataTable({
        "responsive": true,
        "destroy":true,
        "data" : publications,
        "columns" : [
             { "data" : "ID" },
             { "data" : "publication"},
             {"defaultContent": "<button type='button' class='edit btn btn-primary' data-toggle='modal' data-target='#myModalEditar'><i class='fa fa-pencil-square-o'></i></button>	<button type='button' class='delete btn btn-danger' data-toggle='modal' data-target='#modalEliminar' ><i class='fa fa-trash-o'></i></button>"}
         ]
      });

      //funciones para obtener informacion editar/eliminar
      obtener_id_eliminar("#menuBarContent tbody", t);
  		obtener_data_editar("#menuBarContent tbody", t);
    }
  }
  http_request.open("GET", data_file, true);
  http_request.send();
}

var obtener_id_eliminar = function(tbody, table){
  $(tbody).on("click", "button.delete", function(){
    var data = table.row( $(this).parents("tr") ).data();
    var idPublication = $("#frmEliminar #idPublication").val(data.ID);
  });
}

var obtener_data_editar = function(tbody, table){
  $(tbody).on("click", "button.edit", function(){
    var data = table.row( $(this).parents("tr") ).data();
    var idPublication = $("#frmEditar #idPublication").val(data.ID);
    var detalle = $("#frmEditar #detalle").val( data.publication);

  });
}

var editar = function(){
  $("#editar-usuario").on("click", function(){

    var idPublication = $("#frmEditar #idPublication").val();
    var detalle = $("#frmEditar #detalle").val();

    $.ajax({
      method: "POST",
      url: "../php/updateResource/editDataPublication.php",
      data: {
        "idPublication"   : idPublication,
        "detalle"   : detalle
      }

    }).done( function( info ){
      
      location.reload(true);
    });
  });
}
