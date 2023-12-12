/* 
Mediante el uso de la función "document.querySelectorAll" vamos a recoger todas las flechas con 
la clase ".arrow" y se guardarán en un array llamado flechas.
 */
const flechas = document.querySelectorAll('.arrow');

// Realizaremos sobre este array un bucle forEach que recorra este array, "flecha" será el valor de la iteración
flechas.forEach(flecha => {
    // a flecha (valor actual de la iteración) añadiremos un evento de click con una fucnión.
    flecha.addEventListener('click', function(){
        /* 
        subMenu guarda la parte de codigo hermana al padre de la flecha que el usuario ha pulsado. 
        */
        const subMenu = this.parentElement.nextElementSibling;
        // al haber guardado subMenu nos permite añadirle la clase "show" para que se muestre
        subMenu.classList.toggle('show');
        /* 
        Al objeto actual, es decir, la flecha que hemos pulsado le aplicaremos la clase "rotate-arrow", 
        esta clase contiene las caracteristicas que permiten al objeto rotar en CSS.
        */
        this.classList.toggle('rotate-arrow');
    })
})

