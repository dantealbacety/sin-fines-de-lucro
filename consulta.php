<?php
// Configuración de la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "organizacion";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta para obtener proyectos con más de 2 donaciones
$sql = "SELECT p.nombre AS Proyecto, COUNT(*) AS NumeroDonaciones, SUM(d.monto) AS TotalRecaudado
        FROM PROYECTO p
        LEFT JOIN DONACION d ON p.id_proyecto = d.id_proyecto
        GROUP BY p.id_proyecto
        HAVING COUNT(*) > 2";

$result = $conn->query($sql);

// Verificar si hay resultados y mostrarlos
if ($result->num_rows > 0) {
    echo "<h2>Proyectos con más de 2 donaciones:</h2>";
    echo "<table border='1'>
            <tr>
                <th>Proyecto</th>
                <th>Número de Donaciones</th>
                <th>Total Recaudado</th>
            </tr>";
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>{$row['Proyecto']}</td>
                <td>{$row['NumeroDonaciones']}</td>
                <td>{$row['TotalRecaudado']}</td>
              </tr>";
    }
    echo "</table>";
} else {
    echo "No se encontraron proyectos con más de 2 donaciones.";
}

// Cerrar conexión
$conn->close();
?>
