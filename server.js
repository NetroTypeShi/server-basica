const express = require('express');

const app = express();

function holaMundo(request, response){
    console.log("Hola mundo")
    response.send("Hola mundo")
}

app.get("/", holaMundo)

app.listen(3000, ()=>{
    console.log("El servidor está funcionando en el puerto 3000")
})