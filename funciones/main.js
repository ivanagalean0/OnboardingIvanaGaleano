        //Nivel de dificultad: bajo
//1. Este primer ejercicio es para aprender a declarar una función. En este caso debes declarar una función nombrada llamada "agregar" que dentro de su cuerpo, debe ejecutar una instrucción que muestre el resultado de 100 x 20 en la consola .
function agregar(num1, num2){
    const resultado = num1 * num2
    return `El resultado de ${num1} x ${num2} es = ${resultado}`
}
console.log( agregar(100, 20) )

//6.Función Anonima
/*
const agregar = function(num1, num2){
    const resultado = num1 * num2
    return resultado
}

console.log( agregar(100, 20) )
*/

        //Nivel de dificultad: Medio
//1. Cree una función con nombre llamada "saludar" que recibe un parámetro de cadena que representa un nombre, y muestra un saludo personalizado usando el nombre proporcionado en la consola. Llame/ejecute la función con su propio nombre para verificar que funciona correctamente.
function saludar(nombre){
    const mensaje = `¡Hola ${nombre}! Cómo estás?`
    console.log(mensaje)
}
saludar("Ivana")

//2. Crea una función anónima que recibe dos parámetros numéricos y devuelve el resultado de la multiplicación de ambos. Llama/ejecuta la función con dos valores diferentes y muestra el resultado a través de la consola.
const multiplicacion = function(numero1, numero2){
    const resultado = numero1 * numero2
    return resultado
}
console.log(`El resultado de la multiplicación es = ${multiplicacion(50, 21)}`)

//3. Cree una función con nombre llamada "área" que recibe dos parámetros numéricos, uno que representa la base y el otro la altura de un triángulo. devolver su área.
function area(base, altura){
    const triangulo = (base * altura) / 2
    return triangulo
}
console.log(`El área del triangulo es: ${area(10, 450)}`)

//4. Cree otra función con nombre llamada "perímetro" que recibe tres parámetros numéricos que representan cada uno de los lados de un triángulo, y devuelve el perímetro del triángulo.
function perímetro(lado1, lado2, lado3){
    const perimetroTriangulo = lado1 + lado2 + lado3
    return perimetroTriangulo
}
console.log(`El perímetro del triangulo es: ${perímetro(3, 3, 3)}`)

//5. Crea una  función que toma dos parámetros numéricos que representan el precio y la cantidad de un producto, y devuelve el precio total de la compra.Si el número de productos es mayor o igual a 10, ==> se aplica un descuento del 10% sobre el precio total. Si el número de productos es mayor o igual a 20, ==> se aplica un descuento del 20% sobre el precio total. Llame/ejecute la función con diferentes valores de precio y cantidad para verificar que funciona correctamente
function calcularPrecio(precio, cantidad){
    const precioSinDescuento = precio * cantidad
    let descuento = 0
    if(cantidad >= 20){
        descuento = 0.2
    }else if(cantidad >= 10){
        descuento = 0.1
    }
    const precioConDescuento = precioSinDescuento * (1 - descuento)

    if(descuento > 0){
        console.log(`Se aplicó un descuento del ${descuento * 100}% sobre el precio total.`)
    }
    return precioConDescuento;
}
console.log(`El precio final de la compra es de $${calcularPrecio(50, 10)}`)

console.log(`El precio final de la compra es de $${calcularPrecio(10, 50)}`)

console.log(`El precio final de la compra es de $${calcularPrecio(20, 20)}`)

//6. Cree una función con nombre llamada isAnAdult que recibe un parámetro numérico que representa la edad de una persona, y devuelve un mensaje indicando si la persona es Adulto o no. Si la Edad es mayor o igual a 18 "Eres mayor de edad". Si la Edad es menor de 18 "No eres adulto". Llame a la función con diferentes valores de edad para verificar que funciona correctamente.
function isAnAdult(edad){
    let mayor = edad
    let menor = edad
    if(mayor >= 18){
        console.log("Eres mayor de edad")
    }else if(menor <= 18){
        console.log("No eres adulto")
    }
}
isAnAdult(40)
isAnAdult(13)

        //Nivel de dificultad: Alto
//1. Crea una función (declarala como quieras) que toma un parámetro numérico que representa el ingreso anual de una persona , y les devuelve el impuesto que deben pagar. Si Ingresos menores o iguales a $10,000, ==> impuesto del 10% de los ingresos. Si Ingresos mayores a $10,000 y menores o iguales a $20,000, ==> impuesto del 15% de los ingresos. Si Ingresos mayores a $20,000, ==> impuesto del 20% de los ingresos. Utilice condicionales anidados para implementar esta función. Llame/ejecute la función con diferentes valores de entrada para verificar que funciona correctamente.
function calcularImpuesto(ingresoAnual){
    let impuesto = 0;

    if(ingresoAnual <= 10000){
        impuesto = ingresoAnual * 0.1
        console.log(`Impuesto del 10%: $${impuesto}`)
    }else if(ingresoAnual > 10000 && ingresoAnual <= 20000){
        impuesto = ingresoAnual * 0.15
        console.log(`Impuesto del 15%: $${impuesto}`)
    }else if(ingresoAnual > 20000){
        impuesto = ingresoAnual * 0.2
        console.log(`Impuesto del 20%: $${impuesto}`)
    }
    return impuesto
}
calcularImpuesto(5000) // impuesto 10%
calcularImpuesto(15000) // impuesto 15% 
calcularImpuesto(30000) // impuesto 20% 

//2. Cree una función (declárela como desee) para verificar un día que recibe un parámetro numérico y devuelve un mensaje indicando si es día hábil o no. Si el número es 1, 2, 3, 4, 5, mensaje: "Es un día hábil". Si el número es 6 o 7, mensaje: "Es fin de semana". Utilice la estructura de control de switch anidados para implementar esta función. Llame a la función con diferentes valores de día para verificar que funciona correctamente.
function diasHabiles(numeroDia){
    switch(numeroDia){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5: 
            console.log("Es un día hábil")
        break;
        case 6:
        case 7: 
            console.log("Es fin de semana")
        break;
        default:
            console.log("Numero de día no válido")
    }
}
diasHabiles(3)
diasHabiles(6)
diasHabiles(5)
diasHabiles(7)

//3. Crea un programa usando una función (declárala como quieras) que toma un parámetro que representa Información Personal (ingrésala por teclado). Primero se debe ingresar el Nombre , y si viene vacío ==> el programa debe detenerse y mostrar una consola. error con el mensaje "El nombre no puede estar vacío" .Luego se le debe pedir al usuario que ingrese el Apellido y se debe validar como Nombre en el paso anterior. Finalmente se debe solicitar al usuario que ingrese la edad y también se debe validar. Una vez verificados todos los datos, la función debe guardar todos esos datos en un objeto con 3 propiedades : nombre, apellido y edad y mostrarlo a través de la consola. Para finalizar, la función debe ser llamada/ejecutada y probada con diferentes valores.
function registrarInfoPersonal(){
    let nombre = prompt("Ingrese su nombre: ")
    if(nombre == ""){
        alert("El nombre no puede estar vacío")
    }

    let apellido = prompt("Ingrese su apellido")
    if(apellido == ""){
        alert("El apellido no puede estar vacío")
    }

    let edad = Number(prompt("Por ultimo ingrese su edad"))
    if(edad == ""){
        alert("La edad no puede estar vacía")
    }

    const datosPersona = {
        nombre,
        apellido,
        edad,
    }

    console.log(`Nombre: ${datosPersona.nombre}`)
    console.log(`Apeliido: ${datosPersona.apellido}`)
    console.log(`Edad: ${datosPersona.edad}`)
}
registrarInfoPersonal()

// 4. Crea un programa que se compone de 3 funciones (declaralas como quieras): Primera función de saludo: que toma un parámetro que representa un nombre y devuelve una cadena “Hola, mi nombre es [parámetro]” 2da función:calcularAge: que toma dos parámetros que representan el año de nacimiento y el año actual. Esta función devolverá el resultado del año actual menos el año de nacimiento. 3ª función: presente: llamar/ejecutar las otras dos funciones y ejecutar una alerta con la presentación del usuario. Los datos del usuario deben ser ingresados ​​en pantalla y el resultado final también se muestra en pantalla.

function saludar(){
    const Minombre = prompt("Ingrese su nombre: ")
    console.log(`Hola, mi nombre es ${Minombre}`)
}

function calcularEdad(){
    const añoActual = 2024
    const añoNacimiento = Number(prompt("Ingrese su año de nacimiento: "))
    const resultado = añoActual - añoNacimiento
    console.log(`Mi edad es: ${resultado}`)
}

function presentar(){
    const nombre = saludar();
    const edad = calcularEdad()
    alert(`${nombre} y tengo ${edad} años.`)
} 
presentar()
