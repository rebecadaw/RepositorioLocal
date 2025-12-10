// Mostrar alerta de bienvenida
window.addEventListener('load', () => {
    alert("¡Bienvenido a la historia de los videojuegos!");
});

// Función para resaltar sección al hacer clic en navegación
function navegar(seccionId) {
    const seccion = document.getElementById(seccionId);
    if (seccion) {
        seccion.scrollIntoView({ behavior: 'smooth' });

        // Efecto visual: cambio de fondo temporal
        seccion.style.backgroundColor = "#2a2a4d";
        setTimeout(() => {
            seccion.style.backgroundColor = "transparent";
        }, 1000);//Holaa
    }
}
