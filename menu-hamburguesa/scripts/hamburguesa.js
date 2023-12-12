// hamburger es una variable que coge la clase "hamburger" y la almacena. Usando la función "document.querySelector"
const hamburger = document.querySelector('.hamburger');
// navLinks es una variable que almacena la clase "nav-links". Usando la función "document.querySelector"
const navLinks = document.querySelector('.nav-links');

// A la variable hamburger se añade un evento de click con una función (puede ser flecha, anónima, o dada)
hamburger.addEventListener('click', function(){
    // añade la clase "active" a la variable navLinks (esta variable almacenaba la clase ".nav-links")
    navLinks.classList.toggle('active');
});
 // esta parte de código es la equivalente hecha de otra manera.
/* 
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


hamburger.addEventListener('click',callBack());
function callBack(){
    navLinks.classList.toggle('active');
} */