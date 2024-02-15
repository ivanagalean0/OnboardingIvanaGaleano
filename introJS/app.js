    //Nivel de dificultad: Bajo
//1. Crea una variable llamada myName y almacena tu nombre en ella: En su archivo JavaScript cree una variable llamada myName  con su nombre como valor. Pon tu nombre entre comillas, por ejemplo, "Rose". Luego agregue una línea de código para imprimir el nombre de la variable en la consola después del mensaje anterior. Guarde su archivo JavaScript en su editor. Vuelva a cargar la página HTML en su navegador. Deberías ver tu nombre impreso. Si no, investiga y soluciona (haz este paso también para los próximos ejercicios)
let myName = "Ivana"
console.log(myName)

let myLastName = "Galeano"
let miEdad = 21
let miMascota = "Noah"
let petAge = 10

let fullName = myName + " " + myLastName
console.log(fullName)

let presentationText = "Mi nombre es " + fullName + ", tengo " + miEdad + " años. Tengo una mascota llamada " +  miMascota + " y tiene " + petAge + " años."
console.log(presentationText)
        //Nivel Medio
//1. Cree una variable sumAges, restAges, productAges, divisionAges y calcule sus respectivas operaciones con las variables myAge y agePet.
let sumaEdad = miEdad + petAge
console.log(sumaEdad)

let restaEdad = miEdad - petAge
console.log(restaEdad)

let productoEdad = miEdad * petAge
console.log(productoEdad)

let divisionEdad = miEdad / petAge
console.log(divisionEdad)

//2. Cree un objeto llamado estudiante con un mínimo de 5 propiedades, muestre dicho objeto usando console.table() y también muestre cada una de las propiedades del objeto por separado a través de la consola.

const alumno = {
    nombre: "Ivana",
    apellido: "Galeano",
    edad: 21,
    curso: "5to",
    aprobado: true,

}

console.table(alumno)
console.log(alumno.nombre)
console.log(alumno.apellido)
console.log(alumno.curso)
console.log(alumno.edad)
console.log(alumno.aprobado)

//3. Crea un objeto llamado pet con un mínimo de 5 propiedades, muestra dicho objeto usando console.table() y también muestra cada una de las propiedades del objeto por separado a través de la consola.

const mascota = {
    animal: "perro",
    raza: "caniche",
    color:"blanco",
    grita: true,
    años: 10,
}

console.table(mascota)
console.log(mascota.animal)
console.log(mascota.raza)
console.log(mascota.color)
console.log(mascota.grita)
console.log(mascota.años)

//4. Cree un arreglo llamado frutas con un mínimo de 5 elementos y muestre el arreglo completo en la consola y también muestre cada uno de los elementos por separado en la consola.
const frutas = ["Manzana", "Banana", "Pera", "Naranja", "Mandarina"]

console.log("Estas son las frutas: " + frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

    //Nivel de dificultad: Alto
//1. Utiliza un símbolo ( ) que permite ingresar una edad en pantalla y compararla con el número 18, una vez hecho esto guarda el resultado en una variable llamada IamAdult y muestra un mensaje en la consola que dice: "Soyun adulto" (y el valor de la variable).
let edad = prompt("Introduzca su edad aqui:")
let SoyAdulto = edad >= 18
console.log("Soy un adulto? " + SoyAdulto)

//2. Crea un arreglo llamado "números" con un mínimo de 5 elementos y muestra el arreglo completo y cada uno de los elementos por separado en la consola.
const numeros = [10, 20, 30, 40 , 50]
console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

//3. Crea un array llamado "familia" con un mínimo de 5 objetos y muestra el array completo y cada uno de los elementos por separado en la consola.
const familia = [
    {parentesco: "mamá", edad: 55},
    {parentesco: "papá", edad: 61},
    {parentesco: "hermana", edad: 26},
    {parentesco: "hermano", edad: 12},
    {parentesco: "tia", edad: 45},
]

console.log(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

//4. Crea una variable llamada "randomText" formando una frase con el segundo elemento del arreglo de frutas, el cuarto elemento del arreglo de números y la primera propiedad del quinto objeto del arreglo de familia.
let randomText = "me gusta la " + frutas[1] + ", tengo " + numeros[3] + " años y amo a mi " + familia[4].parentesco

console.log(randomText)




















// // tipos de datos
//     //string
// console.log("hola me llamo ivana")
// console.log("10")
//     //number
// console.log(32)
// console.log(5.4)
// // variables

// // operadores

// // objeto
// const mentor = {
//     nombre: "Ivana",
//     apellido: "Galeano",
//     edad: 21,
//     genero: "F",
//     mentor: false,
//     tecnologia: "JavaScript, Java",
//     mascota: {
//         nombre: "chimuela",
//         animal: "gata"
//     },
//     saludar(){
//         console.log("Hola a todos")
//     }
// }
// console.log( mentor )
// console.log(mentor.apellido)


// //array: tipo de lista, agrupa datos
// const alumnos = ["Agustin", "Agustina"]