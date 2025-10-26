// db.js - Modelo
const DB = {
  users: [
    { id: "E001", email: "empleado1@empresa.com", password: "12345@", name: "Empleado Uno" },
    { id: "SUPP1", email: "proveedor@empresa.com", password: "12345@", name: "Proveedor Universal" },
    { id: "ADMIN1", email: "admin1@empresa.com", password: "12345@", name: "Administrador Uno" },
    { id: "SADMIN", email: "superadmin@empresa.com", password: "12345@", name: "Super Administrador" }
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

function getUserByEmailOrId(identifieradmin) {
  return DB.users.find(u => u.email === identifieradmin || u.id === identifieradmin);
}

function getUserByEmailOrId(identifiersupplier) {
  return DB.users.find(u => u.email === identifiersupplier || u.id === identifiersupplier);
}
function getUserByEmailOrId(identifiersa) {
  return DB.users.find(u => u.email === identifiersa || u.id === identifiersa);
}