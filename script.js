// Ejercicio 3
const arrayAlCuadrado = [2,3,4,5,6,7];

for (var e = 0; e < arrayAlCuadrado.length; e++) {
    const resultadoAlCuadrado = arrayAlCuadrado.map(function(x) {
        return x ** 2;
    });
    console.log(resultadoAlCuadrado[e]);
}

// Ejercicio 6
const coloresEnElArray = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
let ingreseColor = prompt("Ingrese un color").toLowerCase();

if (coloresEnElArray.includes(ingreseColor)) {
    console.log(`${ingreseColor} esta en el array`);
} else {
    console.log(`${ingreseColor} no esta en el array`);
}

// Ejercicio 9
const posiciones = [1,2,3,4,5];
let aux = "";

const intercambiar = (arr, i1, i2) => {
    aux = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = aux;
    return arr;
};

let resulIntercambiar = intercambiar(posiciones, 1, 2);
console.log(resulIntercambiar);

// Ejercicio 12
let cambiarColorfila1Ej12 = document.getElementById("fila1Ej12");
let cambiarColorfila2Ej12 = document.getElementById("fila2Ej12");
let cambiarColorfila3Ej12 = document.getElementById("fila3Ej12");
let colores = ["red", "blue", "green", "white", "orange"];

function cambiarColor2 () {
    cambiarColorfila1Ej12.addEventListener("click", f => {
        let color = "";
        for (let t = 0; t < 6; t++) {
            color += colores[randomNumber2()];
            cambiarColorfila1Ej12.style.backgroundColor = color;
        }
    })
    cambiarColorfila2Ej12.addEventListener("click", f => {
        let color = "";
        for (let t = 0; t < 6; t++) {
            color += colores[randomNumber2()];
            cambiarColorfila2Ej12.style.backgroundColor = color;
        }
    })
    cambiarColorfila3Ej12.addEventListener("click", f => {
        let color = "";
        for (let t = 0; t < 6; t++) {
            color += colores[randomNumber2()];
            cambiarColorfila3Ej12.style.backgroundColor = color;
        }
    })
}

function randomNumber2() {
    return Math.floor(Math.random() * colores.length);
}

cambiarColor2();

// Ejercicio 15
let hipervinculo = document.getElementById("hipervinculo");
let botonYoutube = document.getElementById("botonYoutube");
let botonInstagram = document.getElementById("botonInstagram");
let botonFacebook = document.getElementById("botonFacebook");

function cambiarVinculo () {
    botonYoutube.addEventListener("click", function() {
        hipervinculo.setAttribute("href", "https://www.youtube.com/@argentinaprograma4.0/featured");
        hipervinculo.innerHTML = "Argentina Programa 4.0 en Youtube";
    })
    botonInstagram.addEventListener("click", function() {
        hipervinculo.setAttribute("href", "https://www.instagram.com/argentinaprograma4.0/");
        hipervinculo.innerHTML = "Argentina Programa 4.0 en Instagram";
    })
    botonFacebook.addEventListener("click", function() {
        hipervinculo.setAttribute("href", "https://www.facebook.com/profile.php?id=100084956654182");
        hipervinculo.innerHTML = "Argentina Programa 4.0 en Facebook";
    })
}

cambiarVinculo();

// Ejercicio 18 NO HECHO

// Ejercicio 20
document.getElementById("mantenerEnLaPagina").addEventListener('click', y => {
    y.preventDefault();
    console.log(y.target.href);
  });

// Ejercicio 21
let botonEnviar = document.getElementById("botonEnviar");
function formulario () {
    botonEnviar.addEventListener("click", function (g) {
        g.preventDefault();
        let textoAviso = document.getElementById("textoAviso");
        textoAviso.innerHTML += `<p>Se a enviado tu mensaje!</p>`;
        let reiniciar = document.getElementById("envioMensaje").reset();
    })
}

formulario();