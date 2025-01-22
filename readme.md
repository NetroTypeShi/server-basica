# Express basico
```bash
npm init -y
```
Esto creará un `package.json` con los datos de mi proyecto. Este archivo sirve parincipslmente para encontrar las dependencias del proyecto.

Para instalar dependencias de node.js y npm
```bash
npm install express
npm i express
```
Meter `node_modules` a un gitignore

Para arrancar el servidor lanzo `node server.j`

## Endpoint basico
Este endpoint me devuelve un "hola mundo"

```javascript
function holaMundo(request, response){
    console.log("Hola mundo")
    response.send("Hola mundo")
}

app.get("/", holaMundo)
```
