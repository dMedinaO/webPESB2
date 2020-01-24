<?php

	include("../connection.php");#incluimos la base de datos
	include("../readDocument.php");

	#hacemos la obtencion de los datos
	$name = $_REQUEST['name'];
	$pos = $_REQUEST['pos'];
	$desc = $_REQUEST['desc'];
	$correo = $_REQUEST['correo'];
	$linkedint = $_REQUEST['linkedint'];
	$scholar = $_REQUEST['scholar'];
	$research = $_REQUEST['research'];

	#obtenemos el nombre de la foto
  $pathData = "/var/www/html/web/resources/pictures/team/lastPicture.txt";
  $namePicture = readDocument($pathData);
	
	$idData = time();

	$query = "insert into integrante values ($idData, '$name', '$pos', '$correo', '$linkedint', '$scholar', '$research', '$namePicture', '$desc')";
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
