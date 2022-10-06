/*const num1=6, num2=10;
let suma=num1+num2;
console.log(`La suma entre ${num1} y ${num2} es ${suma}`);*/

//Funcion sumar
const sumar=(num1,num2)=>{
let suma=num1+num2;
console.log(`La suma entre ${num1} y ${num2} es ${suma}`);
}

//Funcion restar
function restar(num1,num2){
let resta=num1-num2;
console.log(`La resta entre ${num1} y ${num2} es ${resta}`); 
}

//Funcion multiplicar
function multiplicar(num1,num2){
let multiplicar=num1*num2;
console.log(`La multiplicación entre ${num1} y ${num2} es ${multiplicar}`);    
}

//Funcion dividir
function dividir(num1,num2){
let dividir=num1/num2;
console.log(`La división entre ${num1} y ${num2} es ${dividir}`);    
}

//Funcion potenciar
function potenciar(num1,num2){
let potencia=num1**num2;
console.log(`La potencia entre ${num1} elevado a la ${num2} es ${potencia}`);    
}

//Funcion radicación
function radicacion(num1){
let raiz= Math.sqrt(num1)
console.log(`La raiz de ${num1} es ${raiz}`);    
}

    
//exportar las funciones

//exports.suma=sumar
//exports.resta=restar
//exports.multiplicar=multiplicar
//exports.dividir=dividir
//exports.potencia=potenciar
//exports.raiz=radicacion

const calculadora={}
calculadora.suma=sumar;
calculadora.resta=restar;
calculadora.multiplicar=multiplicar;
calculadora.dividir=dividir;
calculadora.potencia=potenciar;
calculadora.raiz=radicacion;

module.exports=calculadora;
