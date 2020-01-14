<?php

	#recbimos los argumentos...
	$option = $_REQUEST['option'];
	$content1 = $_REQUEST['content1'];
	$content2 = $_REQUEST['content2'];
	$content3 = $_REQUEST['content3'];

	#obtenemos el archivo...
	$jsonString = file_get_contents('/var/www/html/webPESB2/resources/JSON/infoPESB2.json');
	$data = json_decode($jsonString, true);

	$data['teamInfo']['members'][$option]['name'] = $content1;
	$data['teamInfo']['members'][$option]['pos'] = $content2;
	$data['teamInfo']['members'][$option]['desc'] = $content3;

	$newJsonString = json_encode($data);
	file_put_contents('/var/www/html/webPESB2/resources/JSON/infoPESB2.json', $newJsonString);
 ?>
