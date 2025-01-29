const lista = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"]
function randomFromArray(arr){
    const num = Math.random()*arr.legth
    const numInt = Math.floor(num)
    return arr[numInt]
}

const elemento = randomFromArray(lista)
console.log(elemento)

console.log(randomFromArray(["active","inactive"]))
