async function main() {
  const section = document.querySelector(".dynamic");

  try {
    const response = await fetch("./partidoss.json");

    if (!response.ok) {
      throw new Error("Error al cargar los matches");
    }

    const matches = await response.json();

    for (const match of matches) {
      const entry = document.createElement("div");
      entry.className = "match-card";

      if (match.result === null) {
        entry.classList.add("pendiente");
      } else {
        entry.classList.add("jugado");
      }

      const title = document.createElement("h3");
      title.textContent = match.local + " vs " + match.visitor;

      const date = document.createElement("p");
      const dateString = String(match.date);

      const year = dateString.slice(0, 4);
      const month = dateString.slice(4, 6);
      const day = dateString.slice(6, 8);

      date.textContent = "Fecha: " + day + "/" + month + "/" + year;

      const shieldlocal = document.createElement("img");
      shieldlocal.src = "./escudos/" + match.shieldlocal + ".webp";
      shieldlocal.alt = "Escudo de " + match.local;
      shieldlocal.className = "escudo-equipo";

      const shieldvisitor = document.createElement("img");
      shieldvisitor.src = "./escudos/" + match.shieldvisitor + ".webp";
      shieldvisitor.alt = "Escudo de " + match.visitor;
      shieldvisitor.className = "escudo-equipo";

      const result = document.createElement("p");
      result.className = "result";
      if (match.result !== null) {
        result.textContent = match.result[0] + " - " + match.result[1];
      } else {
        result.textContent = "Pendiente";
      }

      const marcador = document.createElement("div");
      marcador.className = "marcador";

      if (match.shieldlocal) {
        marcador.appendChild(shieldlocal);
      }

      marcador.appendChild(result);

      if (match.shieldvisitor) {
        marcador.appendChild(shieldvisitor);
      }

      entry.appendChild(title);
      entry.appendChild(date);
      entry.appendChild(marcador);

      section.appendChild(entry);
    }
  } catch (error) {
    console.error(error);
    section.textContent = "Error al cargar los partidos";
  }
}

main();
