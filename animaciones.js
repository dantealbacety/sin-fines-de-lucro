// Clase para representar un Evento
class Event {
    constructor(id, name, date, url) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.url = url;
    }
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
        this.url = url;
    }
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
    getDonationInfo() {
        return `Donación de ${this.amount} por ${this.donorName}`;
    }
}

// Simulación de datos de eventos y proyectos
const events = [
    new Event(1, "Evento de Recaudación", "2023-11-01", "https://myevent.com/athons/ideas?lang=es"),
    new Event(2, "Taller de Capacitación", "2023-11-15", "https://awsassets.panda.org/downloads/hacer_talleres___guia_para_capacitadores_wwf.pdf"),
    new Event(3, "Concierto Benéfico", "2023-12-01", "https://www.changethegameacademy.org/es/examples/local-fundraising/view?id=90")
];

const projects = [
    new Project(1, "Proyecto de Educación", "Mejorar la educación en comunidades vulnerables.", "https://www.educacion2020.cl/noticias/educacion-2020-trabaja-en-proyectos-para-mejorar-la-educacion-en-12-comunas-de-chile/"),
    new Project(2, "Proyecto de Salud", "Proveer atención médica a personas sin recursos.", "https://www.salud2020.cl/proyectos-salud/")
];

// Variables para simulación del progreso de donaciones
let totalDonations = 0;
let donationGoal = 1000; // Meta ficticia

// Mostrar proyectos en página
function displayProjects() {
    const projectsList = document.getElementById('projects-list');
    projectsList.innerHTML = '';
    projects.forEach(project => {
        const projectElement = document.createElement('li');
        projectElement.innerHTML = `<a href="${project.url}" target="_blank"><strong>${project.getInfo()}</strong></a>`;
        projectsList.appendChild(projectElement);
    });
}

// Función de búsqueda con redirección
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

// Mostrar notificación en pantalla
function showNotification(message) {
    // Crear contenedor si no existe
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        container.style.position = 'fixed';
        container.style.top = '20px';
        container.style.right = '20px';
        container.style.width = '300px';
        container.style.zIndex = 9999;
        document.body.appendChild(container);
    }

    // Crear notificación
    const notif = document.createElement('div');
    notif.textContent = message;
    notif.style.background = 'linear-gradient(135deg, #34D399, #059669)';
    notif.style.color = 'white';
    notif.style.padding = '15px';
    notif.style.marginBottom = '10px';
    notif.style.borderRadius = '12px';
    notif.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
    notif.style.fontWeight = '600';
    notif.style.fontFamily = "'Poppins', sans-serif";
    notif.style.cursor = 'pointer';

    // Ocultar al hacer clic
    notif.onclick = () => {
        notif.remove();
    };

    container.appendChild(notif);

    // Desaparece automáticamente después de 6 segundos
    setTimeout(() => {
        notif.classList.add('fadeout');
        setTimeout(() => notif.remove(), 500);
    }, 6000);
}

// Función para simular donación y actualizaciones con notificaciones
function makeDonation() {
    const amountStr = prompt("Ingrese el monto de la donación (ej: 50 USD):");
    const amount = parseFloat(amountStr);
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
    totalDonations += amount;

    showNotification(`¡Gracias ${donorName}! Donaste ${amount} USD. ¡Eres parte del cambio!`);

    // Notificación de logros alcanzados
    if (totalDonations >= donationGoal) {
        showNotification(`¡Meta alcanzada! Hemos recaudado ${totalDonations} USD para nuestra causa. Gracias a tu apoyo.`);
    } else {
        // Mostrar progreso actual
        const percent = ((totalDonations / donationGoal) * 100).toFixed(1);
        showNotification(`Campaña en curso: Recaudado ${totalDonations} USD (${percent}%) de ${donationGoal} USD.`);
    }
    function agregarAlCarrito(nombre, monto) {
    // Crear un formulario dinámico
    var form = document.createElement('form');
    form.method = 'POST';
    form.action = 'carrito.php'; // Cambia esto a la URL de tu carrito

    // Crear un campo oculto para el nombre
    var inputNombre = document.createElement('input');
    inputNombre.type = 'hidden';
    inputNombre.name = 'nombre';
    inputNombre.value = nombre;
    form.appendChild(inputNombre);

    // Crear un campo oculto para el monto
    var inputMonto = document.createElement('input');
    inputMonto.type = 'hidden';
    inputMonto.name = 'monto';
    inputMonto.value = monto;
    form.appendChild(inputMonto);

    // Agregar el formulario al documento y enviarlo
    document.body.appendChild(form);
    form.submit();
}


    // Mostrar ventana de agradecimiento y sorteo
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
                <p>Gracias por donar <strong>${amount}</strong> USD.</p>
                <p>Estás concursando por un iPhone 7.</p>
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

