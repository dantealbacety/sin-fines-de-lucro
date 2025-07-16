<?php
// test_conexion.php
include 'conexion.php'; // Incluir el archivo de conexión

// Verificar la conexión
if ($conn) {
    echo "Conexión exitosa a la base de datos.";
} else {
    echo "Error en la conexión: " . $conn->connect_error;
}

// Cerrar la conexión
$conn->close();
?>
