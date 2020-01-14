<?php


	#$idUSer = $_SESSION['userName'];
	$archivo = $_FILES['file'];

	$templocation = $archivo["tmp_name"];
	$name = $archivo["name"];

	$pathMove = "../../resources/pictures/team/".$name;
	move_uploaded_file($templocation, $pathMove);

 ?>
