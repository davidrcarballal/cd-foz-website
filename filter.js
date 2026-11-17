const todos = document.querySelector("#todos");
const jugados = document.querySelector("#jugados");
const pendientes = document.querySelector("#pendientes");

todos.addEventListener("click", () => {
  const tarjetas = document.querySelectorAll(".match-card");

  for (const tarjeta of tarjetas) {
    tarjeta.hidden = false;
  }
});

jugados.addEventListener("click", () => {
  const tarjetas = document.querySelectorAll(".match-card");

  for (const tarjeta of tarjetas) {
    tarjeta.hidden = !tarjeta.classList.contains("jugado");
  }
});

pendientes.addEventListener("click", () => {
  const tarjetas = document.querySelectorAll(".match-card");

  for (const tarjeta of tarjetas) {
    tarjeta.hidden = !tarjeta.classList.contains("pendiente");
  }
});
