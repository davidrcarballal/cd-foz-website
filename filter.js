const all = document.querySelector("#all");
const played = document.querySelector("#played");
const pending = document.querySelector("#pending");

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

pending.addEventListener("click", () => {
  const cards = document.querySelectorAll(".match-card");

  for (const card of cards) {
    card.hidden = !card.classList.contains("pending");
  }
});
