// db.js - Modelo
const DB = {
  users: [
    { id: "E001", email: "empleado1@empresa.com", password: "12345", name: "Empleado Uno" },
    { id: "E002", email: "empleado2@empresa.com", password: "12345", name: "Empleado Dos" }
  ],
  products: [
    { id: 1, name: "Producto A", price: 100 },
    { id: 2, name: "Servicio B", price: 250 }
  ],
  balances: { "E001": 500, "E002": 750 },
  tracking: { "E001": "En camino", "E002": "Entregado" }
};

function getUserByEmailOrId(identifier) {
  return DB.users.find(u => u.email === identifier || u.id === identifier);
}