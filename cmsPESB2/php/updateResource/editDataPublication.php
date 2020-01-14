<?php

	#recbimos los argumentos...
	$idPublication = $_REQUEST['idPublication'];
	$detalle = $_REQUEST['detalle'];

	#obtenemos el archivo...
	$jsonString = file_get_contents('/var/www/html/webPESB2/resources/JSON/infoPESB2.json');
	$data = json_decode($jsonString, true);

	foreach ($data['publications']['publicationsData'] as $member => $value) {
		if ($value['ID'] == $idPublication){
			$data['publications']['publicationsData']['publication'] = $detalle;
			break;
		}
	}
	$newJsonString = json_encode($data);
	file_put_contents('/var/www/html/webPESB2/resources/JSON/infoPESB2.json', $newJsonString);
 ?>
