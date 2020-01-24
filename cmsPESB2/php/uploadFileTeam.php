<?php

	#$idUSer = $_SESSION['userName'];
	$archivo = $_FILES['file'];

	$templocation = $archivo["tmp_name"];
	$name = $archivo["name"];

	$pathMove = "../../resources/pictures/team/".$name;
	move_uploaded_file($templocation, $pathMove);

	$pathData = "/var/www/html/web/resources/pictures/team/lastPicture.txt";

	//finalmente escribimos un archivo de texto con el nombre de la imagen...
	$file = fopen($pathData, "w");

	fwrite($file, "$name");

	fclose($file);

 ?>
