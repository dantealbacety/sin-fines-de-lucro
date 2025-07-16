<?php
// Conexión a la base de datos
$host = 'localhost';
$db = 'organizacion'; // Cambia esto por tu nombre de base de datos
$user = 'root'; // Cambia esto por tu usuario
$pass = ''; // Cambia esto por tu contraseña

$conn = new mysqli($host, $user, $pass, $db);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recibir datos del formulario
$nombre = $_POST['nombre'];
$descripcion = $_POST['descripcion'];
$presupuesto = $_POST['presupuesto'];
$fecha_inicio = $_POST['fecha_inicio'];
$fecha_fin = $_POST['fecha_fin'];

// Preparar y ejecutar la consulta SQL
$sql = "INSERT INTO PROYECTO (nombre, descripcion, presupuesto, fecha_inicio, fecha_fin) VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssdss", $nombre, $descripcion, $presupuesto, $fecha_inicio, $fecha_fin);

if ($stmt->execute()) {
    echo "Proyecto registrado exitosamente.";
} else {
    echo "Error: " . $stmt->error;
}

// Cerrar conexión
$stmt->close();
$conn->close();
?>
