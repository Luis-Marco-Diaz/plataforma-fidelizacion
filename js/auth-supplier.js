// auth.js
function login(identifiersupplier, password){
  const usersupplier = getUserByEmailOrId(identifiersupplier);
  if(usersupplier && usersupplier.password === password){
    localStorage.setItem("sessionUser", JSON.stringify(usersupplier));
    window.location.href = "./dashboard2.html";
  } else {
    alert("Credenciales inválidas");
  }
}

function logout(){
  localStorage.removeItem("sessionUser");
  window.location.href = "./login-supplier.html";
}