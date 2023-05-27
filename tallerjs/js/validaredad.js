// Función para validar que la edad ingresada esté en el rango válido
function validarEdad(edad) {
    return edad >= 1 && edad <= 120;
  }
  
  // Vector para almacenar las edades
  var edades = [];
  
  // Ciclo para ingresar las edades
  for (var i = 0; i < 10; i++) {
    var edad = parseInt(prompt("Ingrese la edad de la persona " + (i + 1)));
  
    // Validar la edad ingresada
    while (!validarEdad(edad)) {
      alert("La edad ingresada no es válida. Debe estar entre 1 y 120 años.");
      edad = parseInt(prompt("Ingrese nuevamente la edad de la persona " + (i + 1)));
      conerro++;
    }
  
    edades.push(edad);
  }
  
  // Variables para almacenar los resultados
  var menoresEdad = 0;
  var mayoresEdad = 0;
  var adultosMayores = 0;
  var edadMinima = edades[0];
  var edadMaxima = edades[0];
  var sumaEdades = 0;
  var conerro = 0;
  
  // Ciclo para calcular los resultados
  for (var i = 0; i < edades.length; i++) {
    var edadActual = edades[i];
  
    if (edadActual < 18) {
      menoresEdad++;
    } else if (edadActual >= 18 && edadActual < 60) {
      mayoresEdad++;
    } else {
      adultosMayores++;
    }
  
    if (edadActual < edadMinima) {
      edadMinima = edadActual;
    }
  
    if (edadActual > edadMaxima) {
      edadMaxima = edadActual;
    }
  
    sumaEdades += edadActual;
  }
  
  // Calcular promedio de edades
  var promedioEdades = sumaEdades / edades.length;
  
  // Mostrar los resultados
  console.log("Cantidad de personas menores de edad: " + menoresEdad);
  console.log("Cantidad de personas mayores de edad: " + mayoresEdad);
  console.log("Cantidad de adultos mayores: " + adultosMayores);
  console.log("Edad más baja: " + edadMinima);
  console.log("Edad más alta: " + edadMaxima);
  console.log("Promedio de edades: " + promedioEdades.toFixed(2));
  

// Mostrar los resultados en HTML
document.getElementById("menores-edad").textContent = menoresEdad;
document.getElementById("mayores-edad").textContent = mayoresEdad;
document.getElementById("adultos-mayores").textContent = adultosMayores;
document.getElementById("edad-minima").textContent = edadMinima;
document.getElementById("edad-maxima").textContent = edadMaxima;
document.getElementById("promedio-edades").textContent = promedioEdades.toFixed(2);