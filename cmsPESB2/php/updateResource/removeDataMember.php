<?php

	include ("../connection.php");

	#obtenemos el id del formulario

	$informacion = [];

	#hacemos la consulta
	$idmember = $_REQUEST['idmember'];


	$query = "delete from integrante where idintegrante= $idmember";
	$response['query'] = $query;

	$resultado = mysqli_query($conexion, $query);
	verificar_resultado( $resultado, $response );
	cerrar( $conexion );

	function verificar_resultado($resultado, $response){

		if (!$resultado) $informacion["respuesta"] = "ERROR";
		else $informacion["respuesta"] ="BIEN";
		$response['response'] = $informacion;
		echo json_encode($response);
	}

	function cerrar($conexion){
		mysqli_close($conexion);
	}

?>
