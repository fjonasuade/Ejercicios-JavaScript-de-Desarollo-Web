let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let edad = prompt("Ingrese su edad");

window.onload = function() {
    alert(`Bienvenido, ${nombre} ${apellido}!`);
    alert(`Has vivido aproximadamente ${edad * 365} días desde que naciste.`);
}
