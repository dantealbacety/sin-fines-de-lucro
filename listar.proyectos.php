<?php
// Incluir el archivo de conexión
include 'conexion.php';

$sql = "SELECT * FROM PROYECTO";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<h1>Lista de Proyectos</h1>";
    echo "<table border='1'><tr><th>ID</th><th>Nombre</th><th>Descripción</th><th>Presupuesto</th><th>Fecha Inicio</th><th>Fecha Fin</th></tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["id_proyecto"] . "</td><td>" . $row["nombre"] . "</td><td>" . $row["descripcion"] . "</td><td>" . $row["presupuesto"] . "</td><td>" . $row["fecha_inicio"] . "</td><td>" . $row["fecha_fin"] . "</td></tr>";
    }
    echo "</table>";
} else {
    echo "No hay proyectos disponibles.";
}

$conn->close();
?>
