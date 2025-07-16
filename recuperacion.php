<?php
// Incluir el archivo de eventos
include 'eventos.php';

// Crear una instancia del gestor de eventos
$gestor = new GestorEventos();

// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperar los datos del formulario
    $descripcion = htmlspecialchars($_POST['descripcion']);
    $tipo = htmlspecialchars($_POST['tipo']);
    $lugar = htmlspecialchars($_POST['lugar']);
    $fecha = htmlspecialchars($_POST['fecha']);
    $hora = htmlspecialchars($_POST['hora']);

    // Crear un nuevo evento
    $nuevoEvento = new Evento($descripcion, $tipo, $lugar, $fecha, $hora);
    
    // Agregar el evento al gestor
    $gestor->agregarEvento($nuevoEvento);

    // Redirigir o mostrar un mensaje de éxito
    echo "<p>Evento registrado exitosamente.</p>";
    echo "<a href='index.php'>Volver a la página principal</a>"; // Enlace para volver a la página principal
}
?>
