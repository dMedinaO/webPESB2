$(document).ready(function(){

  loadDataJSON();

});

//funcion que permite cargar un archivo json...
var loadDataJSON = function(){

  var data_file = "../resources/JSON/infoPESB2.json";
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

      //cargamos la data para la barra de menu
      $(".menuBar1").html(jsonObj.menuBar.menu1);
      $(".menuBar2").html(jsonObj.menuBar.menu2);
      $(".menuBar3").html(jsonObj.menuBar.menu3);
      $(".menuBar4").html(jsonObj.menuBar.menu4);
      $(".menuBar5").html(jsonObj.menuBar.menu5);
      $(".menuBar6").html(jsonObj.menuBar.menu6);

      //cargamos la informacion de la seccion home
      $(".home1").html(jsonObj.homeSection.title);
      $(".home2").html(jsonObj.homeSection.description);
      $(".home3").html(jsonObj.homeSection.logDesc);

      //cargamos la seccion de areas
      $(".area1").html(jsonObj.sections.section1.nameSection);
      $(".area2").html(jsonObj.sections.section2.nameSection);
      $(".area3").html(jsonObj.sections.section3.nameSection);
      $(".area4").html(jsonObj.sections.section4.nameSection);
      $(".desc1").html(jsonObj.sections.section1.descSection);
      $(".desc2").html(jsonObj.sections.section2.descSection);
      $(".desc3").html(jsonObj.sections.section3.descSection);
      $(".desc4").html(jsonObj.sections.section4.descSection);

      //cargamos la seccion de skills
      $(".element_skill_1").html(jsonObj.skillSection.tituloRojo);
      $(".element_skill_2").html(jsonObj.skillSection.titulo);
      $(".element_skill_3").html(jsonObj.skillSection.desc);
      $(".element_skill_4").html(jsonObj.skillSection.skill1);
      $(".element_skill_5").html(jsonObj.skillSection.skill2);
      $(".element_skill_6").html(jsonObj.skillSection.skill3);
      $(".element_skill_7").html(jsonObj.skillSection.skill4);
      $(".element_skill_8").html(jsonObj.skillSection.skill5);
      $(".element_skill_9").html(jsonObj.skillSection.skill6);

      //cargamos la informacion del grupo
      $(".componentGrupo1").html(jsonObj.groupInfo.redTitle);
      $(".componentGrupo2").html(jsonObj.groupInfo.title);
      $(".componentGrupo3").html(jsonObj.groupInfo.description);

      //cargamos la informacion del Team
      $(".infoGroup1").html(jsonObj.teamInfo.redTitle);
      $(".infoGroup2").html(jsonObj.teamInfo.title);

      //cargamos la informacion del Team
      $(".contacto1").html(jsonObj.contactInfo.smallTitle);
      $(".contacto2").html(jsonObj.contactInfo.redTitle);
      $(".contacto3").html(jsonObj.contactInfo.address);
      $(".contacto4").html(jsonObj.contactInfo.phone);
      $(".contacto5").html(jsonObj.contactInfo.email);

      //frase del inicio
      $(".fraseData1").html(jsonObj.otrasFrases.fraseTitulo);
      $(".fraseData2").html(jsonObj.otrasFrases.fraseTitulo2);
      $(".fraseMotivacional").html(jsonObj.otrasFrases.fraseMotivacional);

      //frases de publicaciones y proyectos
      $(".frase1Publications").html(jsonObj.otrasFrases.frase1Publications);
      $(".frase2Publications").html(jsonObj.otrasFrases.frase2Publications);
      $(".frase1Projects").html(jsonObj.otrasFrases.frase1Projects);
      $(".frase2Projects").html(jsonObj.otrasFrases.frase2Projects);
    }
  }
  http_request.open("GET", data_file, true);
  http_request.send();
}
