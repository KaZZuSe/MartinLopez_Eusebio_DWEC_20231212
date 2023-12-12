/* 
Creo la clase Aula con los parámetros "numero" y "capacidad" en el constructor 
*/
class Aula{
    constructor(numero, capacidad){
        this.numero = numero;
        this.capacidad = capacidad;
    }
    /* 
    Creo el método "presentarMateriales" que muestra en consola información sobre la clase 
    */
    presentarMateriales(){
        console.log(`Bienvenidos al aula ${this.numero}, la cual tiene capacidad para ${this.capacidad} personas`);
    }
}
/* 
Creo la clase Musica que es hija de Aula, es decir, hereda 
*/
class Musica extends Aula{
    // heredo del constructor los parámetros "numero" y "capacidad" mediante el uso de "super" e instancio "instrumento".
    constructor(numero, capacidad, instrumento){
        super(numero,capacidad);
        this.instrumento = instrumento;
    }
    // Creo el mismo método cambiando el valor para ver el cambio, es decir, el polimorfismo.
    // El polimorfismo una característica de la POO que nos permite tener un mismo metodo o variable teniendo valores distintos.
    presentarMateriales(){
        console.log(`Bienvenidos al aula de música número ${this.numero}. Hoy presentaremos los materiales necesarios para la clase de ${this.instrumento}, solamente tenemos ${this.capacidad} plazas`);
    }
}
// Creo la clase Tecnologia la cual también hereda de Aula.
class Tecnologia extends Aula{
    // Esta clase también hereda el constructor de Aula (como la clase Musica) e instancio "cantidadOrdenadores" valor para la clase Tecnologia solo
    constructor(numero, capacidad, cantidadOrdenadores){
        super(numero, capacidad);
        this.cantidadOrdenadores = cantidadOrdenadores;
    }
    // Tal como hago en la clase Musica, evidencio el polimorfismo creando el metodo "presentarMateriales" pero sobreescibiendo su valor
    presentarMateriales(){
        console.log(`Bienvenidos al aula de tecnología número ${this.numero}. El día de hoy hemos comprador ${this.cantidadOrdenadores} ordenadores adicionales para aprender a programar, en total ahora tenemos ${this.capacidad} estudiantes de capacidad`);
    }
}

// instancio cada clase en una variable asignando distintos valores.
let claseAula = new Aula(3, 33);
let claseMusica = new Musica(2, 22, 'Guitarra');
let claseTecnologia = new Tecnologia(5, 55, 109);

// ejecuto el mismo metodo de las distintas variables, podemos observar un cambio en su valor, es decir, polimorfismo.
claseAula.presentarMateriales();
claseMusica.presentarMateriales();
claseTecnologia.presentarMateriales();