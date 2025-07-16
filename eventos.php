<?php
// eventos.php

class Evento {
    public $descripcion;
    public $tipo;
    public $lugar;
    public $fecha;
    public $hora;

    public function __construct($descripcion, $tipo, $lugar, $fecha, $hora) {
        $this->descripcion = $descripcion;
        $this->tipo = $tipo;
        $this->lugar = $lugar;
        $this->fecha = $fecha;
        $this->hora = $hora;
    }

    public function mostrarEvento() {
        return "Descripción: $this->descripcion, Tipo: $this->tipo, Lugar: $this->lugar, Fecha: $this->fecha, Hora: $this->hora";
    }
}

class GestorEventos {
    private $eventos = [];

    public function agregarEvento($evento) {
        $this->eventos[] = $evento;
    }

    public function filtrarEventos($tipo) {
        $resultados = [];
        foreach ($this->eventos as $evento) {
            if ($evento->tipo === $tipo) {
                $resultados[] = $evento;
            }
        }
        return $resultados;
    }

    public function obtenerEventos() {
        return $this->eventos;
    }
}

// Ejemplo de uso
$gestor = new GestorEventos();
$gestor->agregarEvento(new Evento("Concierto de Música", "Concierto", "Auditorio Principal", "2024-05-01", "19:00"));
$gestor->agregarEvento(new Evento("Taller de Arte", "Taller", "Sala de Arte", "2024-05-02", "10:00"));
$gestor->agregarEvento(new Evento("Charla sobre Medio Ambiente", "Charla", "Sala de Conferencias", "2024-05-03", "15:00"));

// Filtrar eventos por tipo
$eventosFiltrados = $gestor->filtrarEventos("Taller");
?>
