<?php

	#script para hacer la carga de informacion desde la base de datos a la tabla
	include ("../connection.php");


	$query = "select * from integrante";
	$resultado = mysqli_query($conexion, $query);

	if (!$resultado){
		die("Error");
	}else{

		while($data = mysqli_fetch_assoc($resultado)){

			echo '<option value="'.$data["idintegrante"].'">'.$data["nombre"].'</option>';
		}

	}

	mysqli_free_result($resultado);
	mysqli_close($conexion);
?>
