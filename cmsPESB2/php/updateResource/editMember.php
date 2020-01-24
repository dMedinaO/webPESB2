<?php

	include("../connection.php");#incluimos la base de datos
	include("../readDocument.php");

	#hacemos la obtencion de los datos
	$idmember = $_REQUEST['idmember'];
	$name = $_REQUEST['name'];
	$pos = $_REQUEST['pos'];
	$desc = $_REQUEST['desc'];
	$correo = $_REQUEST['correo'];
	$linkedint = $_REQUEST['linkedint'];
	$scholar = $_REQUEST['scholar'];
	$research = $_REQUEST['research'];

	$query = "update integrante set nombre='$name', posicion='$pos', correo='$correo', linkedin='$linkedint', scholarProfile='$scholar', researchGateProfile='$research' where idintegrante=$idmember";
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
