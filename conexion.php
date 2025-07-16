<?php
// conexion.php
$host = 'localhost'; 
$usuario = 'root'; 
$contraseña = ''; 
$base_datos = 'ORGANIZACION';

// Crear conexión
$conn = new mysqli($host, $usuario, $contraseña, $base_datos);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
