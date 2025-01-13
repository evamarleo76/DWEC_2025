/*Piezas. En este tipo de datos se recogen las piezas que pueden servirse 
en un pedido. Debe 
incluir la siguiente información: 
o Número de pieza. Aunque son piezas al corte, se identificará cada una de ellas de 
forma única con un número entero. 
o Número de pedido. Pedido al que está asociada la pieza. Al ser a medida, cada pieza 
solo puede pertenecer a un pedido. 
o Largo: el largo de la pieza en cm. 
o Ancho: el ancho de la pieza en cm.  
o Grosor: el grosor de la pieza en cm.  
o Color: el color del chapeado de la pieza. Si se guarda con el color “Natural” quiere 
decir que no lleva chapeado.  
o AmbasCaras: si deben estar chapeadas las dos caras  
o Cortada: que indicará si la pieza ya ha sido cortada*/

/* para no olvidarme yo de nada*/
/*empiezo por crear el objeto piezas*/

const nuevaPieza = {
    numeroPieza: numeroPieza,
    numeroPedido: numeroPedido,
    largo: largo,
    ancho: ancho,
    grosor: grosor,
    color: color || "Natural",
    ambasCaras: ambasCaras || false,
    cortada: cortada || false
};

/*y ahora realizo la funcion*/

function addPieza(numeroPieza, numeroPedido, largo, ancho, grosor, color, ambasCaras, cortada) {
    if (numeroPieza < 1 || isNaN(numeroPieza)) {
        alert("Número de pieza no válido.");
        return;
    }

    if (numeroPedido < 1 || isNaN(numeroPedido)) {
        alert("Número de pedido no válido.");
        return;
    }
};
