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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="lucro.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <title>Carrito de Donaciones</title>
</head>
<body>
    <header>
        <h1>Carrito de Donaciones</h1>
    </header>

    <main>
        <section id="carrito">
            <h2>Contenido del Carrito</h2>
            <?php if (empty($_SESSION['carrito'])): ?>
                <p>El carrito está vacío.</p>
            <?php else: ?>
                <ul>
                    <?php foreach ($_SESSION['carrito'] as $donacion): ?>
                        <li><?php echo htmlspecialchars($donacion['nombre']) . " - $" . number_format($donacion['monto'], 2); ?></li>
                    <?php endforeach; ?>
                </ul>
                <p>Total: $<?php echo number_format($total_donaciones, 2); ?></p>
                <form action="carrito.php" method="POST"> <!-- Cambiado aquí -->
                    <input type="hidden" name="total" value="<?php echo $total_donaciones; ?>">
                    <button type="submit" class="btn btn-success">Realizar Donación</button>
                </form>
            <?php endif; ?>
        </section>
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
