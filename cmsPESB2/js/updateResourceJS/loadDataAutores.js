$(document).ready(function () {

	$.ajax({
		type: "POST",
		url: "../php/updateResource/showAutores.php",
		success: function(response){
			$('.selector-autores select').html(response).fadeIn();
		}
	});
});
