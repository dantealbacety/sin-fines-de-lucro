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

const events = [
    new Event(1, "Evento de Recaudación", "2023-11-01", "https://myevent.com/athons/ideas?lang=es"),
    new Event(2, "Taller de Capacitación", "2023-11-15", "https://awsassets.panda.org/downloads/hacer_talleres___guia_para_capacitadores_wwf.pdf"),
    new Event(3, "Concierto Benéfico", "2023-12-01", "https://www.changethegameacademy.org/es/examples/local-fundraising/view?id=90")
];

const projects = [
    new Project(1, "Proyecto de Educación", "Mejorar la educación en comunidades vulnerables.", "https://www.educacion2020.cl/noticias/educacion-2020-trabaja-en-proyectos-para-mejorar-la-educacion-en-12-comunas-de-chile/"),
    new Project(2, "Proyecto de Salud", "Proveer atención médica a personas sin recursos.", "https://www.salud2020.cl/proyectos-salud/")
];

let totalDonations = 0;
let donationGoal = 1000;

// Función para mostrar notificaciones con animaciones
function showNotification(message, type = 'success') {
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        container.style.position = 'fixed';
        container.style.top = '20px';
        container.style.right = '20px';
        container.style.width = '320px';
        container.style.zIndex = '9999';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.gap = '12px';
        document.body.appendChild(container);
    }

    const notif = document.createElement('div');
    notif.classList.add('notification');
    notif.style.background = (type === 'info') ? 'linear-gradient(135deg, #FBBF24, #D97706)' : 'linear-gradient(135deg, #34D399, #059669)';
    notif.style.color = 'white';
    notif.style.padding = '15px 20px';
    notif.style.borderRadius = '14px';
    notif.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
    notif.style.fontWeight = '600';
    notif.style.cursor = 'pointer';
    notif.style.opacity = '0';
    notif.style.transform = 'translateX(100%) scale(0.8)';
    notif.style.display = 'flex';
    notif.style.alignItems = 'center';
    notif.style.animation = 'slideIn 0.5s ease forwards';

    notif.innerHTML = `
        <svg class="icon" fill="${type === 'info' ? '#FBBF24' : '#34D399'}" viewBox="0 0 24 24" width="28" height="28" style="margin-right:12px; flex-shrink:0; animation: pulseGlow 2s infinite alternate;">
            ${type === 'info' ? 
            `<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
             <path d="M12 16v-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             <path d="M12 8h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`
             : `<path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`}
        </svg>
        <div class="message" style="flex:1;">${message}</div>`;

    notif.onclick = () => {
        notif.style.animation = 'slideOut 0.5s ease forwards';
        setTimeout(() => notif.remove(), 500);
    };

    container.appendChild(notif);

    setTimeout(() => {
        notif.style.animation = 'slideOut 0.5s ease forwards';
        setTimeout(() => notif.remove(), 500);
    }, 6000);
}

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

    showNotification(`¡Gracias ${donorName}! Donaste ${amount} USD. ¡Eres parte del cambio!`, 'success');

    if (totalDonations >= donationGoal) {
        showNotification(`¡Meta alcanzada! Hemos recaudado ${totalDonations} USD para nuestra causa. Gracias a tu apoyo.`, 'info');
    } else {
        const percent = ((totalDonations / donationGoal) * 100).toFixed(1);
        showNotification(`Campaña en curso: Recaudado ${totalDonations} USD (${percent}%) de ${donationGoal} USD.`, 'info');
    }

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
