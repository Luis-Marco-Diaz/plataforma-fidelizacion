// tracking.js
document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("sessionUser"));
  if(!user) { window.location.href = "login.html"; return; }
  const status = DB.tracking[user.id] || "Sin información";
  document.getElementById("tracking-container").innerText = "Estado: " + status;
});