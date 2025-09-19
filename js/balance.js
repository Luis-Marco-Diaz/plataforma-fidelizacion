// balance.js
document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("sessionUser"));
  if(!user) { window.location.href = "login.html"; return; }
  const balance = DB.balances[user.id] || 0;
  document.getElementById("balance-container").innerText = "Saldo: $" + balance;
});