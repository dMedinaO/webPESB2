<?php

	#recbimos los argumentos...
	$valueInput1 = $_REQUEST['valueInput1'];
	$option = $_REQUEST['option'];

	#obtenemos el archivo...
	$jsonString = file_get_contents('/var/www/html/web/resources/JSON/infoPESB2.json');
	$data = json_decode($jsonString, true);

	$data['skillSection'][$option] = $valueInput1;

	$newJsonString = json_encode($data);
	file_put_contents('/var/www/html/web/resources/JSON/infoPESB2.json', $newJsonString);
 ?>
