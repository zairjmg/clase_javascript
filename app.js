// Crea un archivo app.js que contenga una variable de cada tipo de dato, y que imprima cada una de ellas en la consola.

// Tipos de datos en JavaScript
// En JavaScript existen varios tipos de datos, entre los cuales se encuentran los siguientes:

var nombre = 'Juan';
console.log(nombre); // Juan
var numero = 10;
console.log(numero); // 10
var booleano = true;
console.log(booleano); // true
var arreglo = [1, 2, 3, 4, 5];
console.log(arreglo); // [1, 2, 3, 4, 5]
var objeto = { nombre: 'Juan', edad: 30 };
console.log(objeto); // { nombre: 'Juan', edad: 30 }
var fecha = new Date();
console.log(fecha); // 2020-05-06T18:00:00.000Z
var noExiste = null;
console.log(noExiste); // null
var noDefinido = undefined;
console.log(noDefinido); // undefined
var valorIndefinido;
console.log(valorIndefinido); // undefined

const PI = 3.1416;
console.log(PI); // 3.1416
let num = 10;
console.log(num); // 10
num = 20;
console.log(num); // 20

alert('Hola Mundo!'); // Muestra un mensaje en una ventana emergente
alert(nombre); // Muestra un mensaje en una ventana emergente
prompt('¿Cuál es tu nombre?'); // Muestra un mensaje en una ventana emergente y recibe una entrada del usuario
prompt('¿Cuál es tu nombre?', 'Juan'); // Muestra un mensaje en una ventana emergente con un valor predeterminado y recibe una entrada del usuario
prompt(	'¿Cuál es tu nombre?', nombre); // Muestra un mensaje en una ventana emergente con un valor predeterminado y recibe una entrada del usuario
console.log(nombre); // Muestra un mensaje en la consola del navegador  
confirm('¿Estás seguro?'); // Muestra un mensaje en una ventana emergente con un botón de confirmación
console.log('Hola Mundo!'); // Muestra un mensaje en la consola del navegador
document.write('Hola Mundo!'); // Muestra un mensaje en el documento HTML
document.getElementById('mensaje').innerHTML = 'Hola Mundo!'; // Muestra un mensaje en un elemento HTML
document.getElementById('mensaje').style.color = 'red'; // Cambia el color de un elemento HTML
document.getElementById('mensaje').style.backgroundColor = 'yellow'; // Cambia el color de fondo de un elemento HTML

// Operadores aritméticos en JavaScript
// Los operadores aritméticos en JavaScript son los siguientes:

var suma = 10 + 5; // 15
var resta = 10 - 5; // 5
var multiplicacion = 10 * 5; // 50
var division = 10 / 5; // 2
var modulo = 10 % 5; // 0
var incremento = 10; // 10
incremento++; // 11
var decremento = 10; // 10
decremento--; // 9

// Operadores de asignación en JavaScript
// Los operadores de asignación en JavaScript son los siguientes:

var x = 10; // 10
x += 5; // 15
x -= 5; // 10
x *= 5; // 50
x /= 5; // 10
x %= 5; // 0

// Operadores de comparación en JavaScript
// Los operadores de comparación en JavaScript son los siguientes:

var a = 10;
var b = 5;
console.log(a == b); // false
console.log(a != b); // true
console.log(a < b); // false
console.log(a > b); // true
console.log(a <= b); // false
console.log(a >= b); // true

// Operadores lógicos en JavaScript
// Los operadores lógicos en JavaScript son los siguientes:

// AND (&&)
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
// OR (||)
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
// NOT (!)
console.log(!true); // false
console.log(!false); // true

// Estructuras de control en JavaScript
// Las estructuras de control en JavaScript son las siguientes:

// if (condición) { código a ejecutar }
var edad = 18;
if (edad >= 18) {
    console.log('Eres mayor de edad');
}
// if (condición) { código a ejecutar } else { código a ejecutar }
var edad = 17;
if (edad >= 18) {
    console.log('Eres mayor de edad');
}
else {
    console.log('Eres menor de edad');
}
// if (condición) { código a ejecutar } else if (condición) { código a ejecutar } else { código a ejecutar }
var hora = 14;
if (hora >= 6 && hora < 12) {
    console.log('Buenos días');
}
else if (hora >= 12 && hora < 18) {
    console.log('Buenas tardes');
}
else {
    console.log('Buenas noches');
}
// switch (expresión) { case valor: código a ejecutar break; default: código a ejecutar }
switch (hora) {
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        console.log('Buenos días');
        break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        console.log('Buenas tardes');
        break;
    default:
        console.log('Buenas noches');
        break;
}
// Bucles en JavaScript
// Los bucles en JavaScript son los siguientes:

// while (condición) { código a ejecutar }

var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// do { código a ejecutar } while (condición)
var i = 0;
do {
    console.log(i);
    i++;
}
while (i < 5);
// for (inicialización; condición; incremento) { código a ejecutar }
for (var i = 0; i < 5; i++) {
    console.log(i);
}
// for (variable of iterable) { código a ejecutar }
var arreglo = [1, 2, 3, 4, 5];
for (var elemento of arreglo) {
    console.log(elemento);
}
// for (variable in objeto) { código a ejecutar }
var objeto = { nombre: 'Juan', edad: 30 };
for (var propiedad in objeto) {
    console.log(propiedad + ': ' + objeto[propiedad]);
}

// Funciones en JavaScript
// Las funciones en JavaScript son las siguientes:

// function nombre(parametro1, parametro2, ...) { código a ejecutar return valor; }
function sumar(a, b) {
    return a + b;
}
console.log(sumar(10, 5)); // 15

// Funciones flecha en JavaScript
// Las funciones flecha en JavaScript son las siguientes:

// (parametro1, parametro2, ...) => { código a ejecutar return valor; }
const sum = (a, b) => {
    return a + b;
};
console.log(sum(10, 5)); // 15 

// Objetos en JavaScript
// Los objetos en JavaScript son los siguientes:

// { propiedad1: valor1, propiedad2: valor2, ... }
var objeto = {
    nombre: 'Juan',
    edad: 30,
    saludar: function() {
        console.log('Hola, mi nombre es ' + this.nombre);
    }
};
console.log(objeto.nombre); // Juan
console.log(objeto.edad); // 30
objeto.saludar(); // Hola, mi nombre es Juan

// Clases en JavaScript
// Las clases en JavaScript son las siguientes:
// class nombre { constructor(parametro1, parametro2, ...) { código a ejecutar } método
// nombre(parametro1, parametro2, ...) { código a ejecutar } }
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log('Hola, mi nombre es ' + this.nombre);
    }
}

var persona = new Persona('Juan', 30);
console.log(persona.nombre); // Juan
console.log(persona.edad); // 30
persona.saludar(); // Hola, mi nombre es Juan

// Herencia en JavaScript
// La herencia en JavaScript es la siguiente:
// class nombre extends padre { constructor(parametro1, parametro2, ...) { código a ejecutar
// super(parametro1, parametro2, ...); } }
class Empleado extends Persona {
    constructor(nombre, edad, sueldo) {
        super(nombre, edad);
        this.sueldo = sueldo;
    }
    trabajar() {
        console.log('Estoy trabajando');
    }
}
// Crear un objeto de la clase Empleado
var empleado = new Empleado('Juan', 30, 5000);
console.log(empleado.nombre); // Juan
console.log(empleado.edad); // 30
console.log(empleado.sueldo); // 5000
empleado.saludar(); // Hola, mi nombre es Juan
empleado.trabajar(); // Estoy trabajando

// Métodos de cadenas en JavaScript
// Los métodos de cadenas en JavaScript son los siguientes:
// 1. length: devuelve la longitud de la cadena.
var cadena = 'Hola Mundo!';
console.log(cadena.length); // 11
// 2. toUpperCase: convierte la cadena a mayúsculas.
console.log(cadena.toUpperCase()); // HOLA MUNDO!
// 3. toLowerCase: convierte la cadena a minúsculas.
console.log(cadena.toLowerCase()); // hola mundo!
// 4. charAt: devuelve el carácter en la posición especificada.
console.log(cadena.charAt(0)); // H
// 5. indexOf: devuelve la posición de la primera aparición de un carácter.
console.log(cadena.indexOf('o')); // 1
// 6. lastIndexOf: devuelve la posición de la última aparición de un carácter.
console.log(cadena.lastIndexOf('o')); // 9
// 7. substring: devuelve una parte de la cadena.
console.log(cadena.substring(0, 5)); // Hola
// 8. slice: devuelve una parte de la cadena.
console.log(cadena.slice(0, 5)); // Hola
// 9. split: divide la cadena en un arreglo.
console.log(cadena.split(' ')); // ['Hola', 'Mundo!']
// 10. replace: reemplaza un carácter por otro.
console.log(cadena.replace('o', '0')); // Hola Mund0!
// 11. includes: devuelve true si la cadena contiene un carácter.
console.log(cadena.includes('o')); // true
// 12. startsWith: devuelve true si la cadena comienza con un carácter.
console.log(cadena.startsWith('H')); // true
// 13. endsWith: devuelve true si la cadena termina con un carácter.
console.log(cadena.endsWith('!')); // true

// Métodos de arreglos en JavaScript
// Los métodos de arreglos en JavaScript son los siguientes:
// 1. length: devuelve la longitud del arreglo.
var arreglo = [1, 2, 3, 4, 5];
console.log(arreglo.length); // 5
// 2. push: agrega un elemento al final del arreglo.
arreglo.push(6);
console.log(arreglo); // [1, 2, 3, 4, 5, 6]
// 3. pop: elimina el último elemento del arreglo.
arreglo.pop();
console.log(arreglo); // [1, 2, 3, 4, 5]
// 4. unshift: agrega un elemento al principio del arreglo.
arreglo.unshift(0);
console.log(arreglo); // [0, 1, 2, 3, 4, 5]
// 5. shift: elimina el primer elemento del arreglo.

arreglo.shift();
console.log(arreglo); // [1, 2, 3, 4, 5]
// 6. indexOf: devuelve la posición de la primera aparición de un elemento.
console.log(arreglo.indexOf(3)); // 2
// 7. lastIndexOf: devuelve la posición de la última aparición de un elemento.
console.log(arreglo.lastIndexOf(3)); // 2
// 8. slice: devuelve una parte del arreglo.
console.log(arreglo.slice(0, 3)); // [1, 2, 3]
// 9. splice: agrega o elimina elementos del arreglo.
arreglo.splice(1, 2);
console.log(arreglo); // [1, 4, 5]
// 10. sort: ordena los elementos del arreglo.
arreglo.sort();
console.log(arreglo); // [1, 4, 5]
// 11. reverse: invierte los elementos del arreglo.
arreglo.reverse();
console.log(arreglo); // [5, 4, 1]
// 12. join: convierte el arreglo en una cadena.
console.log(arreglo.join(', ')); // 5, 4, 1
// 13. includes: devuelve true si el arreglo contiene un elemento.
console.log(arreglo.includes(4)); // true
// 14. forEach: ejecuta una función por cada elemento del arreglo.
arreglo.forEach(function(elemento) {
    console.log(elemento);
}
);
// 15. map: crea un nuevo arreglo con los resultados de una función.
var nuevoArreglo = arreglo.map(function(elemento) {
    return elemento * 2;
}
);
// 16. filter: crea un nuevo arreglo con los elementos que cumplen una condición.
var nuevoArreglo = arreglo.filter(function(elemento) {
    return elemento > 3;
}
);
// 17. reduce: reduce los elementos del arreglo a un solo valor.
var valor = arreglo.reduce(function(acumulador, elemento) {
    return acumulador + elemento;
}
);
// 18. some: devuelve true si algún elemento cumple una condición.
console.log(arreglo.some(function(elemento) {
    return elemento > 3;
}
)); // true
// 19. every: devuelve true si todos los elementos cumplen una condición.
console.log(arreglo.every(function(elemento) {
    return elemento > 3;
}
)); // false
