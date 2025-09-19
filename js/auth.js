// auth.js
function login(identifier, password){
  const user = getUserByEmailOrId(identifier);
  if(user && user.password === password){
    localStorage.setItem("sessionUser", JSON.stringify(user));
    window.location.href = "Shop.html";
  } else {
    alert("Credenciales inválidas");
  }
}

function logout(){
  localStorage.removeItem("sessionUser");
  window.location.href = "login.html";
}