<?php

	#recbimos los argumentos...
	$menu = $_REQUEST['option'];
	$content = $_REQUEST['content'];

	#obtenemos el archivo...
	$jsonString = file_get_contents('/var/www/html/web/resources/JSON/infoPESB2.json');
	$data = json_decode($jsonString, true);

	$data['postTitle'][$menu] = $content;

	$newJsonString = json_encode($data);
	file_put_contents('/var/www/html/web/resources/JSON/infoPESB2.json', $newJsonString);
 ?>
