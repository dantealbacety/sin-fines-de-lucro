<?php
// Incluir el archivo de conexión
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $monto = filter_var($_POST['monto'], FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
    $fecha = htmlspecialchars(trim($_POST['fecha']));
    $id_proyecto = intval($_POST['id_proyecto']);
    $id_donante = intval($_POST['id_donante']);

    // Preparar y ejecutar la consulta
    $stmt = $conn->prepare("INSERT INTO DONACION (monto, fecha, id_proyecto, id_donante) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("dsii", $monto, $fecha, $id_proyecto, $id_donante);

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
