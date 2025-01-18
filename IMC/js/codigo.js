/*Nos piden realizar una aplicación con dos clases: 
Clase Persona: 
Nombre 
Peso  
Altura */

class Persona {
    constructor(nombre, peso, altura) {
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
    }
}


/*Y con la clase IMC o calculo 
Nombre 
IMC */

class IMC {
    constructor(nombre, imc) {
        this.nombre = nombre;
        this.imc = imc;
    }
}

/*Con la primera de las clases, deberéis almacenar distintas personas con sus pesos y alturas, 
que deberéis pedir al usuario. La pantalla será la siguiente: 
Los campos Peso y Altura, deben ser numéricos.*/

/*Array o lista para almacenar personas.
Uso let en lugar de const porque let permite que las variables sean reasignadas, 
mientras que const se utiliza para variables que no deben cambiar su valor una vez asignado.
Las variables persona e imc se crean y pueden ser modificadas dentro de sus respectivos bloques de código.*/

let personas = [];

//Array o lista para almacenar resultados de IMC fuera de rango
let imcs = [];

function añadirPersona(nombre, peso, altura) {
    let persona = new Persona(nombre, peso, altura);
    personas.push(persona);
    /*El método push en JavaScript se utiliza para añadir un nuevo elemento al final de un array
    y el console.log dentro de la función añadirPersona, para ver en la consola del navegador 
    un mensaje que indica que la persona ha sido añadida, junto con su nombre.*/
    console.log(`Persona añadida: ${nombre}`);
}

/*MODIFICAR: El usuario podrá introducir un nombre, un peso y una altura, y deberéis modificar los datos de ese 
usuario (que ya deberá estar dado de alta). */

function modificarPersona(nombre, nuevoPeso, nuevaAltura) {
    for (let persona of personas) {
        if (persona.nombre === nombre) { 
            /*La expresión persona.nombre === nombre verifica si el valor de persona.nombre 
            es igual al valor de nombre. El operador === en JavaScript se utiliza para comparar 
            tanto el valor como el tipo de los dos operandos. Si ambos son iguales y del mismo tipo, 
            la comparación devuelve true; de lo contrario, devuelve false*/
            persona.peso = nuevoPeso;
            persona.altura = nuevaAltura;
            /*Esa línea de código asigna nuevos valores a las propiedades peso y altura de la instancia de la clase Persona. 
            En otras palabras, actualiza el peso y la altura de la persona con los valores proporcionados (nuevoPeso y nuevaAltura)*/
            return;
        }
    }
    console.log("Persona no encontrada.");
}

/*CALCULAR: Calculareis el IMC de cada usuario dado de alta, siendo la formular: 
IMC = Peso / Cuadrado de la Altura 
Si el IMC esta entre 0 y 18.48 la persona es demasiado delgada. 
Si el IMC esta entre 18,49 y 24.99 la persona tiene un peso normal. 
Si el IMC esta por encima de 25.00 la persona es demasiado obesa. 
Mostrareis en pantalla el resultado del IMC para cada una de las personas dadas de alta. 
Almacenareis en la segunda clase, el nombre y el IMC de cada persona que no esté en un peso normal.*/

function calcularIMC() {
    imcs = [];//Inicialización del array imcs
    for (let persona of personas) {//Este bucle for...of recorre cada objeto persona en el array personas
        let imc = persona.peso / (persona.altura * persona.altura);//Aquí se calcula el Índice de Masa Corporal (IMC)
        let salud;
        //Determinación del estado de la persona
        if (imc < 18.49) {
            salud = "demasiado delgada";
        } else if (imc < 25.00) {
            salud = "peso normal";
        } else {
            salud = "demasiado obesa";
        }
        if (salud !== "peso normal") {//Almacenamiento de personas con IMC fuera del rango normal:
            imcs.push(new IMC(persona.nombre, imc));
        }
        console.log(`${persona.nombre}: IMC = ${imc.toFixed(2)}, Salud = ${salud}`);
        //La función toFixed en JavaScript se utiliza para formatear un número a un número fijo de decimales. 
        //En el caso de imc.toFixed(2), estamos formateando el valor del IMC para que tenga exactamente dos decimales.
    }
}

// Ejemplo de uso
añadirPersona("Juan", 70, 1.75);
añadirPersona("María", 60, 1.65);
modificarPersona("Juan", 75, 1.75);
calcularIMC();

