/*Pedidos almacenará pedidos realizados por los clientes. 
Se deben utilizar los tipos de datos
más adecuados a cada campo (entero, decimal, booleano, cadena, etc.). 
Debe incluir la 
siguiente información: 
o Número de pedido: el número único que identifica al pedido. 
o Cliente: nombre y apellidos del cliente, que permitirá al menos 50 caracteres. 
o Fecha de pedido: la fecha de realización del pedido.  
o Procesado: que indicará si el pedido ya ha sido procesado de forma completa 
o Servido: que indicará si el pedido ya ha sido servido al cliente. +/

//esto de arriba es para no perderme....

/*entiendo que lo primero es crear lo relacionado con el cliente
según lo visto en el tema tres lo mejor es usar const para
crear el objeto cliente y asi cambiar las propiedades en funcion del cliente*/

const pedido = {
    numeroPedido: numeroPedido,
    cliente: cliente,
    fechaPedido: fechaPedido,
    procesado: false, /*por defecto*/
    servido: false /* por defecto*/
};

/*GESTIÓN DE PEDIDOS 
Se permitirá dar de alta, baja, modificar y consultar pedidos. Se deberá comprobar lo siguiente: 
a) Que no se intenta dar de alta un número de pedido ya existente y que este es mayor o igual 
que 1 no admitiendo decimales. 
b) Que los tipos son adecuados a cada campo. 
c) Que la fecha de pedido tiene un formato correcto. 
d) Que la fecha de pedido no es posterior al día en el que se registra. */

// Función para añadir un nuevo pedido
/* Validación: numeroPedido como identificador, cliente par los datos de cliente
    y fechaPedido para introducir la fecha en la que se realiza el pedido
    no hago referncia a si esta procesado o servido porque esto es solo
    para crear el pedido por lo que aun no necesito validar si esta procesado
    o servido ..no tendria sentido hacerlo aqui*/

function addPedido(numeroPedido, cliente, fechaPedido) {
    if (numeroPedido < 1 || isNaN(numeroPedido)) { 
        alert("Número de pedido no válido.");
        return;
    }
    if (!cliente || !fechaPedido) {
        alert("El cliente y la fecha son obligatorios.");
        return;
    }
};

