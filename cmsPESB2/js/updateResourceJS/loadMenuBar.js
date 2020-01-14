$(document).ready(function(){

  loadDataJSON();
  editar01();
  editar02();
  editar03();
  editar04();
  editar05();
  editar06();
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
      $(".menu1").html(jsonObj.menuBar.menu1);
      $(".menu2").html(jsonObj.menuBar.menu2);
      $(".menu3").html(jsonObj.menuBar.menu3);
      $(".menu4").html(jsonObj.menuBar.menu4);
      $(".menu5").html(jsonObj.menuBar.menu5);
      $(".menu6").html(jsonObj.menuBar.menu6);

    }
  }
  http_request.open("GET", data_file, true);
  http_request.send();
}

//funcion que permite editar el titulo 01...
var editar01 = function(){
  $("#editTitle01").on("click", function(){
    var valueInput = $("#editarTitulo01 #title1").val();
    console.log(valueInput);
    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateBarMenu.php?menu=menu1",
      data: {
          "content": valueInput
          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}

//funcion que permite editar el titulo 02...
var editar02 = function(){
  $("#editTitle02").on("click", function(){
    var valueInput = $("#editarTitulo02 #title2").val();
    console.log(valueInput);
    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateBarMenu.php?menu=menu2",
      data: {
          "content": valueInput
          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}

//funcion que permite editar el titulo 03...
var editar03 = function(){
  $("#editTitle03").on("click", function(){
    var valueInput = $("#editarTitulo03 #title3").val();
    console.log(valueInput);
    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateBarMenu.php?menu=menu3",
      data: {
          "content": valueInput
          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}

//funcion que permite editar el titulo 04...
var editar04 = function(){
  $("#editTitle04").on("click", function(){
    var valueInput = $("#editarTitulo04 #title4").val();
    console.log(valueInput);
    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateBarMenu.php?menu=menu4",
      data: {
          "content": valueInput
          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}

//funcion que permite editar el titulo 05...
var editar05 = function(){
  $("#editTitle05").on("click", function(){
    var valueInput = $("#editarTitulo05 #title5").val();
    console.log(valueInput);
    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateBarMenu.php?menu=menu5",
      data: {
          "content": valueInput
          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}

//funcion que permite editar el titulo 06...
var editar06 = function(){
  $("#editTitle06").on("click", function(){
    var valueInput = $("#editarTitulo06 #title6").val();
    console.log(valueInput);
    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateBarMenu.php?menu=menu6",
      data: {
          "content": valueInput
          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}
