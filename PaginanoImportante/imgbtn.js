<script>
    function mostrarNuevoContenido() {
        document.getElementById('titulo').innerHTML = "¡Gracias por aceptar!";
        document.getElementById('contenido').innerHTML = "Ahora estás viendo el nuevo contenido.";
        
        // Agregar imagen
        let img = document.createElement("img");
        img.src = "ruta/a/tu-imagen.jpg"; // Cambia por el path real
        img.alt = "Imagen de ejemplo";
        img.style.maxWidth = "100%";
        document.getElementById('contenido').appendChild(img);

        // Ocultar botones
        document.getElementById('botones').style.display = "none";
    }

    function cancelar() {
        alert("Has cancelado la acción.");
    }
</script>