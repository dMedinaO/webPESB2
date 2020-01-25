<?php

	include("../connection.php");#incluimos la base de datos

	#hacemos la obtencion de los datos
	$idproyecto = $_REQUEST['idproyecto'];
	$name = $_REQUEST['name'];
	$desc = $_REQUEST['desc'];
	$funding = $_REQUEST['funding'];
	$autor = $_REQUEST['autor'];

	$query = "update proyecto set nombreProyecto='$name', descripcionProyecto='$desc', financiamiento='$funding', encargadoProyecto=$autor where idproyecto=$idproyecto";
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
