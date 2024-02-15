    //Nivel de  dificultad: Bajo 
// 1. A partir del siguiente ejemplo, cree un bloque condicional que evalúe si la variable num1 es mayor que num2, de ser así imprima el valor de num1 a través de la consola, de lo contrario imprima num2.
//2. Basado en el ejercicio 1, ahora modifica el bloque de la siguiente manera: Si num1 es mayor que num2, imprima num1 a través de la consola, si num2 es mayor, imprime num2 y finalmente si son iguales, imprima una cadena que diga "Los números son iguales"
let num1 = 1
let num2 = 5

if(num1 > num2){
    console.log(num1)
}else if(num2 > num1){
    console.log(num2)
}else{
    console.log("Los números son iguales.")
}

//3. Con base en el ejercicio 1, crea un bloque condicional que evalúe si estas variables son iguales o no, de ser así imprime una cadena a través de la consola “Los números son iguales”, en caso contrario “Los números son diferentes”
if(num1 == num2){
    console.log("Los números son iguales.")
}else{
    console.log("Los números son diferentes.")
}

//4. A partir del siguiente ejemplo, cree un bloque condicional que evalúe si una de estas variables es mayor que la otra; si es así, muestre “ La fecha [variable 1] es mayor que [variable 2] ” por consola, y, si son iguales, imprima “ Las fechas son iguales ”
let date1 = "2018-9-2"
let date2 = "2023-7-5"

if(date2 > date1){
    console.log("La fecha " + date2 + " es mayor que la fecha " + date1)
}else{
    console.log("Las fechas son iguales")
}

//6. En este caso, crea un bloque condicional que evalúe cuál de los tres números almacenados en las variables es el mayor. Imprime una cadena a través de la consola que dice “El número [ ] es el más grande”.
let number1 = 5
let number2 = 8
let number3 = 9

if(number1 >= number2 && number1 >= number3){
    console.log("El número " + number1 + " es el más grande.")
}else if(number2 >= number1 && number2 >= number3){
    console.log("El número " + number2 + " es el más grande.")
}else{
    console.log("El número " + number3 + " es el más grande.")
}

    //Nivel Medio
//1. Usando un "switch" , crea un programa que te permita ingresar estos nombres de colores en la pantalla: rojo, azul o verde . E imprimir en pantalla en cada caso: rojo: “El color de la pasión”, azul: “El color del mar”,Verde: “El color de la naturaleza”
const colores = prompt("Ingrese un color: rojo, azul o verde.")

switch(colores){
    case "rojo": 
        console.log("Rojo: el color de la pasión")
    break;
    case "azul":
        console.log("Azul: el color del mar")
    break;
    case "verde":
        console.log("Verde: el color de la naturaleza")
    break;
    default:
        console.log("No es válido.")
    break;
}

//2. Usando un switch, cree un programa que le permita ingresar en la pantalla: dos valores numéricos (número del 1 al 100 ), una operación (suma, resta, multiplicación, división) e imprimir en pantalla en cada caso: suma : primer valor + el segundo. resta : primer valor - el segundo. multiplicación : primer valor * segundo. división : primer valor / segundo. Con el literal correspondiente ("la suma de <num1> y <num2> es...", etc.)
const operation = prompt("Ingrese la operación que desee: +, -, * o /")
const numero1 = Number(prompt("Ingrese un número del 1 al 100: "))
const numero2 = Number(prompt("Ingrese otro número del 1 al 100: "))

switch(operation){
    case "+": 
        console.log("La suma de " + numero1 + " y " + numero2 + " es: " + (numero1 + numero2))
    break;
    case "-":
        console.log("La resta de " + numero1 + " y " + numero2 + " es: " + (numero1 - numero2))
    break;
    case "*":
        console.log("La multiplicación de " + numero1 + " y " + numero2 + " es: " + (numero1 * numero2))
    break;
    case "/":
        console.log("La división de " + numero1 + " y " + numero2 + " es: " + (numero1 / numero2))
    break;
    default:
        console.log("La operación no es válida.")
    break;
} 

//3. A partir de la siguiente estructura, cree un bloque condicional que recibe 2 objetos que representan personas con las propiedades:  nombre, edad, altura e imprimir por consola en el mismo console.log: ¿Cuál de las dos personas es más alta?, ¿Cuál es el mayor?
const personas = [
    {
        nombre: "Ivana",
        edad: 21,
        altura: 1.65
    },
    {
        nombre: "Carla",
        edad: 26,
        altura: 1.70
    },
]
let masAlto
let mayor
if(personas[0].altura > personas[1].altura && personas[0].edad > personas[1].edad){
    masAlto = personas[0].nombre
    mayor = personas[1].nombre
}else{
    masAlto = personas[1].nombre
    mayor = personas[0].nombre
}
console.log(masAlto + " es más alta y mayor que " + mayor)

//4. Crea un programa que te permita ingresar en la pantalla: tu nombre, edad, altura y visión .e imprimir a través de la consola una cadena “ Estás calificado para conducir ”, Para ello la persona debe: Tener al menos 18 años. Mide más de 110 cm. Tener una visión de al menos 8 sobre 10.
const nombre = prompt("Ingrese su nombre:")
const edad = prompt("Ingrese su edad")
const altura = prompt("Ingrese su altura en cm")
const vision = prompt("Ingrese su agudeza visual (de 0 a 10)")

const calificado = edad >= 18 && altura >= 150 && vision <= 8;

if(calificado){
    console.log("Usted está calificado/a para conducir")
}else{
    console.log("No estás calificado/a, no cumplis con los requisitos.")
}

//5. Crea un programa que te permita ingresar tu edad en la pantalla e imprimirla en la pantalla si eres: infantil (0 a 12 años), adolescente (de 13 a 18 años), joven mayor (19 a 45 años), personas mayores (mayores de 45 años), ¿Es realmente tan viejo? (más de 100 espectáculos)
const tuEdad = prompt("Ingrese su edad aqui: ")

if(tuEdad <= 12){
    alert("Tu edad es " + tuEdad + " y sos un infante")
}else if(tuEdad > 12 && tuEdad <= 18){
    alert("Tu edad es " + tuEdad + " y sos un adolescente")
}else if(tuEdad > 18 && tuEdad <= 45){
    alert("Tu edad es " + tuEdad + " y sos un mayor joven")
}else if(tuEdad > 45){
    alert("Tu edad es " + tuEdad + " y sos un anciano")
}else{
    alert("En realidad tiene esa edad?")
}

//6. Crea un programa que te permita ingresar solo números del 1 al 3 en la pantalla y luego cualquier otro dato numérico. Imprimir en pantalla: 1: “El número ingresado es [ ]”, 2: “El doble del número ingresado es [ ]”, 3: “Tres veces el número ingresado es [ ]”, otro: “Ese valor no está permitido”

const numeros = prompt("Ingrese 1, 2 o 3")
switch(numeros){
    case "1": 
        alert(`El número ingresado es: ${numeros}`)
    break;
    case "2":
        const doble = numeros * 2
        alert(`El doble del número ingresado es: ${doble}`)
    break;
    case "3": 
        const triple = numeros * 3
        alert(`Tres veces el número ingresado es: ${triple}`)
    break;
    default:
        alert("Ese valor no está permitido.")
    break;
}

    //Nivel de dificultad: Alto
//1. Cree un programa que permita ingresar los siguientes datos en pantalla: Nombre del cliente ,  Pase (vip o normal), Entrada (sí o no). Personas que tienen tu nombre ==> muestran un mensaje de bienvenida o pase VIP  ==> mostrar un mensaje de bienvenida. Si tienes un billete , pregunta si quieres usarlo. Si es afirmativo ==> mostrar un mensaje de bienvenida. Si es negativo ==> mostrar mensaje de despedida. Y por último en caso de no tener el mismo nombre o pase o entrada VIP , preguntar “¿quieres comprar?”. Y en caso: negativo ==> mostrar mensaje de despedida, afirmativo ==> solicitar dinero disponible, en caso: Más de 1000 ==> muestra una venta exitosa y un mensaje de bienvenida, menos de 1000 ==> mostrar mensaje de rechazo de ventas.
let miNombre = "Ivana"
const nombre2 = prompt("Ingrese su nombre:")
const pase = prompt("Ingrese su tipo de pase: vip/normal")
const entrada = prompt("Tiene entrada? SI/NO")

if(nombre2 === miNombre || pase === "vip"){
    alert("Bienvenido/a!!!")
}else if(entrada === "si"){
    const utilizar = prompt("Desea utilizarla? SI/NO")
    if(utilizar === "si"){
        alert("Bienvenido/a!")
    }else{
        alert("Ok, no tendrá acceso.")
    }
}else{
    const comprar = prompt("Desea comprar una entrada? si/no")
    if(comprar === "si"){
        const dineroDisponible = Number(prompt("Ingrese su dinero disponible"))
        if(dineroDisponible >= 1000){
            alert("Venta exitosa, bienvenido/a!")
        }else{
            alert("Su venta ha sido rechazada, lo siento:(")
        }
    }else{
        alert("Lo siento, no tiene acceso.")
    }
}














