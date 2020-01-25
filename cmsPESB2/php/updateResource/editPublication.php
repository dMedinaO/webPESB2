<?php

	include("../connection.php");#incluimos la base de datos

	#hacemos la obtencion de los datos
	$idpublication = $_REQUEST['idpublication'];
	$desc = $_REQUEST['desc'];
	$link = $_REQUEST['link'];
	$status = $_REQUEST['status'];
	$autor = $_REQUEST['autor'];

	$query = "update publicacion set descripcionPublicacion='$desc', estadoPublicacion='$status', linkAcceso='$link', autorPrincipal=$autor where idpublicacion = $idpublication";
	$resultado = mysqli_query($conexion, $query);

	$informacion["query"]=$query;
	verificar_resultado( $resultado, $conexion, $informacion);
	function verificar_resultado($resultado, $conexion, $informacion){

		if (!$resultado){
			 $informacion["respuesta"] = "ERROR";
		}else{

			$informacion["respuesta"] ="BIEN";
		}

		echo json_encode($informacion);
	}

	cerrar( $conexion );
	function cerrar($conexion){
		mysqli_close($conexion);
	}
?>
