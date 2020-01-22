<?php

	#recbimos los argumentos...
	$idPublication = $_REQUEST['idPublication'];

	#obtenemos el archivo...
	$jsonString = file_get_contents('/var/www/html/web/resources/JSON/infoPESB2.json');
	$data = json_decode($jsonString, true);

	$members = sizeof($data['publications']['publicationsData']);
	for ($i=0; $i<$members; $i++){

		if ($data['publications']['publicationsData'][$i]['ID'] == $idPublication){

			unset($data['publications']['publicationsData'][$i]);
			break;

		}
	}
	$newJsonString = json_encode($data);
	file_put_contents('/var/www/html/web/resources/JSON/infoPESB2.json', $newJsonString);
 ?>
