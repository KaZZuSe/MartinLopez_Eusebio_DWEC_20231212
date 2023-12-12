/**
 * Ejercicio 1, preguntaremos al usuario mediante una ventana diversos datos,
 * las variables: nombre, apellidos, edad, ciclo; se encargarán de almacenar 
 * estos datos que preguntamos al usuario.
 * En la variable ciclo al separar con una coma mostraremos un texto por defecto
 */
let nombre = prompt('¿Cuál es tu nombre?'); 
let apellidos = prompt('¿Cuáles son tus apellidos?');
let edad = prompt('¿Qué edad tienes?');
let ciclo = prompt('¿WQué ciclo estudias?', 'DAW');

/**
 * Mostraremos mediante el uso del "document.write" la información en la página web
 * con el uso del br separaremos en distintas lineas. De esta manera cada línea mostrará un dato..
 */
document.write(`Tu nombre es ${nombre}`);
document.write("<br>");
document.write(`Tus apellidos son ${apellidos}`);
document.write("<br>");
document.write(`Tienes ${edad} años`);
document.write("<br>");
document.write(`Estudias el ciclo formativo ${ciclo}`);