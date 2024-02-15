    //Nivel de dificultad: BAJO
//1. Usando un bucle "for", cree un programa que permita el ingreso de un número entre 1 y 100 a través de un mensaje , luego imprima a través de la consola todos los números que están entre el número ingresado y 0 (es decir, en orden descendente) . 
const num = prompt("Ingrese un número entre el 1 y el 100: ")

for(let i = num; i >= 0; i--){
    console.log(i)
}

//2. Usando un bucle "for", cree un programa que permita la entrada de un número a través de un mensaje entre 1 y 10, y muestre a través de la consola su tabla de multiplicar (solo los primeros 10 múltiplos).

const numero1 = prompt("Ingrese un número entre el 1 y 10")

for(let i = 1; i <= 10; i++){
    console.log(`${numero1} x ${i} = ${i * numero1}`)
}

//3. Usando un bucle " while ", cree un programa que permita la entrada de números a través de un mensaje. Los números deben sumarse (acumularse) en una variable resultante. La entrada de números finalizará cuando el usuario ingrese un 0. Al final, muestre el valor de la variable suma a través de la consola.
let numeroIngresado = Number(prompt("Ingrese un número, cuando quiera cancelar ingrese 0"))
let sumaDeNumeros = 0

while(numeroIngresado != 0){
    sumaDeNumeros += numeroIngresado
    numeroIngresado = Number(prompt("Ingrese un número, cuando quiera cancelar ingrese 0"))
}
alert(`El resultado de la suma es: ${sumaDeNumeros}`)


//4. Usando ahora un bucle "do while" y siguiendo las mismas instrucciones del ejercicio anterior, visualiza en la consola, el valor de la variable que acumula la suma de los números ingresados.
do {
    sumaDeNumeros += numeros
    numeros = Number(prompt("Ingrese un número, cuando quiera cancelar ingrese 0"))
} while (numeros !== 0);
console.log(`El resultado de la suma es: ${sumaDeNumeros}`)

//5. Usando un bucle "for in", crea un objeto con al menos 5 propiedades, haz un programa que recorra dicho objeto y solo muestre todas las claves de sus propiedades en la consola. En la consola debería verse así: nombre, apellido,origen, estudios.

const persona = {
    nombre: "Juana",
    apellido: "Sanchez",
    origen: "Argentina",
    estudios: "Ingeniera Informática",
    edad: 30,
}

for (const propiedad in persona) {
    console.log(propiedad)
}

//6. Usando un bucle "for in", cree un programa que se ejecute a través del objeto creado en el ejercicio anterior y solo muestre los valores de cada una de las claves en la consola.

for (const propiedad in persona) {
    console.log(persona[propiedad])
}

    //Nivel de dificultad: Medio
//1. Usando el bucle que consideras, vamos a utilizar la variable que almacenó la suma de los números en el ejercicio 3 como "número secreto". El nuevo programa permitirá ingresar números a través de un mensaje hasta que el número ingresado sea igual al guardado en la variable del ejercicio #3. Si el valor ingresado es mayor que el número "secreto", notifica al usuario a través de la consola ("el número ingresado es mayor que el secreto", lo mismo si el valor es menor. Así sucesivamente hasta que el usuario adivine el número secreto. Finalmente, muestra un mensaje de felicitación en pantalla y te indica cuántos intentos has realizado ("¡Has acertado! El número secreto era <número> y has hecho <x> intentos"
let intentos = 0
let numeroSecreto = sumaDeNumeros
while(numeroIngresado !== numeroSecreto){
    intentos++
    numeroIngresado = Number(prompt("Ingrese un número, cuando quiera cancelar ingrese 0"))

    if(numeroIngresado > numeroSecreto){
        console.log("El numero ingresado es MAYOR que el secreto.")
    }else{
        console.log("El número ingresado es MENOR que el secreto.")
    }
}
console.log(`¡Has acertado! El número secreto era ${numeroSecreto} y has hecho ${intentos} intentos.`)

//2. Usando el bucle que consideres correcto, crea un programa que reciba un número a través de un mensaje y muestre todos sus divisores (divisores)  a través de la consola. Consejo : DIVISORES/DIVISORES: son todos números naturales que dividen exactamente a otro número natural. Ejemplo: “Los divisores de '15' son: 1, 3, 5 y 15. (La división de '15' entre cualquiera de estos números es exacta) Supongamos que se ingresó 50. Este sería el resultado 50, 25, 10, 5, 2, 1 ¡Consejo! recordar o investigar al operador %
const número = Number(prompt("Ingrese un número"))
for(let i = 0; i <= número; i++){
    if( número % i === 0){
        console.log(i)
    }
}

//3. Teniendo en cuenta la función de timbre, crea un bucle (el que consideres) que muestre una cadena a través de la consola que a su vez concatene la cadena que devuelve la función tantas veces como el número que el usuario ingresa en el teclado. Por ejemplo, si el usuario ingresa el número 5, el resultado debería ser: Ding Dong, Ding Dong, Ding Dong, Ding Dong, Ding Dong

function campana(){
    return "Ding Dong "
}

let numero = Number(prompt("Ingrese un número: "))
let mensaje = ""

for(let i = 0; i < numero; i++){
    mensaje += campana()
}
console.log(mensaje)

//4. Partiendo de las constantes dateLimit y fechas , haz un bucle (el que consideres) que muestre en la consola las fechas del array que sean mayores o iguales a la fecha almacenada en la constante dateLimite . límite de fecha constante = "1997-8-3", fechas constantes = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]
const dateLimit = "1997-8-3"
const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]

for(let i = dates.length - 1; i >= 0; i--){
    if(dates[i] >= dateLimit){
        console.log(dates[i])
    }
}

//6. Usando un bucle "for of", cree una matriz de cadenas con colores e imprima cada uno de los colores incluidos en la matriz a través de la consola. En la consola debería verse así (por ejemplo): Rojo, Verde, Azul, Violeta, Marrón, Negro, Blanco

function mostrarColores(colores){
    for (const color of colores) {
        console.log(color)
    }
}
const color1 = ["Rojo", "Verde", "Azul", "Violeta", "Marrón", "Negro", "Blanco"]

mostrarColores(color1)

//7. Usando un bucle "for of", crea un arreglo con 5 números y haz un programa que recorra ese arreglo y muestre el doble de cada uno de los elementos, en la consola.
const numeros = [1,2,3,4,5]

let i = 0
while(i < numeros.length){
    const numeroActual = numeros[i]
    const doble = numeroActual * 2
    console.log(`El número es ${numeroActual} y su doble es ${doble}`)
    i++
}

//8. Usando el bucle que creas correcto crea un array con al menos 4 objetos con 4 propiedades, cada uno de esos objetos creados debe representar a un miembro de un grupo familiar (pueden ser personas ficticias). Luego haz un programa (al decir programa la intención es que no sea solo el bucle, sino una función que contenga el bucle) que muestre un mensaje de presentación para cada elemento del array a través de la consola.
const familia = [
    {
        nombre: "Claudia",
        apellido: "Rios",
        edad: 55,
        miembro: "Madre"
    },
    {
        nombre: "Hugo",
        apellido: "Galeano",
        edad: 61,
        miembro: "Padre"
    },
    {
        nombre: "Carla",
        apellido: "Galeano",
        edad: 26,
        miembro: "Hija"
    },
    {
        nombre: "Ivana",
        apellido: "Galeano",
        edad: 21,
        miembro: "Hija"
    }
]
function presentaciónFamilia(miembros){
    for (const miembro of miembros) {
        console.log(`Hola, soy ${miembro.nombre} ${miembro.apellido} (${miembro.miembro}) y tengo ${miembro.edad} años.`)
    }
}
presentaciónFamilia(familia)

        //Nivel de dificultad: Alto
//1. Utilizando el bucle que consideres, crea un programa que permita el ingreso de números en la pantalla a través de un aviso y calcula la suma de los números pares por un lado y los números impares por el otro. La entrada de datos finaliza cuando el usuario ingresa un 0. 
let sumaPares = 0;
let sumaImpares = 0
let ingresaNumero

do {
    ingresaNumero = Number(prompt("Ingrese un número, si quiere salir ingrese 0"))

    if(ingresaNumero % 2 === 0){
        sumaPares += ingresaNumero
    }else if(ingresaNumero % 2 !== 0){
        sumaImpares += ingresaNumero
    }

} while (ingresaNumero !== 0);

console.log(`Suma de números pares: ${sumaPares}`)
console.log(`Suma de números impares: ${sumaImpares}`)

//2. Usando el bucle que creas que es correcto, crea una matriz de 10 números y crea un programa que imprima el número más grande de la matriz en la pantalla.
const diezNumeros = [12, 13, 23, 45, 56, 67, 32, 22, 9, 10]

let numeroMayor = diezNumerosumeros[0]

for (const numero of diezNumerosumeros) {
        if(numero > numeroMayor){
            numeroMayor = numero
        }
}
console.log(`El número más grande es: ${numeroMayor}`)