$(document).ready(function(){

  loadDataJSON();
  editarValue01();
  editarValue02();
  listar();
  guardar();
  eliminar();
  editar();

});

$.fn.DataTable.ext.pager.numbers_length = 5;
//listamos los datos...
var listar = function(){
  var t = $('#membersInGroup').DataTable({
      "responsive": true,
      "dom": '<"newtoolbar">frtip',

      "destroy":true,
      "ajax":{
        "method":"POST",
        "url": "../php/updateResource/showDataMember.php"
      },

      "columns":[
        {"data":"nombre"},
        {"data":"posicion"},
        {"data":"descripcion"},
        {"data":"correo"},
        {"data":"linkedin"},
        {"data":"scholarProfile"},
        {"data":"researchGateProfile"},
        {"defaultContent": "<button type='button' class='detalle btn btn-success'><i class='fa fa-picture-o'></i></button> <button type='button' class='editar btn btn-primary' data-toggle='modal' data-target='#myModalEditar'><i class='fa fa-pencil-square-o'></i></button>	<button type='button' class='eliminar btn btn-danger' data-toggle='modal' data-target='#modalEliminar' ><i class='fa fa-trash-o'></i></button>"}
      ]
  });
  $('#demo-custom-toolbar2').appendTo($("div.newtoolbar"));

  obtener_id_eliminar("#membersInGroup tbody", t);
  obtener_id_detalle("#membersInGroup tbody", t);
  obtener_id_editar("#membersInGroup tbody", t);
}

var obtener_id_detalle = function(tbody, table){
  $(tbody).on("click", "button.detalle", function(){
    var data = table.row( $(this).parents("tr") ).data();
    var idmember =data.fotoPrincipal;
    location.href = "../../resources/pictures/team/"+idmember;
  });
}

var obtener_id_eliminar = function(tbody, table){
  $(tbody).on("click", "button.eliminar", function(){
    var data = table.row( $(this).parents("tr") ).data();
    var idmember = $("#frmEliminar #idmember").val(data.idintegrante);
  });
}

var obtener_id_editar = function(tbody, table){
  $(tbody).on("click", "button.editar", function(){
    var data = table.row( $(this).parents("tr") ).data();
    var idmember = $("#editarMiembro #idmember").val(data.idintegrante);
    var name = $("#editarMiembro #name").val(data.nombre);
    var pos = $("#editarMiembro #pos").val(data.posicion);
    var desc = $("#editarMiembro #desc").val(data.descripcion);
    var correo = $("#editarMiembro #correo").val(data.correo);
    var linkedint = $("#editarMiembro #linkedint").val(data.linkedin);
    var scholar = $("#editarMiembro #scholar").val(data.scholarProfile);
    var research = $("#editarMiembro #research").val(data.researchGateProfile);

  });
}


var eliminar = function(){
  $("#eliminar-integrante").on("click", function(){
    var idmember = $("#frmEliminar #idmember").val();
    $.ajax({
      method:"POST",
      url: "../php/updateResource/removeDataMember.php",
      data: {
          "idmember": idmember
          }
    }).done( function( info ){
      var json_info = JSON.parse( info );
      location.reload(true);
    });
  });
}

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

      //cargamos las partes iniciales
      $(".data1").html(jsonObj.teamInfo.redTitle);
      $(".data2").html(jsonObj.teamInfo.title);

    }
  }
  http_request.open("GET", data_file, true);
  http_request.send();
}

var editarValue01 = function(){
  $("#editarData01").on("click", function(){
    var valueInput1 = $("#editardata01 #data01").val();

    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateMembers2.php?option=redTitle",
      data: {
          "content1": valueInput1

          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}

var editarValue02 = function(){
  $("#editarData02").on("click", function(){
    var valueInput1 = $("#editardata02 #data02").val();

    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateMembers2.php?option=title",
      data: {
          "content1": valueInput1

          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}

var guardar = function(){
  $("#agregar").on("click", function(){

    var name = $("#agregarMiembro #name").val();
    var pos = $("#agregarMiembro #pos").val();
    var desc = $("#agregarMiembro #desc").val();
    var correo = $("#agregarMiembro #correo").val();
    var linkedint = $("#agregarMiembro #linkedint").val();
    var scholar = $("#agregarMiembro #scholar").val();
    var research = $("#agregarMiembro #research").val();

    $.ajax({
      method: "POST",
      url: "../php/updateResource/addMember.php",
      data: {
          "name": name,
          "pos": pos,
          "desc": desc,
          "correo": correo,
          "linkedint": linkedint,
          "scholar": scholar,
          "research": research
        }
    }).done( function( info ){

      var json_info = JSON.parse( info );
      location.reload(true);
    });
  });
}

var editar = function(){
  $("#editar").on("click", function(){

    var idmember = $("#editarMiembro #idmember").val();
    var name = $("#editarMiembro #name").val();
    var pos = $("#editarMiembro #pos").val();
    var desc = $("#editarMiembro #desc").val();
    var correo = $("#editarMiembro #correo").val();
    var linkedint = $("#editarMiembro #linkedint").val();
    var scholar = $("#editarMiembro #scholar").val();
    var research = $("#editarMiembro #research").val();

    $.ajax({
      method: "POST",
      url: "../php/updateResource/editMember.php",
      data: {
          "idmember": idmember,
          "name": name,
          "pos": pos,
          "desc": desc,
          "correo": correo,
          "linkedint": linkedint,
          "scholar": scholar,
          "research": research
        }
    }).done( function( info ){

      var json_info = JSON.parse( info );
      location.reload(true);
    });
  });
}
