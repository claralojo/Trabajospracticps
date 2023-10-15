/*
Ejercicio 1: Imprimir números pares
Mostra todos los números pares del 1 al 20 utilizando un bucle for.
*/
// CODIGO

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

/*
Ejercicio 2: Sumar números del 1 al 50
Calcula la suma de todos los números del 1 al 50 utilizando un bucle for.
*/
// CODIGO

let sum = 0;

for (let i = 1; i <= 50; i++) {
  sum += i;
}

console.log("La suma de los números del 1 al 50 es: " + sum);

/*
Ejercicio 3: Imprimir elementos de un arreglo
Dado un arreglo de nombres, utiliza un bucle for para imprimir cada nombre en una línea separada.
*/
// CODIGO

const comidasArgentinas = ["Asado", "Empanadas", "Milanesa", "Locro", "Matambre a la pizza"];

for (let i = 0; i < comidasArgentinas.length; i++) {
  console.log(comidasArgentinas[i]);
}

/*
Ejercicio 4: Tabla de multiplicar
Ingresa un número y utiliza un bucle for para imprimir la tabla de multiplicar del 1 al 10 para ese número.
*/
// CODIGO

const numero = parseInt(prompt("Ingresa un número:"));

if (!isNaN(numero)) {
  console.log(`Tabla de multiplicar para ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} * ${i} = ${resultado}`);
  }
} else {
  console.log("Debes ingresar un número válido.");
}

/*
Ejercicio 5: Contar letras en un string
Cuenta cuántas veces aparece una letra específica en una cadena utilizando un bucle for.
*/
// CODIGO

function contarLetraEnCadena(cadena, letra) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i].toLowerCase() === letra.toLowerCase()) {
        contador++;
      }
    }
    return contador;
  }
  
  const cadena = "Esta es una cadena de ejemplo";
  const letraABuscar = "e";
  
  const cantidad = contarLetraEnCadena(cadena, letraABuscar);
  
  console.log(`La letra '${letraABuscar}' aparece ${cantidad} veces en la cadena.`);

/*
Ejercicio 6: Traducir este codigo para que funcione solo con ciclos For:

const numeros = [2, 3, 5, 7, 10];
let sumaCuadrados = 0;
let i = 0;

while (i < numeros.length) {
  sumaCuadrados += numeros[i] * numeros[i];
  i++;
}

console.log("La suma de los cuadrados es:", sumaCuadrados);

Ejercicio: 

/*/

const numeros = [2, 3, 5, 7, 10];
let sumaCuadrados = 0;

for (let i = 0; i < numeros.length; i++) {
  sumaCuadrados += numeros[i] * numeros[i];
}

console.log("La suma de los cuadrados es:", sumaCuadrados);


