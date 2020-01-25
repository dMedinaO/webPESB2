<?php

	include("../connection.php");#incluimos la base de datos
	include("../readDocument.php");

	#hacemos la obtencion de los datos
	$desc = $_REQUEST['desc'];
	$link = $_REQUEST['link'];
	$status = $_REQUEST['status'];
	$autor = $_REQUEST['autor'];

	$idData = time();

	$query = "insert into publicacion values ($idData, '$desc', '$status', '$link', $autor)";
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
