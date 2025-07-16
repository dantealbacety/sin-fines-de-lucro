<?php
session_start();
// Actualiza el tiempo de la última actividad
$_SESSION['LAST_ACTIVITY'] = time();
echo json_encode(['status' => 'success']);
?>
