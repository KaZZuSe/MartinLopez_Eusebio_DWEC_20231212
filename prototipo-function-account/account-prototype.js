function CuentaBancaria(nombre, dni, saldo) {
    /* 
    Creo la funcion prototipo "CuentaBancaria" en la cual
    solo puedo poner los valores "nombre", "dni" y "saldo"
    "numeroCuenta" será un valor que se genere para cada instancia de la función, es decir,
    no lo puedo sobreescribir 
    */
    this.nombre = nombre;
    this.dni = dni;
    this.saldo = saldo;
    this.numeroCuenta = "ES" + Math.floor(Math.random() * 99999999999999999999).toString().padStart(20, '0');
    // Creo el método "mostrarDatos", para visualizar la información, uso el carácter de escape \n para realizar saltos de línea
    this.mostrarDatos = function () {
        console.log(`Nombre: ${this.nombre}\n DNI: ${this.dni}\n Número de cuenta: ${this.numeroCuenta}\n Saldo: ${this.saldo}`);
    }
    /*
    Creo el método "realizarIngreso", sumará el el valor que pongamos como parámetro de entrada al saldo. 
    Nos saltará un mensaje por consola con el saldo actual.
     */
    this.realizarIngreso = function (monto) {
        this.saldo += monto;
        console.log(`Ingreso Realizado. Nuevo saldo: ${this.saldo}`);
    }
    /* 
    Creo el método "realizarRetiro" que tiene un valor de parámetro de entrada
    comprobará si este valor es mayor al saldo, en caso de serlo, dará un mensaje de error
    que no te permitirá realizar el retiro.
    En caso de ser menor, puedes realizarlo la resta
    */
    this.realizarRetiro = function (monto) {
        if (monto > this.saldo) {
            console.log(`No puedes sacar ${monto} porque tienes ${this.saldo}`);
        } else {
            this.saldo -= monto;
            // mensaje de retiro
            console.log(`Retiro realizado. Nuevo saldo: ${this.saldo}`);
        }
    }
    /* 
    Creo el método "realizarTransferencia", que mediante una función tendremos que poner la cuenta de destino como parámetro, es decir,
     una variable instanciada con la misma función y un valor de dinero que voy a ingresar
    */
    this.realizarTransferencia = function (cuentaDestino, monto) {
        if (monto > this.saldo) { //compruebo que no puedo enviar mas dinero del que tengo
            console.log(`No puedes transferir ${monto} porque tienes ${this.saldo}`);
        } else {
            // en caso de poder, resto dinero a la cuenta que realiza ingreso.
            this.saldo -= monto;
            // uso la funcion "realizarIngreso" para sumar el valor
            cuentaDestino.realizarIngreso(monto);
            // mensaje de transferencia
            console.log(`Transferencia realizada. Nuevo saldo: ${this.saldo}`);
        }
    }
}

let use = new CuentaBancaria ('Use', '123456789A', 2000);
let dani = new CuentaBancaria ('Dani', '987654321A', 4000);

use.mostrarDatos();
dani.mostrarDatos();
use.realizarIngreso(500);
dani.realizarRetiro(4001);
dani.realizarRetiro(4000);
use.realizarTransferencia(dani, 500);
use.mostrarDatos();
dani.mostrarDatos();