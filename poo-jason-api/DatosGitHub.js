/* 
creo una variable llamada usuario que va a almacenar un objeto JSON 
usando la función "stringify" para convertirlo todo a cadena. 
*/
const usuario = JSON.stringify({
    'Login': 'KaZZuSe',
    'id': 33,
    'email': 'usemartin2@gmail.com',
    'public_repos': 8
})
/* 
Creo la clase "DatosGitHub" que recoge como constructor "datosUsuario", este valor será el objeto JSON que le pasemos nosotros.
*/
class DatosGitHub{
    constructor(datosUsuario){
        // guardamos en this.datos los datos pasados de cadena a objeto, es decir, "usuario" en mi caso.
        this.datos = JSON.parse(datosUsuario);
        // instanciamos cada campo, es importante los nombres.
        this.login = this.datos.Login;
        this.id = this.datos.id;
        this.email = this.datos.email;
        this.repos = this.datos.public_repos;
    }
    // creo el método que mostrará la información del objeto, campo a campo.
    datosRecibidos(){
        console.log(`El usuario de GitHub ${this.login} tiene un id ${this.id} cuyo correo es ${this.email} y tiene ${this.repos} repositorios públicos`);
    }
}

// instancio la clase "DatosGitHub" en una variable llamada "datosGitHubInstancia", pasándole el string de JSON como parámetro.
let datosGitHubInstancia = new DatosGitHub(usuario);
// muestro los datos llamando al método.
datosGitHubInstancia.datosRecibidos();