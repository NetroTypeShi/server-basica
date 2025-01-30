function crearTablaUsuarios(users) {
    
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    table.appendChild(thead);
    const tr = document.createElement("tr");
    thead.appendChild(tr);
    
    const claves = Object.keys(users[0]);
    for (let i = 0; i < claves.length; i++) {
      const td = document.createElement("td");
      td.innerText = claves[i];
      tr.appendChild(td);
    }
  
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
  
    for (let i = 0; i < users.length; i++) {
      const tr = document.createElement("tr");
      for (let j = 0; j < claves.length; j++) {
        const td = document.createElement("td");
        const clave = claves[j];
        td.innerText = users[i][clave]; 
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
  
    document.body.appendChild(table);
  }
  
  
  const users = [
    {
      nombre: "admin",
      password: "admin",
      email: "admin@email.com",
      status: "active"
    }
  ];
  
  crearTablaUsuarios(users);