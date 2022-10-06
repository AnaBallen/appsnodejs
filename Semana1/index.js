/*const op=require('./ejercicio1')
op.suma(5,10)
op.resta(6,10)
op.multiplicar(5,2)
op.dividir(10,2)
op.potencia(10,2)
op.raiz(20)
console.log(op)
const ope=process.OpenStdin();
ope.addEventListener("data",(dato)=>{
    console.log(`La opción escogida es ${dato.toString()}`)
    const num1=process.OpenStdin();
    const num2=process.OpenStdin();
    console.log(`num1 ${num1} y ${num2}`);
})*/

const http=require('http') //1. Requerir módulo http
function handleServer(req,res){
    res.writeHead(404,{"Content-type":'text-html'})
    res.write('<h1>Esta es la respuesta del servidor </h1>')  //función callback para manejar el servidor
    res.end()
}
const server=http.createServer(handleServer).listen(5000) //2. Crear el server