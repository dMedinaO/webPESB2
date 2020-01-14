$(document).ready(function(){

  loadDataJSON();
  editar01();
  editar02();
  editar03();
  editar04();

});

$.fn.DataTable.ext.pager.numbers_length = 5;

//funcion que permite cargar un archivo json...
var loadDataJSON = function(){

  var t = $('#menuBarContent').DataTable({
    "responsive": true,
    "destroy":true
  });

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

      //reemplazamos las clases con los valores obtenidos desde el JSON
      $(".titulo1").html(jsonObj.sections.section1.nameSection);
      $(".titulo2").html(jsonObj.sections.section2. nameSection);
      $(".titulo3").html(jsonObj.sections.section3.nameSection);
      $(".titulo4").html(jsonObj.sections.section4.nameSection);
      $(".descripcion1").html(jsonObj.sections.section1.descSection);
      $(".descripcion2").html(jsonObj.sections.section2.descSection);
      $(".descripcion3").html(jsonObj.sections.section3.descSection);
      $(".descripcion4").html(jsonObj.sections.section4.descSection);

    }
  }
  http_request.open("GET", data_file, true);
  http_request.send();
}

var editar01 = function(){
  $("#editTitle01").on("click", function(){
    var valueInput1 = $("#editarTitulo01 #title1").val();
    var valueInput2 = $("#editarTitulo01 #descripcion1").val();
    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateSections.php?option=section1",
      data: {
          "content1": valueInput1,
          "content2": valueInput2,

          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}

var editar02 = function(){
  $("#editTitle02").on("click", function(){
    var valueInput1 = $("#editarTitulo02 #title2").val();
    var valueInput2 = $("#editarTitulo02 #descripcion2").val();
    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateSections.php?option=section2",
      data: {
          "content1": valueInput1,
          "content2": valueInput2,

          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}

var editar03 = function(){
  $("#editTitle03").on("click", function(){
    var valueInput1 = $("#editarTitulo03 #title3").val();
    var valueInput2 = $("#editarTitulo03 #descripcion3").val();
    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateSections.php?option=section3",
      data: {
          "content1": valueInput1,
          "content2": valueInput2,

          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}

var editar04 = function(){
  $("#editTitle04").on("click", function(){
    var valueInput1 = $("#editarTitulo04 #title4").val();
    var valueInput2 = $("#editarTitulo04 #descripcion4").val();
    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateSections.php?option=section4",
      data: {
          "content1": valueInput1,
          "content2": valueInput2,

          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}
