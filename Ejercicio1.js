//Ejercicio de reforzamiento. Semana 1

//Tenemos que hacer una maquina de dulces
//Cada dulce tiene un código y un precio

//Pedimos el codigo del dulce y el dinero con el que va a pagar
const prompt = require('prompt-sync')();
var codigo = prompt("Escribe el código del dulce: ");
var monto = prompt("Introduce el monto: ")
//console.log(codigo);
//console.log(monto);




//Códigos
const chocolateC = "xc23"
const paletaC = "c4f2"
const ChicleC = "gt74" 
const galletaC = "l3k8"
const mazapanC = "1234"

//Precios
const chocolateP = 12.50
const paletaP = 5.75
const chicleP = 4.25
const galletaP = 9.10
const mazapanP = 4




//Declaro la variable que guarda el nombre del dulce
var dulce;

// Creo una funcion para compra exitosa
function exito(){
    console.log("Compra de " + dulce + " exitosa")
    console.log("Tu cambio fue de: $" + cambio)
}

//Creo una funcion para un caso de monto insufuciente (fallo)
function dineroInsuf(){
    console.log("El monto es insuficiente. Deposita un monto igual o mayor al precio")
}

//Creo la función para un error (Código inexistente)
function error (){
    console.log("Este código no existe. Intenta de nuevo")
}

//Funcion para devolver dinero despues de un fallo o error
function devolver(){ 
    console.log("Devolviendo dinero...");  
}
     


// Utilizamos switch para poner un caso por código de dulce 
// y así poner las condiciones para ontener el dulce

//Le introducimos a switch la variable codigo que será la que
//tendrá casos diferentes
switch (codigo) {
    //Según sea el codigo introducido será el caso (dulce) que la máquina
    //tomará
    case "xc23": //$12.50
        //Si el monto es mayor o igual al precio del dulce...
        if (monto >= chocolateP){
            //Según el caso (código), la variable dulce tomará
            //su valor para indicar el dulce que vamos a comprar
            var dulce = "chocolate";
            //Guardamos el cambio en una variable
            var cambio = monto - chocolateP;
            //Utilizamos la función de éxito de venta
            exito();
        }
        //En caso de no cumplir la condición anterior (que nos alcance el dinero para comprar)...
        else{
            //Utilizamos la función para dinero insuficiente
            dineroInsuf();
            devolver();
        }
        break;
    
    case "c4f2": //$5.75
        if(monto >= paletaP){
            var dulce = "paleta"
            var cambio = monto - paletaP;
            exito();
        }
        else{
            dineroInsuf();
        }
    break;
    
    case "gt74": //$4.25
        if(monto >= chicleP){
            var dulce = "chicle";
            var cambio = monto - chicleP;
            exito()
        }
        else{
            dineroInsuf()
            devolver();
        }
    break;

    case "13k8": //$9.10
        if(monto >= galletaP){
            var dulce = "galleta"
            var cambio = monto - chicleP
            exito();
        }
        else{
            dineroInsuf()
            devolver();
        } 
    break;

    case "1234":
        if (monto >= mazapanP){
            var dulce = "mazapan";
            var cambio = monto - mazapanP;
            exito();
        }
        else{
            dineroInsuf();
            devolver();
        }
    break;


    default:
        error();
        devolver();
        break;
}