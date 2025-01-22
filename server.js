const express = require('express');

const app = express();

function holaMundo(request, response){
    console.log("Hola mundo")
    response.send("Hola mundo")
}
const users = [
    {
        "username":"admin",
        "password":"admin",
        "email":"admin@gmail.com",
        "status":"active"
    },
    {
        "username":"user1",
        "password":"user1",
        "email":"user1@gmail.com",
        "status":"active"
    }
]

function getUsers(request, response){
    response.json(users)
}

app.get("/", (req, res )=> {
    res.send("Hola mundo")
})
app.get("/users", (req, res )=>{
    resizeBy.json(users)
})



app.listen(3000, ()=>{
    console.log("El servidor está funcionando en el puerto 3000")
})