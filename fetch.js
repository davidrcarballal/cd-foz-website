
async function main() {
    const section = document.querySelector('.dynamic');

    try {
        const response = await fetch('./partidoss.json');

        if (!response.ok) {
            throw new Error('Error al cargar los partidos');
        }

        const partidos = await response.json();

         for (const partido of partidos) {

            const entry = document.createElement('div');
            entry.className = 'partido-card';

            // Nombre de los equipos
            const title = document.createElement('h3');
            title.textContent =
                partido.local + ' vs ' + partido.visitante;

            // Fecha
            const fecha = document.createElement('p');
            fecha.textContent = 'Fecha: ' + partido.fecha;

            // Escudo local
            const escudoLocal = document.createElement('img');
            escudoLocal.src = partido.escudoLocal;
            escudoLocal.alt = 'Escudo de ' + partido.local;
            escudoLocal.className = 'escudo-equipo';

            // Escudo visitante
            const escudoVisitante = document.createElement('img');
            escudoVisitante.src = partido.escudoVisitante;
            escudoVisitante.alt = 'Escudo de ' + partido.visitante;
            escudoVisitante.className = 'escudo-equipo';

            // Resultado
            const resultado = document.createElement('p');
            resultado.textContent = partido.resultado;
            resultado.className = 'resultado';

            // Contenedor del marcador
            const marcador = document.createElement('div');
            marcador.className = 'marcador';

            if (partido.escudoLocal) {
                marcador.appendChild(escudoLocal);
            }

            marcador.appendChild(resultado);

            if (partido.escudoVisitante) {
                marcador.appendChild(escudoVisitante);
            }

            // Añadir elementos a la tarjeta
            entry.appendChild(title);
            entry.appendChild(fecha);
            entry.appendChild(marcador);

            // Añadir tarjeta a la página
            section.appendChild(entry);
        }

    } catch (error) {
        console.error(error);
        section.textContent = 'Error al cargar los partidos';
    }
}

main();