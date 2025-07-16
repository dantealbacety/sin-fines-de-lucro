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
    constructor(id, name, description, url) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url; // Nueva propiedad para la URL
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
    new Project(1, "Proyecto de Educación", "Mejorar la educación en comunidades vulnerables.", "https://www.educacion2020.cl/noticias/educacion-2020-trabaja-en-proyectos-para-mejorar-la-educacion-en-12-comunas-de-chile/"),
    new Project(2, "Proyecto de Salud", "Proveer atención médica a personas sin recursos.", "https://www.un.org/sustainabledevelopment/es/health/")
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
        projectElement.innerHTML = `<a href="${project.url}" target="_blank"><strong>${project.getInfo()}</strong></a>`;
        projectsList.appendChild(projectElement);
    });
}

// Función para simular donación segura y redirigir a pantalla de gracias
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

    // Crear una nueva ventana para mostrar el mensaje de felicitación
    const thankYouWindow = window.open('', '_blank', 'width=400,height=300');
    if (thankYouWindow) {
        thankYouWindow.document.write(`
            <html>
            <head>
                <title>Gracias por su donación</title>
                <style>
                    body {
                        font-family: 'Poppins', sans-serif;
                        background: linear-gradient(135deg, #f9d423 0%, #ff4e50 100%);
                        color: white;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        text-align: center;
                        padding: 20px;
                    }
                    h1 {
                        font-size: 2rem;
                        margin-bottom: 1rem;
                        text-shadow: 2px 2px 6px rgba(0,0,0,0.5);
                    }
                    p {
                        font-size: 1.2rem;
                        font-weight: 600;
                        text-shadow: 1px 1px 4px rgba(0,0,0,0.4);
                    }
                    button {
                        margin-top: 2rem;
                        padding: 0.75rem 2rem;
                        font-size: 1rem;
                        border: none;
                        border-radius: 25px;
                        background: #ff6f61;
                        color: white;
                        cursor: pointer;
                        box-shadow: 0 4px 10px rgba(255, 111, 97, 0.6);
                        transition: background 0.3s ease;
                    }
                    button:hover {
                        background: #ff4e50;
                    }
                </style>
            </head>
            <body>
                <h1>¡Felicitaciones, ${donorName}!</h1>
                <p>Gracias por donar $<strong>${amount}</strong>.</p>
                <p>Estás concursando por un iPhone 15.</p>
                <button onclick="window.close()">Cerrar</button>
            </body>
            </html>
        `);
    } else {
        alert("Por favor, permita ventanas emergentes para ver el mensaje de agradecimiento.");
    }
}

// Ejecutar al cargar la página
window.onload = () => {
    displayProjects();
};
