// Función para mostrar la sección seleccionada
function mostrarSeccion(id) {
    // Ocultamos todas las secciones
    let secciones = document.querySelectorAll('section');
    secciones.forEach(function(seccion) {
        seccion.style.display = 'none';
    });
    
    // Mostramos la sección seleccionada
    let seccionSeleccionada = document.getElementById(id);
    if (seccionSeleccionada) {
        seccionSeleccionada.style.display = 'block';
    }
}

// Mostrar la primera sección por defecto
mostrarSeccion('de-que-se-trata');
