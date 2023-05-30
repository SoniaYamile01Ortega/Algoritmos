var personas = [];

function agregarPersona() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("formulario").style.display = "block";
}

function guardarPersona() {
    var nombre = document.getElementById("nombre").value;
    var cedula = document.getElementById("cedula").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var correo = document.getElementById("correo").value;
    var ciudadResidencia = document.getElementById("ciudadResidencia").value;
    var ciudadOrigen = document.getElementById("ciudadOrigen").value;

    var gustosMusicales = [];
    var gustosDiv = document.getElementById("gustosMusicales");
    var gustoMusicalDivs = gustosDiv.getElementsByClassName("gustoMusical");
    for (var i = 0; i < gustoMusicalDivs.length; i++) {
        var gustoDiv = gustoMusicalDivs[i];
        var artista = gustoDiv.querySelector("input[type='text']").value;
        var cancion = gustoDiv.querySelector("input[type='text']").nextElementSibling.value;
        gustosMusicales.push({ artista: artista, cancion: cancion });
    }

    var persona = {
        nombre: nombre,
        cedula: cedula,
        fechaNacimiento: fechaNacimiento,
        correo: correo,
        ciudadResidencia: ciudadResidencia,
        ciudadOrigen: ciudadOrigen,
        gustosMusicales: gustosMusicales
    };

    personas.push(persona);

    document.getElementById("formulario").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("personaForm").reset();
}

function mostrarInformacion() {
    var posicion = parseInt(prompt("Ingrese la posición de la persona:"));

    if (posicion >= 0 && posicion < personas.length) {
        var persona = personas[posicion];
        var infoDiv = document.getElementById("personaInfo");
        infoDiv.innerHTML = "";
        infoDiv.innerHTML += "<p><strong>Nombre:</strong> " + persona.nombre + "</p>";
        infoDiv.innerHTML += "<p><strong>Cédula:</strong> " + persona.cedula + "</p>";
        infoDiv.innerHTML += "<p><strong>Fecha de Nacimiento:</strong> " + persona.fechaNacimiento + "</p>";
        infoDiv.innerHTML += "<p><strong>Correo Electrónico:</strong> " + persona.correo + "</p>";
        infoDiv.innerHTML += "<p><strong>Ciudad de Residencia:</strong> " + persona.ciudadResidencia + "</p>";
        infoDiv.innerHTML += "<p><strong>Ciudad de Origen:</strong> " + persona.ciudadOrigen + "</p>";
        infoDiv.innerHTML += "<h3>Gustos Musicales</h3>";
        persona.gustosMusicales.forEach(function(gustoMusical, index) {
            infoDiv.innerHTML += "<p><strong>Artista Favorito " + (index + 1) + ":</strong> " + gustoMusical.artista + "</p>";
            infoDiv.innerHTML += "<p><strong>Canción Favorita " + (index + 1) + ":</strong> " + gustoMusical.cancion + "</p>";
        });
        
        document.getElementById("menu").style.display = "none";
        document.getElementById("informacion").style.display = "block";
    } else {
        alert("La posición ingresada no es válida.");
    }
}

function volver() {
    document.getElementById("informacion").style.display = "none";
    document.getElementById("menu").style.display = "block";
}

function cancelar() {
    document.getElementById("formulario").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("personaForm").reset();
}
