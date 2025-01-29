const express = require('express');

const app = express();


function generateUsername() {
    const adjectives = ["george", "fast", "floyd", "funny", "bright"];
    const nouns = ["panda", "dragon", "tiger", "lion", "fox"];
    const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return randomAdj + randomNoun + Math.floor(Math.random() * 1000);
}


function generatePassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}


function generateEmail(username) {
    const domains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    return username + "@" + randomDomain;
}


function generateStatus() {
    return Math.random() > 0.5 ? "active" : "inactive";
}


function generateUsers() {
    let users = [];
    for (let i = 0; i < 500; i++) {
        const username = generateUsername();
        const password = generatePassword();
        const email = generateEmail(username);
        const status = generateStatus();
        const user = {
            "username": username,
            "password": password,
            "email": email,
            "status": status
        };
        users.push(user);
    }
    return users;
}

const users = generateUsers(); 


app.get("/users", (req, res) => {
    res.json(users);
});

 app.get('/users/:id', (req,res)=>{
    const id = req.params.id
    console.log(typeof id)
    res.json(users[id]);
 })

app.use(express.static("public"))

app.listen(3000, () => {
    console.log("El servidor está funcionando en el puerto 3000");
});