document.addEventListener("DOMContentLoaded", function() {
    function toggleContent(event) {
        event.preventDefault(); 
        const contenidoId = event.target.id.replace('enlace', 'contenidos');
        const contenido = document.getElementById(contenidoId);
        
        if (contenido.style.display === "none") {
            contenido.style.display = "block";
            event.target.textContent = "Ocultar contenidos"; 
        } else {
            contenido.style.display = "none";
            event.target.textContent = "Volver a ver"; 
        }
    }
    const enlaces = document.querySelectorAll('a[id^="enlace_"]');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', toggleContent);
    });
});