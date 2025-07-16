<?php
// Incluir el archivo de conexión
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener y sanitizar datos del formulario
    $monto = htmlspecialchars(trim($_POST['monto']));
    $fecha = htmlspecialchars(trim($_POST['fecha']));
    $id_proyecto = htmlspecialchars(trim($_POST['id_proyecto']));
    $id_donante = htmlspecialchars(trim($_POST['id_donante']));

    // Preparar y ejecutar la consulta
    $stmt = $conn->prepare("INSERT INTO DONACION (monto, fecha, id_proyecto, id_donante) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ddss", $monto, $fecha, $id_proyecto, $id_donante);

    if ($stmt->execute()) {
        echo "Donación agregada exitosamente.";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Cerrar la declaración y la conexión
    $stmt->close();
    $conn->close();
}
?>
