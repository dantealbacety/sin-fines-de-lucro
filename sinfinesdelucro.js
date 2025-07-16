// Clase para representar un Evento
class Event {
    constructor(id, name, date, url) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.url = url;
    }
    // Método para obtener información del evento
    getInfo() {
        return `${this.name} - Fecha: ${this.date}`;
    }
}

// Clase para representar un Proyecto
class Project {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
    // Método para obtener información del proyecto
    getInfo() {
        return `${this.name}: ${this.description}`;
    }
}

// Clase para representar una Donación
class Donation {
    constructor(amount, donorName) {
        this.amount = amount;
        this.donorName = donorName;
    }
    // Método para mostrar información de la donación
    getDonationInfo() {
        return `Donación de ${this.amount} por ${this.donorName}`;
    }
}

// Simulación de datos de eventos y proyectos usando las clases
const events = [
    new Event(1, "Evento de Recaudación", "2023-11-01", "https://myevent.com/athons/ideas?lang=es"),
    new Event(2, "Taller de Capacitación", "2023-11-15", "https://awsassets.panda.org/downloads/hacer_talleres___guia_para_capacitadores_wwf.pdf"),
    new Event(3, "Concierto Benéfico", "2023-12-01", "https://www.changethegameacademy.org/es/examples/local-fundraising/view?id=90")
];

const projects = [
    new Project(1, "Proyecto de Educación", "Mejorar la educación en comunidades vulnerables."),
    new Project(2, "Proyecto de Salud", "Proveer atención médica a personas sin recursos.")
];

// Función para buscar eventos y redirigir a URL correspondiente
function search() {
    const input = document.getElementById('events-input').value.toLowerCase();
    const eventUrls = events.reduce((acc, event) => {
        acc[event.name.toLowerCase()] = event.url;
        return acc;
    }, {});

    if (eventUrls[input]) {
        window.location.href = eventUrls[input];
    } else {
        alert("No se encontró el evento. Intenta con 'Evento de Recaudación', 'Taller de Capacitación' o 'Concierto Benéfico'.");
    }
}

// Función para mostrar proyectos en la página
function displayProjects() {
    const projectsList = document.getElementById('projects-list');
    projectsList.innerHTML = ''; // Limpiar contenido previo
    projects.forEach(project => {
        const projectElement = document.createElement('li');
        projectElement.innerHTML = `<strong>${project.getInfo()}</strong>`;
        projectsList.appendChild(projectElement);
    });
}

// Función para simular donación segura
function makeDonation() {
    const amount = prompt("Ingrese el monto de la donación (ej: 50 USD):");
    if (!amount || isNaN(amount) || amount <= 0) {
        alert("Por favor, ingrese un monto válido para la donación.");
        return;
    }
    const donorName = prompt("Ingrese su nombre:");
    if (!donorName) {
        alert("Por favor, ingrese su nombre para completar la donación.");
        return;
    }
    const donation = new Donation(amount, donorName);
    alert(donation.getDonationInfo() + ". Gracias por su generosidad.");
}

// Ejecutar al cargar la página
window.onload = () => {
    displayProjects();
};

