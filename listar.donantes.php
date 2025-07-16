<?php
// Incluir el archivo de conexión
include 'conexion.php';

$sql = "SELECT * FROM DONANTE";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<h1>Lista de Donantes</h1>";
    echo "<table border='1'><tr><th>ID</th><th>Nombre</th><th>Email</th><th>Dirección</th><th>Teléfono</th></tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["id_donante"] . "</td><td>" . $row["nombre"] . "</td><td>" . $row["email"] . "</td><td>" . $row["direccion"] . "</td><td>" . $row["telefono"] . "</td></tr>";
    }
    echo "</table>";
} else {
    echo "No hay donantes disponibles.";
}

$conn->close();
?>
