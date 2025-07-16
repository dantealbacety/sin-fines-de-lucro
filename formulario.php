<?php
// donacion.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $monto = htmlspecialchars($_POST['monto']);
    
    // Simulación de procesamiento de donación
    if (!empty($nombre) && !empty($monto) && is_numeric($monto) && $monto > 0) {
        echo "<!DOCTYPE html>
        <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'>
            <title>Gracias por tu Donación</title>
        </head>
        <body>
            <div class='container'>
                <h1>¡Gracias, $nombre!</h1>
                <p>Has donado $$monto. ¡Tu apoyo es invaluable!</p>
                <a href='index.html' class='btn btn-primary'>Volver a la página principal</a>
            </div>
        </body>
        </html>";
    } else {
        echo "<!DOCTYPE html>
        <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'>
            <title>Error en la Donación</title>
        </head>
        <body>
            <div class='container'>
                <h1>Error</h1>
                <p>Por favor, completa todos los campos correctamente.</p>
                <a href='index.html' class='btn btn-primary'>Volver a la página principal</a>
            </div>
        </body>
        </html>";
    }
} else {
    // Redirigir a la página principal si no se accede mediante POST
    header("Location: index.html");
    exit();
}
?>
