$(document).ready(function(){

  loadDataJSON();
  editar01();
  editar02();
  editar03();
  editar04();
  editar06();
  editar05();
  editarValue01();
  editarValue02();

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

      //cargamos las partes iniciales
      $(".data1").html(jsonObj.teamInfo.redTitle);
      $(".data2").html(jsonObj.teamInfo.title);

      //nombres
      $(".name1").html(jsonObj.teamInfo.members.member1.name);
      $(".name2").html(jsonObj.teamInfo.members.member2.name);
      $(".name3").html(jsonObj.teamInfo.members.member3.name);
      $(".name4").html(jsonObj.teamInfo.members.member4.name);
      $(".name5").html(jsonObj.teamInfo.members.member5.name);
      $(".name6").html(jsonObj.teamInfo.members.member6.name);

      //posiciones
      $(".pos1").html(jsonObj.teamInfo.members.member1.pos);
      $(".pos2").html(jsonObj.teamInfo.members.member2.pos);
      $(".pos3").html(jsonObj.teamInfo.members.member3.pos);
      $(".pos4").html(jsonObj.teamInfo.members.member4.pos);
      $(".pos5").html(jsonObj.teamInfo.members.member5.pos);
      $(".pos6").html(jsonObj.teamInfo.members.member6.pos);

      //descripciones
      $(".desc1").html(jsonObj.teamInfo.members.member1.desc);
      $(".desc2").html(jsonObj.teamInfo.members.member2.desc);
      $(".desc3").html(jsonObj.teamInfo.members.member3.desc);
      $(".desc4").html(jsonObj.teamInfo.members.member4.desc);
      $(".desc5").html(jsonObj.teamInfo.members.member5.desc);
      $(".desc6").html(jsonObj.teamInfo.members.member6.desc);
    }
  }
  http_request.open("GET", data_file, true);
  http_request.send();
}

var editar01 = function(){
  $("#editTitle01").on("click", function(){
    var valueInput1 = $("#editarTitulo01 #title1").val();
    var valueInput2 = $("#editarTitulo01 #pos1").val();
    var valueInput3 = $("#editarTitulo01 #descripcion1").val();

    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateMembers.php?option=member1",
      data: {
          "content1": valueInput1,
          "content2": valueInput2,
          "content3": valueInput3

          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}

var editar02 = function(){
  $("#editTitle02").on("click", function(){
    var valueInput1 = $("#editarTitulo02 #title2").val();
    var valueInput2 = $("#editarTitulo02 #pos2").val();
    var valueInput3 = $("#editarTitulo02 #descripcion2").val();

    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateMembers.php?option=member2",
      data: {
          "content1": valueInput1,
          "content2": valueInput2,
          "content3": valueInput3

          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}

var editar03 = function(){
  $("#editTitle03").on("click", function(){
    var valueInput1 = $("#editarTitulo03 #title3").val();
    var valueInput2 = $("#editarTitulo03 #pos3").val();
    var valueInput3 = $("#editarTitulo03 #descripcion3").val();

    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateMembers.php?option=member3",
      data: {
          "content1": valueInput1,
          "content2": valueInput2,
          "content3": valueInput3

          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}

var editar04 = function(){
  $("#editTitle04").on("click", function(){
    var valueInput1 = $("#editarTitulo04 #title4").val();
    var valueInput2 = $("#editarTitulo04 #pos4").val();
    var valueInput3 = $("#editarTitulo04 #descripcion4").val();

    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateMembers.php?option=member4",
      data: {
          "content1": valueInput1,
          "content2": valueInput2,
          "content3": valueInput3

          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}

var editar05 = function(){
  $("#editTitle05").on("click", function(){
    var valueInput1 = $("#editarTitulo05 #title5").val();
    var valueInput2 = $("#editarTitulo05 #pos5").val();
    var valueInput3 = $("#editarTitulo05 #descripcion5").val();

    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateMembers.php?option=member5",
      data: {
          "content1": valueInput1,
          "content2": valueInput2,
          "content3": valueInput3

          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}

var editar06 = function(){
  $("#editTitle06").on("click", function(){
    var valueInput1 = $("#editarTitulo06 #title6").val();
    var valueInput2 = $("#editarTitulo06 #pos6").val();
    var valueInput3 = $("#editarTitulo06 #descripcion6").val();

    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateMembers.php?option=member6",
      data: {
          "content1": valueInput1,
          "content2": valueInput2,
          "content3": valueInput3

          }
    }).done( function( info ){
      location.reload(true);
    });
  });
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
