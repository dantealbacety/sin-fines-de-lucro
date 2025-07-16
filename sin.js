// Simulación de datos de eventos y proyectos
const events = [
    { id: 1, name: "Evento de Recaudación", date: "2023-11-01" },
    { id: 2, name: "Taller de Capacitación", date: "2023-11-15" },
    { id: 3, name: "Concierto Benéfico", date: "2023-12-01" }
];
const projects = [
    { id: 1, name: "Proyecto de Educación", description: "Mejorar la educación en comunidades vulnerables." },
    { id: 2, name: "Proyecto de Salud", description: "Proveer atención médica a personas sin recursos." }
];
// Función para buscar eventos
function search() {
       const input = document.getElementById('events-input').value.toLowerCase();
    // Definir las URLs a las que redirigir según el evento buscado
    const eventUrls = {
        "evento de recaudación": "https://myevent.com/athons/ideas?lang=es",
        "taller de capacitación": "https://awsassets.panda.org/downloads/hacer_talleres___guia_para_capacitadores_wwf.pdf",
        "concierto benefico": "https://www.changethegameacademy.org/es/examples/local-fundraising/view?id=90"
    };
    // Verificar si el input coincide con alguna clave en el objeto eventUrls
    if (eventUrls[input]) {
        // Redirigir a la URL correspondiente
        window.location.href = eventUrls[input];
    } else {
        alert("No se encontró el evento. Intenta con 'Evento de Recaudación', 'Taller de Capacitación' o 'Concierto Benéfico'.");
   
    }
}

// Función para mostrar proyectos
function displayProjects() {
    const projectsList = document.getElementById('projects-list');
    projects.forEach(project => {
        const projectElement = document.createElement('li');
        projectElement.innerHTML = `<strong>${project.name}</strong>: ${project.description}`;
        projectsList.appendChild(projectElement);
    });
}
// Función para realizar donaciones
function makeDonation() {
    alert("Gracias por su interés en realizar una donación. Por favor, siga las instrucciones en la página de donaciones.");
}
// Llamar a la función para mostrar proyectos al cargar la página
window.onload = displayProjects;