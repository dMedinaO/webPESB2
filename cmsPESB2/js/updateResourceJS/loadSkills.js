$(document).ready(function(){

  loadDataJSON();
  editar01();
  editar02();
  editar03();
  editar04();
  editar05();
  editar06();
  editar07();
  editar08();
  editar09();

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
      $(".element1").html(jsonObj.skillSection.tituloRojo);
      $(".element2").html(jsonObj.skillSection.titulo);
      $(".element3").html(jsonObj.skillSection.desc);
      $(".skill1").html(jsonObj.skillSection.skill1);
      $(".skill2").html(jsonObj.skillSection.skill2);
      $(".skill3").html(jsonObj.skillSection.skill3);
      $(".skill4").html(jsonObj.skillSection.skill4);
      $(".skill5").html(jsonObj.skillSection.skill5);
      $(".skill6").html(jsonObj.skillSection.skill6);

    }
  }
  http_request.open("GET", data_file, true);
  http_request.send();
}

var editar01 = function(){
  $("#editar1Acction").on("click", function(){
    var valueInput1 = $("#editar1 #valueData").val();
    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateSkills.php?option=tituloRojo",
      data: {
          "valueInput1": valueInput1

          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}

var editar02 = function(){
  $("#editar2Acction").on("click", function(){
    var valueInput1 = $("#editar2 #valueData").val();
    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateSkills.php?option=titulo",
      data: {
          "valueInput1": valueInput1

          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}

var editar03 = function(){
  $("#editar3Acction").on("click", function(){
    var valueInput1 = $("#editar3 #valueData").val();
    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateSkills.php?option=desc",
      data: {
          "valueInput1": valueInput1

          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}

var editar04 = function(){
  $("#editar4Acction").on("click", function(){
    var valueInput1 = $("#editar4 #valueData").val();
    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateSkills.php?option=skill1",
      data: {
          "valueInput1": valueInput1

          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}

var editar05 = function(){
  $("#editar5Acction").on("click", function(){
    var valueInput1 = $("#editar5 #valueData").val();
    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateSkills.php?option=skill2",
      data: {
          "valueInput1": valueInput1

          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}

var editar06 = function(){
  $("#editar6Acction").on("click", function(){
    var valueInput1 = $("#editar6 #valueData").val();
    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateSkills.php?option=skill3",
      data: {
          "valueInput1": valueInput1

          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}

var editar07 = function(){
  $("#editar7Acction").on("click", function(){
    var valueInput1 = $("#editar7 #valueData").val();
    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateSkills.php?option=skill4",
      data: {
          "valueInput1": valueInput1

          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}

var editar08 = function(){
  $("#editar8Acction").on("click", function(){
    var valueInput1 = $("#editar8 #valueData").val();
    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateSkills.php?option=skill5",
      data: {
          "valueInput1": valueInput1

          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}

var editar09 = function(){
  $("#editar9Acction").on("click", function(){
    var valueInput1 = $("#editar9 #valueData").val();
    $.ajax({
      method:"POST",
      url: "../php/updateResource/updateSkills.php?option=skill6",
      data: {
          "valueInput1": valueInput1

          }
    }).done( function( info ){
      location.reload(true);
    });
  });
}
