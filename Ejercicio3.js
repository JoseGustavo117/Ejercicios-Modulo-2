// CARRERA DE DRONES
//node Ejercicio3.js
const prompt = require('prompt-sync')();

//Damos una explicación al usuario
console.log("Muy bien, estamos por comenzar la carrera de drones.")
console.log("Consta de 6 obstáculos los cuales debes sortear.")
console.log("Veamos si es que puedes manejar un dron.\n")
//Primero creamos la función de ON y OFF
//Donde ON--> 1  y OFF--> 0
//Cualquier otro valor marca un error
console.log("Preciona 1 para encender el dron")

//Se solicita una acción al dron
//Y se guarda en una variable
var iniciar = prompt("-----> ");
console.log("\n")

//Condición para el encendido y el apagado
switch (iniciar) {
    case "1":
        console.log("Encendiendo...\n")
        console.log("Preparando todos los sitemas...\n")
        break;

    case "0":
        console.log("Apagando....\n")
        console.log("Has salido de la carrera")

    default:
        console.log("Acción no válida\n")
        break;
}

//Declaramos las funciones de las acciones
function subir(){
    console.log("Subiendo... ¡¡¡")
}

function bajar(){
    console.log("Bajando... !!!")
}

function derecha(){
    console.log("Girando a la derecha... >>>")
}

function izquierda(){
    console.log("Girando a la izquierda... <<<")
}

//Función para cuando un obstaculo es sorteado con éxito
exito = () => console.log("Bien, vamos con el siguiente\n");

//Esta función es cuendo el dron falla el obstáculo
choque = () => console.log("Has fallado el obstáculo \nIntenta con el siguiente\n");


//El fallo es una acción que no es posible hacer
//El fallo ocurre cuando se preciona un número diferente de 1, 2, 3 o 4
function fallo(){
    console.log("Esta acción no es posble")
}


//Le damos a concursante las intrucciones de manejo del dron
console.log(
"Estos son los movimientos que tu dron puede hacer:\n", 
"1 = Subir ¡¡¡ \n", 
"2 = Bajar !!!\n", 
"3 = Girar a la derecha >>>\n", 
"4 = Girar a la izquierda <<<\n"
);

//Iniciamos la carrera con un poco de emoción
console.log("¿Listo?, ¡Vamos!\n")

//Ponemos en un array la secuencia de obstáculos
var secuencia = ["Aro bajo", "Aro bajo", "Tobogán que gira a la derecha", "Aro alto", "Tobogán que gira a la izquierda", "Aro alto"]
//Declaramos una variable que nos ayude a contar
//Este es un arreglo vacío para añadir un 1 cada que pasa un obtáculo con éxito
var contador = [];


//Hacemos un ciclo para que muestre cada obstáculo
//Tenemos en un arreglo anterior (orden) la secuencia de obtáculos
//"a" representa la posición que estamos dentro de ese arreglo, lo que nos
//permite identificar que si "a" está en 1, estaría en la segunda posición 
//del arreglo, es decir en el segundo obtáculo que es un aro bajo.
for( var a = 0; a <= secuencia.length; a++){

    //Esta es una variable que guarda parte del mensaje de un obtáculo
    var msj = "Se acerca un "

    //Según sea el caso de "a", es decir el # de onstáculo por el que se está cruzando,
    //switch ejecutará las acciones para cada caso
    switch(a){
        //Case 0 se refiere al obtáculo 1 (0 es el valor en el que empieza "a" dentro del
        //ciclo. "a" indica el obtáculo)
        case 0:
            //Se da un mensaje de aviso
            console.log("Primer obstáculo, !es un aro bajo!")
            //Se solicita una acción para cruzar el obstáculo
            var acción = prompt("Mueve el dron para pasar dentro de él: ");
            //Si se hace la acción corecta...
             if( acción == 2 ){
                bajar();
                //Mensaje motivador :)
                console.log("Bien hecho, pero este solo fue el primero\n")
                //Se le agrega un valor al arreglo para al finar medir su longitud que 
                //equivale al # de puntos obtenidos
                //Igual se puede hacer con variable = 0 y variable++
                contador.push(1)
            } //En caso de una acción erronea...
             else{
                 //No te rindas
                console.log("Uy, intenta probar suerte con el otro");
                choque();
            }
            break;

        //Se refiere al obtáculo 2
        case 1:
            console.log(msj + secuencia[a]);
            var acción = prompt("Mueve el dron para pasarlo: ");
            if(acción == 2){
                bajar();
                exito();
                contador.push(1)
            }
            else {
                //Fuerza bro
                choque();
            }
            break;

        case 2:
            console.log(msj + secuencia[a])
            var acción = prompt("Mueve el dron para pasarlo: ");
            if( acción == 3){
                derecha();
                exito();
                contador.push(1)
            }
            else{
                choque();
                console.log("Vamos, todavía quedan algunos más\n")
            }
            break;

        case 3:
            console.log(msj + secuencia[a]);
            var acción = prompt("Mueve el dron para pasarlo: ");
            if( acción == 1 ){
                subir();
                exito();
                console.log("¡Muy bien!\n")
                contador.push(1)
            }
            else{
                choque();
            }
            break;

        case 4:
            console.log(msj + secuencia[a]);
            var acción = prompt("Mueve el dron para pasarlo: ");
            if( acción == 4 ){
                izquierda();
                exito();
                console.log("Ya casi, queda uno más\n");
                contador.push(1)
            }
            else{
                choque();
                console.log("¡Ese sí que era difícil!, vamos con el último\n");
            }
            break;

        case 5:
            console.log(msj + secuencia[a]);
            var acción = prompt("Mueve el dron para pasarlo: ");
            if( acción == 1 ){
                subir();
                console.log("Bien, ese fue el último\n")
                console.log("Eso estuvo muuuuyy cerca")
                console.log("Ese fue el último. Vamos a ver tus resultados\n")
                contador.push(1)
            }
            else{
                choque();
                console.log("Bien, ese fue el último\n")
            }
            break;

        default:
        break;

    }
}

//Le damos al concursante su puntuación
console.log("Núemro de obstáculos sorteados con éxito: " + contador.length + "\n")

//Si logra atravesar 6 obstáculos, la carrera será superada y se mostrará
//en pantalla un mensaje de felicitaciones, mientras que, si no logra
//atravesar 2 obstáculos, la carrera se dará como no superada y se
//deberá mostrar en pantalla.
if(contador.length == 6){
    console.log("!Wow!, al parecer superaste todo con éxito.");
    console.log("Has finalizado la carrera :D\n")
}
else if( contador.length > 2){
    console.log("Has superado la carrera. Felicidades\n")
}
else{
    console.log("Al parecer no alcansaste la puntuación mínima, pero tranquil@,")
    console.log("puedes volver a intentarlo siempre que gustes :)\n")
}

console.log("Has terminado la carrera, espero que te hayas divertido.\n")

//Se solicita que apaguemos el dron
console.log("Preciona 0 para apagar el dron")
var iniciar = prompt("-----> ");
console.log("\n")

//Aquí solo copié el switch del inicio 
switch (iniciar) {
    case "1":
        console.log("Encendiendo...\n")
        console.log("Preparando todos los sitemas\n")
        break;

    case "0":
        console.log("Finalizando tareas de todos los sistemas...\n"
                    + "Ejecución completada\n"
                    + "Apagando...\n")


    default:
        console.log("Acción no válida\n")
        break;
}

//Gracias por haberte usado tu tiempo en esto :)
console.log("Gracias por haberte tomado parte de tu tiempo en este código. "
            + "Has hecho feliz a alguien :')\n")





