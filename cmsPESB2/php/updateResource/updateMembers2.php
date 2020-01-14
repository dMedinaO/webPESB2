<?php

	#recbimos los argumentos...
	$option = $_REQUEST['option'];
	$content1 = $_REQUEST['content1'];

	#obtenemos el archivo...
	$jsonString = file_get_contents('/var/www/html/webPESB2/resources/JSON/infoPESB2.json');
	$data = json_decode($jsonString, true);

	$data['teamInfo'][$option] = $content1;

	$newJsonString = json_encode($data);
	file_put_contents('/var/www/html/webPESB2/resources/JSON/infoPESB2.json', $newJsonString);
 ?>
