<?php
session_start();

// Verificar si se ha enviado el total
if (isset($_POST['total'])) {
    $total_donacion = $_POST['total'];
} else {
    // Redirigir si no se ha enviado el total
    header("Location: index.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="lucro.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <title>Gracias por tu Donación</title>
</head>
<body>
    <header>
        <h1>Fundación DH</h1>
    </header>

    <main>
        <h2>¡Felicidades! has agregado al carrito, hacer donacion a una fundacion</h2>
        <p>Has donado un total de: $<?php echo number_format($total_donacion, 2); ?></p>
        <p>¡Gracias por tu generosidad y apoyo a nuestra causa!</p>
        <a href="carrito.php" class="btn btn-primary">Volver a la Página Principal</a>
    </main>

    <footer>
        <p>© 2024 Fundación DH. Todos los derechos reservados.</p>
        <p>Contacto: fundaciondh@gmail.com</p>
    </footer>
    
    <script src="js/animaciones.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
