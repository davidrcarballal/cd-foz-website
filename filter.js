const all = document.querySelector("#todos");
const played = document.querySelector("#jugados");
const pendant = document.querySelector("#pendientes");

all.addEventListener("click", () => {
  const cards = document.querySelectorAll(".match-card");

  for (const card of cards) {
    card.hidden = false;
  }
});

played.addEventListener("click", () => {
  const cards = document.querySelectorAll(".match-card");

  for (const card of cards) {
    card.hidden = !card.classList.contains("jugado");
  }
});

pendant.addEventListener("click", () => {
  const cards = document.querySelectorAll(".match-card");

  for (const card of cards) {
    card.hidden = !card.classList.contains("pendiente");
  }
});
