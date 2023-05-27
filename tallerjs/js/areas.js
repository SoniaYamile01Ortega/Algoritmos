function areaTri() {
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let areaTri = (base * altura) / 2;
    document.getElementById("AreaTri").textContent = areaTri;
}

function periTri() {
    let ladoA = parseFloat(document.getElementById("valor1").value);
    let ladoB = parseFloat(document.getElementById("valor2").value);
    let base = parseFloat(document.getElementById("base").value);
    let perimetro = (ladoA + ladoB + base);
    document.getElementById("PeriTri").textContent = perimetro;
}

function areaRec() {
    let base = parseFloat(document.getElementById("base1").value);
    let altura = parseFloat(document.getElementById("altura1").value);
    let AreaRec = (base * altura);
    document.getElementById("AreaRec").textContent = AreaRec;
}

function periRec() {
    let base = parseFloat(document.getElementById("base1").value);
    let altura = parseFloat(document.getElementById("altura1").value);
    let perimetro = 2 * ((altura + base));
    document.getElementById("PeriRec").textContent = perimetro;

}

function areaCua() {
    let lado = parseFloat(document.getElementById("lado").value);
    let areaCuadrado = lado * lado;
    document.getElementById("AreaCua").textContent = areaCuadrado;
}

function periCua() {
    let lado = parseFloat(document.getElementById("lado").value);
    let perimetro = 4 * lado;
    document.getElementById("PeriCua").textContent = perimetro;
}

function areaCir() {
    let radio = parseFloat(document.getElementById("radio").value);
    let areaCirculo = Math.PI * radio * radio;
    document.getElementById("AreaCir").textContent = areaCirculo;
}

function periCir() {
    let radio = parseFloat(document.getElementById("radio").value);
    let periCirculo = 2 * Math.PI * radio * radio;
    document.getElementById("PeriCir").textContent = periCirculo;
}