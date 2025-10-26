// auth.js
function login(identifiersa, password){
  const superuseradmin = getUserByEmailOrId(identifiersa);
  if(superuseradmin && superuseradmin.password === password){
    localStorage.setItem("sessionUser", JSON.stringify(superuseradmin));
    window.location.href = "./supDashboard.html";
  } else {
    alert("Credenciales inválidas");
  }
}

function logoutsuperadmin(){
  localStorage.removeItem("sessionUser");
  window.location.href = "./login-superadmin.html";
}