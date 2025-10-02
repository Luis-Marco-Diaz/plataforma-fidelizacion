// auth.js
function login(identifieradmin, password){
  const useradmin = getUserByEmailOrId(identifieradmin);
  if(useradmin && useradmin.password === password){
    localStorage.setItem("sessionUser", JSON.stringify(useradmin));
    window.location.href = "./dashboard.html";
  } else {
    alert("Credenciales inválidas");
  }
}

function logoutadmin(){
  localStorage.removeItem("sessionUser");
  window.location.href = "../index.html";
}