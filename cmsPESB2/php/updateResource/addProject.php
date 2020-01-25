<?php

	include("../connection.php");#incluimos la base de datos
	include("../readDocument.php");

	#hacemos la obtencion de los datos
	$name = $_REQUEST['name'];
	$desc = $_REQUEST['desc'];
	$funding = $_REQUEST['funding'];
	$autor = $_REQUEST['autor'];

	#obtenemos el nombre de la foto
  $pathData = "/var/www/html/web/resources/pictures/project/lastPicture.txt";
  $namePicture = readDocument($pathData);

	$idData = time();

	$query = "insert into proyecto values ($idData, '$name', '$desc', '$funding', $autor, '$namePicture')";
	$resultado = mysqli_query($conexion, $query);

	verificar_resultado( $resultado, $conexion, $query);
	cerrar( $conexion );

	function verificar_resultado($resultado, $conexion, $query){

		if (!$resultado) $informacion["respuesta"] = "ERROR";
		else{

			#hacemos la consulta...
			$resultado2 = mysqli_query($conexion, $query);

			#evaluamos...
			if (!$resultado) $informacion["respuesta"] = "ERROR";
			else{
				$informacion["respuesta"] ="BIEN";
			}
		}
		echo json_encode($informacion);
	}

	function cerrar($conexion){
		mysqli_close($conexion);
	}
?>
