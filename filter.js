const all = document.querySelector("#all");
const played = document.querySelector("#played");
const pendant = document.querySelector("#pendants");

all.addEventListener("click", () => {
  const cards = document.querySelectorAll(".match-card");

  for (const card of cards) {
    card.hidden = false;
  }
});

played.addEventListener("click", () => {
  const cards = document.querySelectorAll(".match-card");

  for (const card of cards) {
    card.hidden = !card.classList.contains("played");
  }
});

pendant.addEventListener("click", () => {
  const cards = document.querySelectorAll(".match-card");

  for (const card of cards) {
    card.hidden = !card.classList.contains("pendant");
  }
});
