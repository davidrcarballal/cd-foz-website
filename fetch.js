
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
            fecha.textContent = 'Fecha: ' + partido.fecha;

            const resultado = document.createElement('p');
            resultado.textContent =
                'Resultado: ' + partido.resultado;

            entry.appendChild(title);
            entry.appendChild(fecha);
            entry.appendChild(resultado);

            section.appendChild(entry);
        }
    } catch (error) {
        console.error(error);
        section.textContent = 'Error al cargar los partidos';
    }
}

main();
