function saludarSegunHora(){
    /* 
    Creo función llamada "saludarSegunHora", esta función instancia en una variable llamada "hora", el objeto "Date" y en este
    mismo objeto usa la funcion "getHours" para solo coger la hora, es decir, de 0 a 23.
    */
    let hora = new Date().getHours();
    // si la hora es entre las 5 y las 12 escribe "Buenos dias" en el documento.
    if ((hora >= 5) && (hora <= 12)){
        document.write('Buenos días');
    // si la hora es mayor a 12 y entre las 18, escribe en el documento "Buenas tardes"
    } else if ((hora > 12) && (hora <=18)){
        document.write('Buenas tardes');
    // sino es una u otra "Buenas noches".
    } else {
        document.write('Buenas noches')
    }
}
saludarSegunHora();