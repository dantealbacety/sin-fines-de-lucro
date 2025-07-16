<?php
session_start();
include 'sesiones.php'; // Asegúrate de incluir el manejo de sesiones
// Inicializar el carrito de donaciones si no existe
if (!isset($_SESSION['carrito'])) {
    $_SESSION['carrito'] = [];
}
// Manejar la adición de donaciones al carrito
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['agregar_donacion'])) {
    $nombre = htmlspecialchars(trim($_POST['nombre']));
    $monto = filter_var($_POST['monto'], FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
    // Agregar la donación al carrito
    $_SESSION['carrito'][] = [
        'nombre' => $nombre,
        'monto' => $monto
    ];
}
// Calcular el total de donaciones en el carrito
$total_donaciones = 0;
foreach ($_SESSION['carrito'] as $donacion) {
    $total_donaciones += $donacion['monto'];
}
?>
