
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

      
            const title = document.createElement('h3');
            title.textContent =
                partido.local + ' vs ' + partido.visitante;

          
            const fecha = document.createElement('p');
            const fechaString = String(partido.fecha);

            const año = fechaString.slice(0, 4);
            const mes = fechaString.slice(4, 6);
            const dia = fechaString.slice(6, 8);

            fecha.textContent = 'Fecha: ' + dia + '/' + mes + '/' + año;

            
            
            
            const escudoLocal = document.createElement('img');
            escudoLocal.src = './escudos/' + partido.escudoLocal + '.webp';
            escudoLocal.alt = 'Escudo de ' + partido.local;
            escudoLocal.className = 'escudo-equipo';

           
            const escudoVisitante = document.createElement('img');
            escudoVisitante.src = './escudos/' + partido.escudoVisitante + '.webp';
            escudoVisitante.alt = 'Escudo de ' + partido.visitante;
            escudoVisitante.className = 'escudo-equipo';

           
            const resultado = document.createElement('p');
            resultado.className = 'resultado';
            if (partido.resultado !== null) {
                resultado.textContent =
                    partido.resultado[0] + ' - ' + partido.resultado[1];
            } else {
                resultado.textContent = 'Pendiente';
            }

            
            const marcador = document.createElement('div');
            marcador.className = 'marcador';

            if (partido.escudoLocal) {
                marcador.appendChild(escudoLocal);
            }

            marcador.appendChild(resultado);

            if (partido.escudoVisitante) {
                marcador.appendChild(escudoVisitante);
            }

          
            entry.appendChild(title);
            entry.appendChild(fecha);
            entry.appendChild(marcador);

       
            section.appendChild(entry);
        }

    } catch (error) {
        console.error(error);
        section.textContent = 'Error al cargar los partidos';
    }
}

main();