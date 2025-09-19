// quote.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("quote-container");
  DB.products.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `${p.name} - $${p.price}`;
    container.appendChild(div);
  });
});