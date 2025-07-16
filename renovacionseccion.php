<?php
// Renueva la sesión si el usuario está activo
if (isset($_SESSION['LAST_ACTIVITY']) && (time() - $_SESSION['LAST_ACTIVITY'] > 300)) {
    // Si la última actividad fue hace más de 5 minutos, se destruye la sesión
    session_unset(); 
    session_destroy(); 
} else {
    // Actualiza el tiempo de la última actividad
    $_SESSION['LAST_ACTIVITY'] = time();
}
?>
