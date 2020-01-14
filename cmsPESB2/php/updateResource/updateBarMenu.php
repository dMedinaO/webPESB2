<?php

	#recbimos los argumentos...
	$menu = $_REQUEST['menu'];
	$content = $_REQUEST['content'];

	#obtenemos el archivo...
	$jsonString = file_get_contents('/var/www/html/webPESB2/resources/JSON/infoPESB2.json');
	$data = json_decode($jsonString, true);

	$data['menuBar'][$menu] = $content;

	$newJsonString = json_encode($data);
	file_put_contents('/var/www/html/webPESB2/resources/JSON/infoPESB2.json', $newJsonString);
 ?>
